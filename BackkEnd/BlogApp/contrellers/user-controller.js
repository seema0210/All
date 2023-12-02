const mongoose = require('mongoose')
const User = require('../model/User')
const bcrypt = require("bcryptjs")

const getAllUsers = async (req, res) => {
    let data;
    try {
        data = await User.find()
    } catch (e) {
        console.log('error at get all data Backend')
    }
    if (!data) {
        console.log('data not found')
    }
    return res.send(data)
}

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email })
    } catch (e) {
        console.log(err)
    }
    if (existingUser) {
        console.log('user already exist, Login Instead')
        return
    }
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: []
    })
    try {
        await user.save()
    } catch (e) {
        console.log('error at backend signup')
    }
    if (!user) {
        console.log('user not found')
    }
    return res.send(user)
}

const login = async (req, res) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email })
    } catch (e) {
        console.log('error at login')
    }
    if (!existingUser) {
        console.log('user not found by email')
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!isPasswordCorrect) {
        console.log('incorrect password')
    }
    return res.send({ message: 'login successfully', user: existingUser })
}

module.exports = { getAllUsers, signup, login }