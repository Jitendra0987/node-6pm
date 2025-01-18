const express=require("express");
const Route=express.Router();
const controll=require("../controller/Controller")  

Route.post("/userSave", controll.userSave);
Route.get("/userdisplay",controll.userDisplay);


module.exports=Route;
