
const insert=(req,res)=>{
        res.render("Insert")
}

const home=(req,res)=>{
         res.render("Home")
}
const about=(req,res)=>{
    res.render("About")
}
const contact=(req,res)=>{
    res.render("Contact")
}


const studatasave=(req,res)=>{
        const {eno, nm ,ct , sal } = req.body;
        EmpModel.create({
            empno:eno,
            name:nm,
            city:ct,
            salary:sal

        })
        res.render("Insert")
}

module.exports={
    home,
    about,
    contact,
    insert
}