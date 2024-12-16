
const express=require("express");
const route=express.Router();
const EmpControllers=require("../controller/empController")

route.get("/",EmpControllers.home);
route.get("/about",EmpControllers.about);
route.get("/contact",EmpControllers.contact);
route.get("/insert",EmpControllers.insert);

module.exports=route;