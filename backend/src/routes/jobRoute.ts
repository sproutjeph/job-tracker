import express from "express";
import {
  createJob,
  getAllJobs,
  upDateJob,
  deleteJob,
  showStats,
} from "../controllers/jobcontroller";

const router = express.Router();

router.route("/").post(createJob);
router.route("/").get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").patch(upDateJob);
router.route("/:id").delete(deleteJob);

export default router;
