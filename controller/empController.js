

const home=(req,res)=>{
         res.render("Home")
}
const about=(req,res)=>{
    res.render("About")
}
const contact=(req,res)=>{
    res.render("Contact")
}
module.exports={
    home,
    about,
    contact
}