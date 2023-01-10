const express = require('express');
const router = express.Router();
const loginAdmin = require('../controllers/loginController');
const registerAdmin = require('../controllers/registerController');

router.post('/login', loginAdmin);
router.post('/register', registerAdmin);

module.exports = router;