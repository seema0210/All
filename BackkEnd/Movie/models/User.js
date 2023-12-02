const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    bookings : [{ type : mongoose.Types.ObjectId, ref:"Booking"}]
    // user collection refet to the Booking collection
    // user array here bcoz user can book multiple movies at a time.
})
module.exports = mongoose.model('user',userSchema)