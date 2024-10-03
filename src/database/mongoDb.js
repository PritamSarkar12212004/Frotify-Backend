import mongoose from "mongoose";
const Database = () => {
  try {
    mongoose.connect(
      "mongodb+srv://pritam7796419792:ONKdNVSGrnQUVBzX@fiancemanagment.uin8m.mongodb.net/finance?retryWrites=true&w=majority&appName=FianceManagment"
    );
    console.log("Database connected successfully");
  } catch (error) {}
};
export default Database;
 