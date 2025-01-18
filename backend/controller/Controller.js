const userModel=require("../models/UserModel")
const profileModel=require("../models/Profile")


const userSave=async(req,res)=>{
    // console.log(req.body)
    const {username, email, firstname,lastname}=req.body;
      const User=await userModel.create({
        username:username,
        email:email
      })

      const profi= await profileModel.create({
        firstname:firstname,
        lastname:lastname,
        userid:User._id
    })

  res.status(200).send("user created")
}

   const userDisplay=async(req,res)=>{
         const Data= await profileModel.find().populate("userid")
         res.send(Data);
        // res.send("okk")
        

   }

module.exports={
    userSave,
    userDisplay
}