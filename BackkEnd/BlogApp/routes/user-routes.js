const { Router } = require("express")
const { getAllUsers, signup, login } = require("../contrellers/user-controller")
const router = Router()

router.get('/getAllUsers', getAllUsers)
router.post('/signup', signup)
router.post('/login', login)

module.exports = router