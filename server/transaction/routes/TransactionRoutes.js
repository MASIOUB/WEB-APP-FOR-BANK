const express = require('express');
const router = express.Router();
const { createTransaction } = require('../controllers/transactionController');
const { protect } = require('../../client/middlewares/authMiddleware');

router.post('/', createTransaction);

module.exports = router;