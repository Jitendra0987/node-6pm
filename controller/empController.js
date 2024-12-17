const EmpModel=require("../model/empModel")

const emphome=(req,res)=>{
    res.render("home")
}
const empinsert=(req,res)=>{
   res.render("Insert")
}
const empdisplay=(req,res)=>{
    res.render("Display")
}
const empcontact=(req,res)=>{
     res.render("Contact")
}

const empDataSave=(req,res)=>{
        const {eno,nm,ct,sal}=req.body;
        
        EmpModel.create({
            empno:eno,
            name:nm,
            city:ct,
            salary:sal
        })
        
        res.render("Insert")
}
module.exports={
    emphome,
    empinsert,
    empdisplay,
    empcontact,
    empDataSave
}