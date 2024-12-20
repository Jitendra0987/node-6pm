
const express=require("express");
const route=express.Router();
const empContor=require("../controller/empController");



route.get("/",empContor.empHome);
route.get("/insert",empContor.empInsert);
route.get("/display",empContor.empDisplay);
route.get("/contact",empContor.empContact);
route.post("/datasave",empContor.empDatasave);
route.get("/recdel",empContor.recordDelete);

module.exports=route;