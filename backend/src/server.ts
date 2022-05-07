import http from "http";
import app from "./app";
import { connectDb } from "./DB/connectDB";
import { PORT } from "./config/server.config";
import { MONGODB_URI } from "./config/server.config";
const server = http.createServer(app);

async function startServer() {
  try {
    await connectDb(MONGODB_URI);
    console.log("connection to DB Succeeded");

    server.listen(PORT, () => {
      console.log(`server is runing on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
