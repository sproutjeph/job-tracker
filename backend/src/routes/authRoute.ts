import express from "express";
import { login, register, upDateUser } from "../controllers/authcontroller";
import authUserMiddleware from "../middleware/auth.midddleware";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authUserMiddleware, upDateUser);

export default router;
