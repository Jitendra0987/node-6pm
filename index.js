

const express=require("express")
const app=express();
const port=8000;

app.get("/",(req,res)=>{
         res.send("<h1> this is home page </h1>")
})
app.get("/home",(req,res)=>{
        res.send("<h1> this is main home page </h1>")
})
app.listen(port,()=>{
`this is server on${port}`})


