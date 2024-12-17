const express=require("express");
const route=express.Router();
const  empCont=require("../controller/empController")

route.get("/",empCont.emphome);
route.get("/insert",empCont.empinsert);
route.get("/display",empCont.empdisplay);
route.get("/contact",empCont.empcontact);
route.post("/datasave",empCont.empDataSave);

module.exports=route;