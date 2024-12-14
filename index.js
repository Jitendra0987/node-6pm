const express=require("express");
const app=express();
const port=8000;
const Emproute=require("./routes/empRoutes")


app.set("view engine","ejs")
app.use("/",Emproute)

app.listen(port,()=>{
    console.log(`server is on${port}`)
})