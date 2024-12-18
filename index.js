const express=require("express");
const app=express();
const port=8000;
const empRout=require("./routes/empRoute");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/bholla").then(()=>{
    console.log("db connected!!!!!!")
})
app.set("view engine","ejs")
// body_parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


app.use("/",empRout);


app.listen(port,()=>{
    console.log(`server on ${port}`)
})