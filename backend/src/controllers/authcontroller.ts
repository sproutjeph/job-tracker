import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserModel from "../model/User.model";
import { BadRequestError, UnauthenticatedError } from "../errors/index";
export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await UserModel.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await UserModel.create({ name, email, password });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      lastName: user.lastName,
      location: user.location,
    },
    token,
  });
}
export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide email and Password");
  }

  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("invalid Credentail");
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("invalid Credentail");
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
}
export async function upDateUser(req: any, res: Response) {
  const { name, email, lastName, location } = req.body;

  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("please provide email and Password");
  }

  const user = await UserModel.findOne({ _id: req.user.userId });

  if (user) {
    user.email = email;
    user.name = name;
    user.lastName = lastName;
    user.location = location;
  }
  await user?.save();
  const token = user?.createJWT();

  res.status(StatusCodes.OK).json({
    user: {
      name: user?.name,
      lastName: user?.lastName,
      location: user?.location,
      email: user?.email,
    },
    token,
    location: user?.location,
  });
}
