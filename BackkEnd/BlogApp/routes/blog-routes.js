const { Router } = require('express')
const { getAllBlogs, addBlog, updateBlog, getBlogById, deleteBlog, getBlogbyUserId } = require('../contrellers/blog-controller')
const router = Router()

router.get('/getAllBlogs', getAllBlogs)
router.get('/getBlogById/:id', getBlogById)
router.post('/addBlog', addBlog)
router.put('/updateBlog/:id', updateBlog)
router.delete('/deleteBlog/:id', deleteBlog)
router.get('/user/:id', getBlogbyUserId)

module.exports = router