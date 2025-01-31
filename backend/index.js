
const express=require("express");
const app=express();
const port=8000;
const bodyparser = require('body-parser')
const cors=require("cors");
const Imgroute=require("./Routes/Route");
const mongoose =require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/cluddatta").then((res)=>{
    console.log("DB connectedd!!")
})

app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/cludenary",Imgroute)


app.listen(port,()=>{
    console.log(`server on port${port}`)
})