import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import JWT from "jsonwebtoken";
import { JWT_LIFETIME, JWT_SECRET } from "../config/server.config";
interface IUser {
  name: string;
  email: string;
  password: string;
  lastName?: string;
  location?: string;
  createJWT: () => string;
  comparePassword: (canditatePassword: string) => boolean;
}

interface IUserModel extends IUser, Document {}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " Plesae provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, " Plesae provide a email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, " Plesae provide a email"],
    minlength: 6,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "lastName",
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "my city",
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

userSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id, name: this.name }, JWT_SECRET, {
    expiresIn: JWT_LIFETIME,
  });
};

userSchema.methods.comparePassword = async function (
  canditatePassword: string
) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);

  return isMatch;
};

export default mongoose.model<IUserModel>("User", userSchema);
