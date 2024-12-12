const express=require("express")
const route=express.Router();

route.get("/teacherinfo",(req,res)=>{
        res.send("<h1> this is teacher info page")
})

route.get("/subject",(req,res)=>{
      res.send("<h1> student subject are maney")
})

route.get("/depart",(req,res)=>{
      res.send("<h1> teacher department ")
})

route.get("/salary",(req,res)=>{
      res.send("<h1> teacher selary 80000 </h1>")
})

module.exports=route;