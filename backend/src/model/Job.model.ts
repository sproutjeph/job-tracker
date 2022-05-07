import mongoose, { Document } from "mongoose";
export interface IJob {
  company: string;
  posistion: string;
  status: string;
  jobType: string;
  location?: string;
  createdBy: any;
}

interface IJobModel extends IJob, Document {}

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, " Plesae provide a company"],
      maxlength: 50,
    },

    position: {
      type: String,
      maxlength: 100,
      required: [true, " Plesae provide a position"],
    },
    status: {
      type: String,
      maxlength: 100,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      maxlength: 100,
      enum: ["full-time", "remote", "internship"],
      default: "remote",
    },
    jobLocation: {
      type: String,
      default: "my city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IJobModel>("Job", jobSchema);
