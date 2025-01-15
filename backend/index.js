
const express=require("express");
const app=express();
const port=8000;
const bodyparser = require('body-parser')
const cors=require("cors")
const setMid=require("./middleWear/middleWear.js")


app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get("/home",(req,res,next)=>{
    // throw new Error("home error genrate in home page  !!!")
    res.send("ok hai");
    next();
})


app.use("/about",(req,res,next)=>{
    throw new Error("about page error !!!")
    res.send("my about page");
    next();
})


app.use(setMid)
app.listen(port,()=>{
    console.log(`server on port${port}`)
})