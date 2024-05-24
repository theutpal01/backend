import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const conInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Connected to MongoDB! DB HOST: ${conInstance.connection.host}`
    );
  } catch (err) {
    console.log("MONGO AUTH_ERR:", err);
    process.exit(1);
  }
};

export default connectDB;
