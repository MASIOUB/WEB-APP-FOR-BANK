const Account = require('../models/accountModel');

// @route POST /accounts
const createAccount = async (req, res) => {
    const { client, solde } = req.body;

    console.log(req.body);

    if (!client && !solde) {
        res.status(400).json({ message: 'Enter the solde'});
    };

    const accountIsExist = await Account.findOne({ client });

    if (accountIsExist) {
        return res.status(500).json('You have already an account')
    }else{
        const account = await Account.create({
            client: client,
            solde: solde
        });
    
        res.status(200).json(account);
    };

    
}

// @route GET /accounts
// const getClientAccounts = async (req, res) => {
//     const clientId = req.params.id;
//     const accounts = await Account.find({ client: clientId }).populate('client');
//     (accounts)
//     ? res.status(200).json(accounts)
//     : console.log('accounts not found')
// }

const getClientAccounts = async (req, res) => {
    // const 
    console.log(req)
    // const accounts = await Account.find({ client: req.client.id});
    res.status(200).send('accounts');
};

module.exports = {
    createAccount,
    getClientAccounts,
}