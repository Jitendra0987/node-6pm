const express=require("express");
const route=express.Router();
const controll=require("../controller/Controller")  

route.post("/datasave",controll.dataSaved)
route.get("/dataDisplay",controll.dataDisplayed)

module.exports=route;
