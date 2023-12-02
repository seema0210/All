const { Router } = require('express');
const { loginUser, addUser } = require('./widGetBackendController');
const router = Router()

router.post('/add', addUser)
router.post('/login', loginUser)

module.exports = router;