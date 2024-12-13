
const express=require("express");
const route=express.Router();
const stuControler=require("../controler/studentControler");


route.get("/stuhome",stuControler.home)
route.get("/stuname",stuControler.name)
route.get("/stufees",stuControler.fees)


module.exports=route;