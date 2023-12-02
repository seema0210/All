const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./BlogApp/routes/user-routes')
const blogRouter = require('./BlogApp/routes/blog-routes')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://BlogApp:BlogApp123@cluster0.njhdlwd.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('db conneced')
    }).catch(() => {
        console.log('error occure at db connection')
    })

app.use('/api/user', userRouter)
app.use('/api/blog', blogRouter)

app.listen(4000, () => {
    console.log('blog server start')
})