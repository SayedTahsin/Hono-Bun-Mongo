import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  mail: string;
  password: string;
  completedTasks: string;
  totalTasks: string;
}

const userSchema: Schema = new Schema(
  {
    mail: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    completedTasks: { type: String },
    totalTasks: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("users", userSchema);

export default User;
