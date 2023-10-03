import mongoose from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  phoneNo?: string;
  address?: string;
  job?: string;
  bio?: string;
  password: string;
  confirmPassword: string;
  emailVerified?: string | null;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
    },
    address: {
      type: String,
    },
    job: {
      type: String,
    },
    bio: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    emailVerified: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
