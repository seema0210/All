const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        // Blog is the collection
        required: true
    }]
    // take array because each user has multiple blogs
})
module.exports = mongoose.model("User", userSchema)
// here use User but in deleteBlog use user