
const express=require("express");
const app=express();
const port=8000;
const bodyparser = require('body-parser')
const cors=require("cors")


app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(( req, res, next)=>{
    console.log("aAPP LEVEL MIDDLEWEAR-1")
    next();
})

app.use(( req, res, next)=>{
    console.log("aAPP LEVEL MIDDLEWEAR-2")
    next();
})

app.get("/home",(req,res, next)=>{
    console.log("Home page")
    res.send("ok");
    next();
})

app.use(( req, res, next)=>{
    console.log("aAPP LEVEL MIDDLEWEAR-3")
    next();
})

app.get("/about",(req,res )=>{
    console.log("about page")
    res.send("ok");
    
})


app.listen(port,()=>{
    console.log(`server on port${port}`)
})