import mongoose from "mongoose";
const Database = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error)
  }
};
export default Database;
