
import express from "express";
import connectDB from "./database/db.js";

const app = express()
const PORT = 5000

app.get("/",(req,res)=>{
    res.send("server started!!!")
})

const startServer = async ()=>{
    try {
    await connectDB();
    app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
   
})        
    } catch (error) {
        console.log(`Error connecting to Mongodb Database ${error.message}`);   
        process.exit(1);
    }
}

startServer();