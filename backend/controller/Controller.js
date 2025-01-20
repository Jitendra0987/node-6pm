const stuModel=require("../models/UserModel");

const dataSaved=async(req,res)=>{

    const {name,rollno,city,email,image}=req.body;
          
    const Data=await stuModel.create({
         name:name,       
         city:city, 
         rollno:rollno,
         email:email,
         image:image
        
    })
    res.send("okkk")
}


 const dataDisplayed=async(req,res)=>{
             const Data= await stuModel.find();
              res.send(Data)
 }


module.exports={
    dataSaved,
    dataDisplayed
}