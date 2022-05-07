import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8000;

export const MONGODB_URI = process.env.MONGODB_URI as string;

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const JWT_LIFETIME = process.env.JWT_LIFETIME;
