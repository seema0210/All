const { Router } = require('express');
const { newBooking, getBookingById, deleteBooking } = require('../controller/booking-controller');
const router = Router()

router.post('/addBooking', newBooking) 
router.get('/:id', getBookingById)
router.delete('/:id', deleteBooking)

module.exports = router;
