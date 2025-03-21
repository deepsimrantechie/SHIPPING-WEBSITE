import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected databse");
    });
    await mongoose.connect(`${process.env.MONGODB_URL}/Shipping`);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDb;
