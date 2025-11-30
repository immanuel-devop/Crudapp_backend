
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()


const databaseURI =process.env.MONGODB_URI;

const connectDB = async ()=>{
    try {
        await mongoose.connect(databaseURI); 
        console.log(`connected to mongodb database`)
    } catch (error) {
        console.log(`Failed to connect to the mongodb database ${error.message}`);
        
    }
}

export default connectDB;