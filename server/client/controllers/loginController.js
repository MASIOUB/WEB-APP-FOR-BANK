const bcrypt = require('bcryptjs');
const Client = require('../models/clientModel');
const generateToken = require('../middlewares/generateToken');

const loginClient = async (req, res) => {
    const { email, password } = req.body;

    const client = await Client.findOne({ email });

    if (!client) return res.status(404).send({ message: "User Not found." });

    const passwordIsValid = await bcrypt.compare(password, client.password);

    if (!passwordIsValid) return res.status(402).send({ message: "Invalid Password!" });

    if (client && await bcrypt.compare(password, client.password)) {
        console.log(client.firstName + " " + client.lastName);
        const data = {
            id: client.id,
            firstName: client.firstName,
            lastName: client.lastName,
            CIN: client.CIN,
            phone: client.phone,
            email: client.email,
            ville: client.ville,
            token: generateToken(client.id),
        };
        console.log(data);
        return res.status(200).json(data);
    }
}

module.exports = loginClient;