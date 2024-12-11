

const express=require("express")
const app=express();
const port=8000;
const sturoute=require("./routes/studentRoutes")

app.use("/student",sturoute)


app.listen(port,()=>{
`this is server on${port}`})


