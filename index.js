

const express=require("express");
const app=express();
const port=8000;
const stuRoute=require("./routes/studentRoutes")
const teacRoute=require("./routes/teacherRoutes")


app.use("/students",stuRoute);
app.use("/teacher",teacRoute)


app.listen(port,()=>{
      console.log(`server on ${port}`)
})