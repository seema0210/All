const { Router } = require('express')
const { getAllUser, signup, updateUser, deleteUser, login, getAllBookingOfUser } = require('../controller/user-controller')
const router = Router()

router.get('/getAllUser',getAllUser)
router.post('/signup',signup)
router.put('/:id', updateUser) // this id access by using params
router.delete('/:id', deleteUser)
router.post('/login', login)
router.get('/bookings/:id', getAllBookingOfUser)
module.exports = router