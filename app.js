import express from 'express'
import connectDB from './Database/db.js'


const app = express()
const PORT = 3000 || process.env.PORT

app.get('/',(req,res)=>{
    res.json("i m from server")
})

const startServer = async()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server running on the port http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Error connnecting to mongodb database :${error.message}`);
        process.exit(1)
    }
}
startServer()