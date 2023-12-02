const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    actors : [{type:String, required:true}],
    description : {
        type : String,
        required : true
    },
    releaseDate : {
        type : Date,
        required : true
    },
    postUrl : {
        type : String,
        required : true
    },
    featured : {
        type : Boolean
    },
    bookings : [{ type : mongoose.Types.ObjectId, ref:"Booking" }],
    admin : {
        type : mongoose.Types.ObjectId,
        ref : "Admin",
        required : true
    } // here is not use aaray bcoz it has single admin and Movie connect to the Admin

})
module.exports = mongoose.model('movie',movieSchema)