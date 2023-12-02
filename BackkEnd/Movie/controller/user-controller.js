const Booking = require('../models/Booking');
const User = require('../models/User')
const bcrypt = require('bcryptjs')

 const getAllUser = async (req,res) => {
    try{
        const data = await User.find();
        if(data){
            res.send(data)
        } else{
            res.send({message : 'Not data found'})
        }
    } catch(e){
        console.log('error at get data backend')
    }
}
const signup = async (req,res) => {
    const { name, email, password } = req.body;
    if( !name && name.trim()==='' && !!email && email.trim()==='' && !password && password.trim()===''){
        throw Error({message : 'Pleae enter the all data'})
    }
    let data;
    // we need to convert our password into bcrypt format
    const hashedPassword = bcrypt.hashSync(password)
    try{
        data = new User({name, email, password : hashedPassword})
        await data.save()
        if(!data){
           return res.send({message : 'empty data'})
        } 
    } catch(e){
        console.log('error at signup backend', e)
    }
    return res.send(data)
}
const updateUser = async(req,res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    if( !name && name.trim()==='' && !!email && email.trim()==='' && !password && password.trim()===''){
        throw Error({message : 'Pleae enter the all data'})
    }
    let data;
    const newPassword = bcrypt.hashSync(password)
    try{
         data =await User.findByIdAndUpdate(id, {name, email, password : newPassword})
         await data.save()
        if(data){
            res.send({mesage:'update successfully'})
        } else{
            res.send({message:'Please update data'})
        }
    }   catch(e) {
        console.log('error update back')
    }

}
const deleteUser = async(req,res) => {
    const id = req.params.id;
    let data;
    try{
        data = await User.findByIdAndDelete(id)
        if(data){
            res.send({message : 'delete successfully'})
        } else{
            res.send({message : 'something went wrong'})
        }
    }catch(e){
        console.log('error at delete back')
    }
}
const login = async(req,res) => {
    const { email,password } = req.body;
    if( !email && email.trim()==='' && !password && password.trim()===''){
        res.send({message : 'please enter the all fields'})
    }
    let data;
    try{
        data = await User.findOne({ email })
        if(!data){
            res.send({message : 'unable to find data'})
        }
        const passCompare = bcrypt.compareSync(password,data.password)
        if(!passCompare){
            res.send({message : 'incorrect password'})
        }
    } catch(e){
        console.log('error at login back')
    }
    return res.send({id : data._id})
}
// req madhe jys user chi id use keli aahe tya user chi all biiking fetch karner
const getAllBookingOfUser = async(req,res) => {
    const id = req.params.id;
    let data;
    try{
        data = await Booking.find({ user: id })
    } catch(e){
        console.log('error at back user get all booking')
    }
    if(!data){
        return res.send({message : 'data not found'})
    }
    return res.send(data)
}
module.exports = { getAllUser,signup,updateUser,deleteUser,login,getAllBookingOfUser }