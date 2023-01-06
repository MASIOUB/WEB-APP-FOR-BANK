const Client = require('../models/clientModel');

// @route Get /clients
const getAllClients = async (req, res) => {
    const clients = await Client.find();

    res.status(200).json(clients);
}

module.exports = { getAllClients };