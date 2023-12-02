const { Router } = require('express');
const { addAdmin, adminLogin, getAllAdmins } = require('../controller/admin-controller');

const router = Router()

router.post('/signup', addAdmin)
router.post('/login', adminLogin)
router.get('/getAllAdmins', getAllAdmins)

module.exports = router;