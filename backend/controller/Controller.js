const StuModel=require("../models/UserModel")

const dataSaved=async(req,res)=>{
  const{ stuname, rollno, city, email, imgname}=req.body;

  const Data= await StuModel.create({
    stuname:stuname,
    rollno:rollno,
    city:city,
    email:email,
    imgname:imgname
  })
  res.send("ok")

}

  const dataDisplayed=async(req,res)=>{
    const Data= await StuModel.find();
    res.send(Data);
  }

module.exports={
    dataSaved,
    dataDisplayed
}