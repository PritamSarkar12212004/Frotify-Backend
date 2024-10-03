import mongoose from "mongoose";
import "dotenv/config";

const Database = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {}
};
export default Database;
