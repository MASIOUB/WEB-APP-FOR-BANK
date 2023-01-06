const bcrypt = require('bcryptjs');
const Client = require('../models/clientModel')

const registerClient = async(req, res) => {
    if(Object.keys(req.body).length > 0) {
        const {
            fullName,
            phone,
            email,
            password,
            ville,
            address
        } = req.body;

        // check fieilds 
        if (!fullName || !phone || !email || !password || !ville || !address)
        return console.log('all fields are required');

        // check email
        const isClientExist = await Client.findOne({ email });

        if (isClientExist) return console.log('this email is already in use');

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create client
        const client = await Client.create({
            fullName,
            phone,
            email,
            password: hashedPassword,
            ville,
            address,
        })

        client ? res.status(201).json({
            fullName: client.fullName,
            phone: client.phone,
            email: client.email,
            password: hashedPassword,
            ville: client.ville,
            address: client.address,
        })
        : null;
    }
}

module.exports = registerClient;