const Transaction = require('../models/transactionModel');
// const Account = require('../../account/models/accountModel');

// @route POST /transactions
const createTransaction = async (req, res) => {
    const { type, amount, client, account } = req.body;

    if (!type && !amount && !client && !account) {
        res.status(400).json({ message: 'all fields are required' });
    };

    if (type === 'deposit') {
    }
}

module.exports = {
    createTransaction,
}