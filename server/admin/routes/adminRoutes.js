const express = require('express');
const router = express.Router();
const loginAdmin = require('../controllers/loginController');

router.post('/login', loginAdmin);

module.exports = router;