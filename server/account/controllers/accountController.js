const Account = require('../models/accountModel');

// @route POST /accounts
const createAccount = async (req, res) => {
    const { client, solde } = req.body;

    if (!client && !solde) {
        res.status(400).json({ message: 'Enter the solde'});
    };

    const account = await Account.create({
        client: client,
        solde: solde
    });

    res.status(200).json(account);
}

// @route GET /accounts
const getClientAccounts = async (req, res) => {
    const clientId = req.params.id;
    const accounts = await Account.find({ client: clientId });
    res.status(200).json(accounts);
}

module.exports = {
    createAccount,
    getClientAccounts,
}