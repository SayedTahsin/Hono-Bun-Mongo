import mongoose from "mongoose";
import { scheduleTaskResetCronJobs } from "../controllers/cronTask";

const mongoConfig = async (): Promise<void> => {
  try {
    const uri = Bun.env.MONGO_URL;
    if (!uri) {
      throw new Error("MongoDB URI not found in .env file");
    }

    await mongoose.connect(uri);
    scheduleTaskResetCronJobs();
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default mongoConfig;
