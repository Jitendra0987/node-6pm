const express=require("express");
const Route=express.Router();
const controll=require("../controller/Controller")  

Route.post("/datasave",controll.dataSaved)
Route.get("/dataDisplay",controll.dataDisplayed)

module.exports=Route;
