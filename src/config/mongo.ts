import mongoose from "mongoose";

const mongoConfig = async (): Promise<void> => {
  try {
    const uri = Bun.env.MONGO_URL;
    if (!uri) {
      throw new Error("MongoDB URI not found in .env file");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default mongoConfig;
