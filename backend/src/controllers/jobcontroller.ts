import { Request, Response } from "express";
import moment from "moment";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors";
import JobModel from "../model/Job.model";
import checkPermission from "../utils/checkPermission";
import mongoose from "mongoose";
export async function createJob(req: any, res: Response) {
  const { company, position } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide a position and Company");
  }

  req.body.createdBy = req.user.userId;
  const job = await JobModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
}
export async function getAllJobs(req: any, res: Response) {
  const { search, status, sort, jobType } = req.query;

  let queryObject: {
    createdBy: any;
    status?: string;
    jobType?: string;
    position?: any;
  } = {
    createdBy: req.user.userId,
  };

  if (status && status !== "all") {
    queryObject = {
      ...queryObject,
      status: status,
    };
  }

  if (jobType && jobType !== "all") {
    queryObject = {
      ...queryObject,
      jobType,
    };
  }

  if (search) {
    queryObject = {
      ...queryObject,
      position: { $regex: search, $options: "i" },
    };
  }

  let result = JobModel.find(queryObject);

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("position");
  }
  if (sort === "z-a") {
    result = result.sort("-position");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await JobModel.countDocuments(queryObject);

  const numOfPages = Math.ceil(totalJobs / limit);
  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
}
export async function upDateJob(req: any, res: Response) {
  const { id: jobId } = req.params;
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("please provide all values");
  }

  const job = await JobModel.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No Job Found with this id: ${jobId}`);
  }

  //check permissions so that job cant be updated by any user
  checkPermission(req.user, job.createdBy);
  const updatedJob = await JobModel.findOneAndUpdate(
    {
      _id: jobId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updatedJob });
}

export async function deleteJob(req: any, res: Response) {
  const { id: jobId } = req.params;

  const job = await JobModel.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No Job Found with this id: ${jobId}`);
  }

  checkPermission(req.user, job.createdBy);

  await job.remove();

  res.status(StatusCodes.OK).json({ msg: "Delete Job Succeeded" });
}
export async function showStats(req: any, res: Response) {
  let stats = await JobModel.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  let monthlyApplications: any = await JobModel.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item: any) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");

      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ stats, monthlyApplications });
}
