const Booking = require('../models/Booking')
const User = require('../models/User')
const Movie = require('../models/Movie');
const { default: mongoose } = require('mongoose');

const newBooking = async(req,res) =>{
    const { movie,date,seatNumber,user } = req.body;

    if(!movie && !date && !seatNumber && !user ){
       return res.send({message : 'Invalid Input'})
    }

    let existingUser;
    let existingMovie;
    try{
        existingUser = await User.findById(user)
        existingMovie = await Movie.findById(movie)
    }   catch(e) {
        console.log('error at back new Booking')
    }
    if(!existingMovie){
        return res.send({message : 'Movie not found with given id'})
    }
    if(!existingUser){
        return res.send({message : 'user not found'})
    }

    let booking;
    try{
        booking = new Booking({movie,date:new Date(`${date}`),seatNumber,user})
        const session = await mongoose.startSession()
        session.startTransaction()
        existingUser.bookings.push(booking)
        existingMovie.bookings.push(booking)
        await existingUser.save({ session })
        await existingMovie.save({ session })
        await booking.save({ session })
        // await booking.save()
        session.commitTransaction()
    } catch(e){
        console.log('error at new booking back')
    }
    if(!booking){
        return res.send({message : 'movie booking not successfully'})
    }
    return res.send(booking)
}

const getBookingById = async(req,res) => {
    const id  = req.params.id;
    let booking;
    try{
        booking = await Booking.findById(id)
    } catch(e){
        console.log('error at back get bokking by id')
    }
    if(!booking){
        return res.send({message : 'booking not found'})
    }
    return res.send(booking)
}

const deleteBooking = async(req,res) => {
    const id = req.params.id;
    let bookingDelete;
    try{
        bookingDelete = await Booking.findByIdAndRemove(id).populate("movie user") // we need to refer the collections like Movie and User thats why it is used.    
        // ha movie delete kela tar User aani Movie collection madhil booking array aahe tyamadhil ya current movie chi id suddha delete zali pahije. 
        console.log(bookingDelete)
        const session = await mongoose.startSession()
        session.startTransaction()
        await bookingDelete.user.bookings.pull(bookingDelete);
        // Booking collection madhe user key aahe ti key User collection la connect aahe aani User connection la booking key aahe (this key is array) tyatil to current movie pull kela aahe.
        await bookingDelete.movie.bookings.pull(bookingDelete)
        await bookingDelete.movie.save({ session })
        await bookingDelete.user.save({ session })
        session.commitTransaction()
        } catch(e) {
        console.log('error at delete booking', e)
    }
    if(!bookingDelete){
        return res.send({message : "not found movie"})
    }
    return res.send({message : "delete successfully"})
}
module.exports = { newBooking, getBookingById, deleteBooking }