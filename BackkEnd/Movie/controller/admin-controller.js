const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secreteKey = 'seemadhananjaynale'

const addAdmin = async(req,res) => {
    // 1st check admin is available in db or not
    const { email, password } = req.body;
    if(!email && email.trim() && !password && password.trim()){ // this concept call validation
       return res.send({mesage : 'Inalid Input'})
    }
    const existingUser = await Admin.findOne({email})
    if(existingUser){
        return res.send({message : 'user already exist'})
    }
    let data;
    const hashedPassword = bcrypt.hashSync(password)
    try{
        data = new Admin({ email, password:hashedPassword })
        data.save()
        if(data){
          return res.send(data)
        }
    } catch(e){
        console.log('error at back asmin signup')
    }
}
const adminLogin = async (req,res) => {
    const { email, password } = req.body;
    if(!email && email.trim() && !password && password.trim()){
        return res.send({mesage : 'Inalid Input'})
     }
     try{
        let checkAdmin = await Admin.findOne({email});
        const checkPassword = bcrypt.compareSync(password,checkAdmin.password)
        const token = jwt.sign({id:checkAdmin._id},secreteKey,{expiresIn:'1d'})
        if(checkAdmin && checkPassword){
            // const data = await Admin.find()
            res.send({mesage:'authentication compleed',token, id:checkAdmin._id})
        }
        if(!checkAdmin || !checkPassword){
            res.send({mesage:'plese chack your data'})
        }
     } catch(e){
        console.log('error at admin login back')
     }
}
const getAllAdmins = async (req,res) => {
    let admins;
    try{
        admins = await Admin.find()
    } catch(e){
        console.log('error at get all admin at back')
    }
    if(!admins){
        return res.send({message : 'not found admins'})
    }
    return res.send(admins)
}

module.exports = { addAdmin,adminLogin,getAllAdmins }
