import mongoose, { Schema, Document } from "mongoose";

interface ITask extends Document {
  text: string;
  status: boolean;
  mail: string;
  category: string;
}

const taskSchema: Schema = new Schema(
  {
    text: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    mail: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model<ITask>("tasks", taskSchema);

export default Task;
