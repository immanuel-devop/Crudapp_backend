import express from 'express'
const app = express()
const PORT = 3000 || process.env.PORT

app.get('/',(req,res)=>{
    res.json("i m from server")
})



app.listen(PORT,()=>{
    console.log(`Server running on the port http://localhost:${PORT}`);
    
})
