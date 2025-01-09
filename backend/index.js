
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

app.use(( req, res, next)=>{
    console.log("aAPP LEVEL MIDDLEWEAR-1")
    next();
})


app.get("/home",(req,res, next)=>{
    console.log("Home page")
    res.send("ok");
    next();
})

app.get("/about",(req,res )=>{
    console.log("about page")
    res.send("ok");
    
})

app.get("/contact",setMid.contactMidlewaer1,setMid.contactMidlewaer2,(req,res)=>{
    console.log("server page");
    res.send("ok")
})

app.get("/delete",(req,res )=>{
    console.log("delete page")
    res.send("ok")
})

app.listen(port,()=>{
    console.log(`server on port${port}`)
})