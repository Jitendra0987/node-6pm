
const express=require("express");
const route=express.Router();
const EmpControllers=require("../controller/empController")

route.get("/",EmpControllers.home);
route.get("/about",EmpControllers.about);
route.get("/contact",EmpControllers.contact);

module.exports=route;