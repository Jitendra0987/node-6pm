
const express=require("express");
const route=express.Router();
const stuControler=require("../controler/studentControler")

route.get("/stuhome",stuControler.stuhome);
route.get("/stusubject",stuControler.stuSubject);
route.get("/sturesult",stuControler.stuResult);
route.get("/stufees",stuControler.stuFees)

module.exports=route;