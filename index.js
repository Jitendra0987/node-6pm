const express=require("express");
const app=express();
const port=8000;
const stuRoute=require("./routes/studentRoutes")

app.use("/students",stuRoute);


app.listen(port)