const { default: mongoose } = require("mongoose");
const Blog = require("../model/Blog");
const User = require("../model/User");

const getAllBlogs = async (req, res) => {
    let blog;
    try {
        blog = await Blog.find().populate('user')
        // need to get user with blog
    } catch (e) {
        console.log('error get all blogs')
    }
    if (!blog) {
        console.log('blogs not found')
    }
    return res.send(blog)
}

const addBlog = async (req, res) => {
    const { title, description, image, user } = req.body;
    let existingUser;
    try {
        existingUser = await User.findById(user)
        // we need to find which user create given blog

    } catch (e) {
        console.log(e)
    }
    if (!existingUser) {
        console.log({ message: "not found user" })
    }
    const blog = new Blog({ title, description, image, user })
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await blog.save({ session })
        existingUser.blogs.push(blog);
        await existingUser.save({ session })
        session.commitTransaction()
    } catch (e) {
        console.log('error at add blog', e)
    }
    if (!blog) {
        console.log({ message: 'blog not found' })
    }
    return res.send(blog)
}

const updateBlog = async (req, res) => {
    const id = req.params.id;
    const { title, description, image, user } = req.body;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(id, { title, description, image, user })
        await blog.save()
    } catch (e) {
        console.log('error at blog update', e)
    }
    return res.send(blog)
}

const getBlogById = async (req, res) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id)
    } catch (e) {
        console.log(e)
    }
    if (!blog) {
        console.log('blog not found')
    }
    return res.send(blog)
}

const deleteBlog = async (req, res) => {
    // if delete the given blog then need to delete the id of the given blog inside the User array.
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndDelete(id).populate("user")
        // this refer to the User collection
        await blog.user.blogs.pull(blog)
        // given blog chya aat madhe user field aahe aani user collection chya aat madhe blog field aahe
        await blog.user.save() // need to save user collection in db
    } catch (e) {
        console.log('error at delete blog')
    }
    if (!blog) {
        console.log('not deleted')
    }
    return res.send({ message: "delete blog successfully" })
}

const getBlogbyUserId = async (req, res) => {
    const id = req.params.id;
    let userBlogs;
    try {
        userBlogs = await User.findById(id).populate('blogs')
        // user collection la User name dile aani populate madhe use kartana 'user' use kele aani blog collection la Blog name dile aani populate madhe use kartana 'blogs' use kele bcoz i think multiple blogs aslyanule
    } catch (e) {
        console.log('error at get blogs by user id', e)
    }
    if (!userBlogs) {
        return res.send({ message: "not blog found" })
    }
    return res.send({ user: userBlogs })
}

module.exports = { getAllBlogs, addBlog, updateBlog, getBlogById, deleteBlog, getBlogbyUserId }