const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        minLength : 6,
        required : true
    },
    timeZone : {
        type : String,
        required : true
    },
    deviceType : {
        type : String,
        required : true
    },
    deviceToken : {
        type : String,
        required : true
    },
    rememberMe : {
        type : Boolean,
        required : true
    }
})
module.exports = mongoose.model('user', userSchema)