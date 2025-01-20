const mongoose=require("mongoose");


const stuSchema= new mongoose.Schema({
          name:String,
          city:String,
          rollno:Number,
          email:String,
          image:String
})
module.exports=mongoose.model("stud",stuSchema)