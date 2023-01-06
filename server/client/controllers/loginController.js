const bcrypt = require('bcryptjs');
const Client = require('../models/clientModel');

const loginClient = async (req, res) => {
    const { email, password } = req.body;

    const client = await Client.findOne({ email});

    if (client && await bcrypt.compare(password, client.password)) {
        return res.status(200).json({
            client: client,
        })
    }
}

module.exports = loginClient;