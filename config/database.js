import mongoose from "mongoose";
const ConnectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};
export default ConnectDatabase;
