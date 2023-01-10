const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email});

    if (admin && await bcrypt.compare(password, admin.password)) {
        return res.status(200).json({
            admin: admin,
        })
    }
}

module.exports = loginAdmin;