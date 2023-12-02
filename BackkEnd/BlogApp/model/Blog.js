const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        // User is the collection name
        required: true
    }
})
module.exports = mongoose.model("Blog", blogSchema)
// here use Blog but in populate method use blogs (at getBlogByUserId)