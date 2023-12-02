const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./Movie/routes/user-router')
const adminRouter = require('./Movie/routes/admin-router')
const movieRouter = require('./Movie/routes/movie-router')
const bookingRouter = require('./Movie/routes/booking-router')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://MovieStore:moviestore123@cluster0.yxks0kb.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('database connected')
})
.catch(() => {
    console.log('error at connection to db')
})

app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/movie', movieRouter)
app.use('/booking', bookingRouter)

app.listen(5000,()=>{
    console.log('server start')
})