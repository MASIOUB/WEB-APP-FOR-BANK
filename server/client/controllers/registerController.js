const bcrypt = require('bcryptjs');
const Client = require('../models/clientModel')

const registerClient = async(req, res) => {
    if(Object.keys(req.body).length > 0) {
        const {
            firstName,
            lastName,
            CIN,
            phone,
            email,
            password,
            ville,
        } = req.body;

        // check fieilds 
        if (!firstName || !lastName || !CIN || !phone || !email || !password || !ville){
            console.log('all fields are required');
            return res.status(402).json({ message: "all fields are required" });
        }
        

        // check email
        const isClientExist = await Client.findOne({ email });

        if (isClientExist) return console.log('this email is already in use');

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create client
        const client = await Client.create({
            firstName,
            lastName,
            CIN,
            phone,
            email,
            password: hashedPassword,
            ville,
        })

        client ? res.status(201).json({ message: "User was registered successfully!" })
        : null;
    }
}

module.exports = registerClient;