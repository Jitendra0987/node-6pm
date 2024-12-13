

const home=(req,res)=>{
       res.send("<h1> this is home page </h1>")
} 

const name=(req,res)=>{
     res.send("<h1> this is name page </h1>")
}
const fees=(req,res)=>{
  res.send("<h1> this is fees page </h1>")
}

module.exports={
  home,
  name,
  fees
}