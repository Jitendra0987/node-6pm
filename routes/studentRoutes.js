
const express= require("express")
const route=express.Router();

route.get("/stuhome",(req,res)=>{
    res.send("<h1> this is home page </h1>")

})

route.get("/stuclass",(req,res)=>{
    res.send("<h1> this is class page </h1>")

})

route.get("/stufees",(req,res)=>{
    res.send("<h1> this is fees page </h1>")

})

route.get("/sturesult",(req,res)=>{
    res.send("<h1> this is result page </h1>")

})


module.exports=route;



