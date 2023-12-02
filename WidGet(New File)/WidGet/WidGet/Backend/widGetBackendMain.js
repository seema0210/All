const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./WidGetBackend/widGetBackendRouter')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://WidGet:WidGet123@cluster0.x7gktp6.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('database connected successfully')
}).catch(()=>{
    console.log('error at database connection')
})

app.use('/api/Account', userRouter)

app.listen(3000,()=>{
    console.log('server start')
})