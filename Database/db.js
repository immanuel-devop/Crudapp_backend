import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const databaseURI =process.env.MONGODBURI

const connectDB = async () => {
  try {
    await mongoose.connect(databaseURI);
    console.log(`Mongodb database connected successfully`);
  } catch (error) {
    console.log(`failed to connect to mongo db database ${error.message}`);
  }
};

export default connectDB;
