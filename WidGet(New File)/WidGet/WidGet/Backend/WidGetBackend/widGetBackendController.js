const User = require('./widGetBackendModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const addUser = async(req,res) => {
    const { email,password,timeZone,deviceType,deviceToken,rememberMe } = req.body;
    if(!email && email.trim()==='' && !password && password.trim() === '' && !timeZone && timeZone.trim()==='' && !deviceType && deviceType.trim()==='' && !deviceToken && deviceToken.trim() ==='' && !rememberMe && rememberMe.trim() === ''){
        return res.send('Invalid Input')
    }
    let newUser ;
    let newPassword = bcrypt.hashSync(password)
    // here 'Test@124' password used but it convert into hash format
    try{
        newUser = new User({ email,password:newPassword,timeZone,deviceType,deviceToken,rememberMe })
        await newUser.save()
    } catch(e){
        console.log('error backend at new user')
    }
    if(!newUser){
        return res.send({message : 'Data not post'})
    }
    return res.send(newUser)
}
const loginUser = async(req,res) => {
    const { email, password } = req.body;
    if(!email && email.trim()==='' && !password && password.trim() === ''){
        return res.send('Invalid Input')
    }
    let login;
    let newPassword;
    try{
        login = await User.findOne({ email })
        newPassword = bcrypt.compareSync(password, login.password)
    }
    catch(e){
        console.log('error backend at login')
    }
    if(login && newPassword){
        return res.send({message:'login Successfully'})
    }

}
module.exports = { addUser,loginUser }