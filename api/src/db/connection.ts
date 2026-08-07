import mongoose from "mongoose";

const connectToDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );

    console.log("Connected to MongoDB");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Unable to connect to MongoDB: ${error.message}`);
    } else {
      console.error("Unable to connect to MongoDB:", error);
    }

    process.exit(1);
  }
};

export default connectToDB;