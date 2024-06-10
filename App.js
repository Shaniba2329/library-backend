const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})


app.post("/contact",(req,res)=>{
    res.send("welcome to my contact")
})

app.listen(8080,()=>{
    console.log("server started")
})