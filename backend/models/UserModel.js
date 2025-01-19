const mongoose=require("mongoose");

const  stuSchema= new mongoose.Schema({
       stuname:String,
       rollno:Number,
       city:String,
       email:String,
       imgname:String
})
module.exports =mongoose.model("student",stuSchema)