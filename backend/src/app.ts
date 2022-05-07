import express from "express";
const app = express();
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import path from "path";

import { errorHandlerMiddleware, notFound } from "./middleware";
import AuthRouter from "./routes/authRoute";
import JobsRouter from "./routes/jobRoute";
import authUserMiddleware from "./middleware/auth.midddleware";
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

if (process.env.NODE !== "production") {
  app.use(morgan("dev"));
}
app.use(helmet());

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/jobs", authUserMiddleware, JobsRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use(notFound);
app.use(errorHandlerMiddleware);

export default app;
