const express=require("express");
const app=express();
const port=8000;
const empRout=require("./routes/empRoute");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/nagin").then(()=>{
    console.log("db Connected!!!!")
})



app.set("view engine", "ejs")
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/",empRout)


app.listen(port,()=>{
    console.log(`server on port ${port}`)
})