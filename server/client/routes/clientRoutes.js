const express = require('express');
const router = express.Router();
const registerClient = require('../controllers/registerController');
const loginClient = require('../controllers/loginController');
const { getAllClients } = require('../controllers/clientController');

router.post('/register', registerClient);
router.post('/login', loginClient);
router.get('/', getAllClients);

module.exports = router;