import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "../config/server.config";
import { UnauthenticatedError } from "../errors/index";
import JWT from "jsonwebtoken";

async function authUserMiddleware(req: any, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload: any = JWT.verify(token, JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
}

export default authUserMiddleware;
