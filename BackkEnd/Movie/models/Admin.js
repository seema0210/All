const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        minLength : 5,
        required : true
    }, 
    addMovies : [
        // here is a collection of Admin and Movie collection
        {
            type : mongoose.Types.ObjectId,
            ref : "Movie"
        }
] // array beacuse multiple movies (admin can add multiple movies ) i.e reference data type here
})
module.exports = mongoose.model('Admin',adminSchema)