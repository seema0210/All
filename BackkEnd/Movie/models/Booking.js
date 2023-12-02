const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    movie : {
        type : mongoose.Types.ObjectId,
        ref : "Movie",
        required : true
    }, // connect to the Movie collection
    date : {
        type : Date,
        required : true
    },
    seatNumber : {
        type : Number,
        required : true
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : true
    } // connect to the User collection
    // yethe movie and user la array use nahi kela bcoz (each uer can book multiple movie) pan user ne book kelelya 1 ch user asnar aahe. aani each book kelelya movie la saperatly seatNum, date asnar aahe.
})
module.exports = mongoose.model('booking',bookingSchema)