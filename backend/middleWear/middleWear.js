

const contactMidlewaer1=(req,res,next)=>{
    console.log("service Midlewear-1");
    next();
}

const contactMidlewaer2=(req,res,next)=>{
    console.log("service Midlewear-2");
    next();
}

module.exports={
    contactMidlewaer1,
    contactMidlewaer2

}