// here 1st we need to varify the token. 
// why here only varify token.
// we can varify the token from the headers. 1st we will get the token after the login (token get from the admin), it will send the token to the movie.
// id token is varify or valid successfully then only we will able to create movie
// send the token inside the header, //
// in authorization select 'Bearer Token' , we set authorization with bearer token, 

const jwt = require('jsonwebtoken')
const secreteKey = 'seemadhananjaynale' // it use same every time
const Movie = require('../models/Movie');
const { default: mongoose } = require('mongoose');
const Admin = require('../models/Admin');

const addMovie = async(req,res) => {
    const existindToken = req.headers.authorization.split(" ")[1];
    // this token convert into array, 1st element of this array is 'Barear' word and 2nd is token but we want to get token thats why use [1]
    if(!existindToken && existindToken.trim() === ''){
        return res.send({message : 'empty token'})
    }

    // 1st we need admin id, 
    let adminId
    // 1st we need verify token then create new movie

    // i am confuse it is descryptio or not 
    jwt.verify(existindToken, secreteKey, (error,decrypted) => {
        if(error){
            return res.send({message : 'not verify tiken'})
        } else{
            adminId = decrypted.id; // this id get from admin-controller file --> adminLogin  (const token = jwt.sign({id:checkAdmin._id},secreteKey,{expiresIn:'1d'}))
            return;
        }
                
    })
    console.log(adminId)
    // create new movie
    const { title, description, releaseDate, postUrl, featured, actors  } = req.body;
    if(!title && title.trim()==='' && !description && description.trim()==='' && !postUrl && postUrl.trim()===''){
        return res.send({mesage : 'Invalid Inputs'})
    }
    let movie;
    try{
        movie = new Movie({title, description, releaseDate : new Date(`${releaseDate}`), postUrl, featured, admin:adminId, actors})
        // this part need when Movie and Admin connection --> create session then display in Admin model only the id's of the movies. 
        // we have allready created Admin id (adminId) --> bcoz kontya Admin ne kiti movies create kelet te samajle pahije.
        const session = await mongoose.startSession()
        const adminUser = await Admin.findById(adminId) // it is need bcoz we understand which Admin create which movies. (db madhe bharpur admin astat tar kontya admin ne konte movie tayar kele aahet te samajane. tyasathi adminId finf kela aahe)
        session.startTransaction()
        await movie.save({ session })
        // await movie.save() now it is not need
        adminUser.addMovies.push(movie)  // addMovies is a array inside the Admin(adminUser)
        await adminUser.save({ session })
        await session.commitTransaction()
    } catch(e){
        console.log('error at movie(token) validation back')
    }
    if(!movie){
        return res.send({mesage : 'Request Failed'})
    }
    return res.send(movie)
}

const getAllMovie = async(req,res) =>{
    let movies;
    try {
        movies = await Movie.find()
    } catch(e){
        console.log('error at back get all movie ')
    }
    if(!movies){
        res.send({message : 'not found movie'})
    }
    return res.send(movies)
}

const getMovieById = async(req,res) => {
    const id = req.params.id;
    let movie;
    try{
        movie = await Movie.findById(id)
    } catch(e){
        console.log('error at back get by id movie')
    }
    if(!movie){
       return res.send({message : 'movie not found'})
    }
    return res.send(movie)
}

module.exports = { addMovie, getAllMovie, getMovieById }
