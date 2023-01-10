const express = require('express');
const router = express.Router();
const { createAccount, getClientAccounts } = require('../controllers/accountController');

router.post('/', createAccount);
router.get('/:id', getClientAccounts);

module.exports = router;