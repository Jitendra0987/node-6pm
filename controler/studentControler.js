

const  stuhome=(req,res)=>{
    res.send("<h1> student home page </h1>")
}

const  stuSubject=(req,res)=>{
  res.send("<h1> student subject page </h1>")
}

const  stuResult=(req,res)=>{
  res.send("<h1> student result page </h1>")
}

const  stuFees=(req,res)=>{
  res.send("<h1> student fees page </h1>")
}

module.exports={
  stuhome,
  stuSubject,
  stuResult,
  stuFees
}