const express = require('express');
const router = express.Router();
const { createAccount, getClientAccounts } = require('../controllers/accountController');
const { protect } = require('../../client/middlewares/authMiddleware');

router.post('/', createAccount);
router.get('/get-account', protect, getClientAccounts);

module.exports = router;