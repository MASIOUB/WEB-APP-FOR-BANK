const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel')

const registerAdmin = async(req, res) => {
    if(Object.keys(req.body).length > 0) {
        const {
            username,
            email,
            password,
        } = req.body;

        // check fieilds 
        if (!username || !email || !password)
        return console.log('all fields are required');

        // check email
        const isAdminExist = await Admin.findOne({ email });

        if (isAdminExist) return console.log('this email is already in use');

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create admin
        const admin = await Admin.create({
            username,
            email,
            password: hashedPassword,
        })

        admin ? res.status(201).json({
            username: admin.username,
            email: admin.email,
            password: hashedPassword,
        })
        : null;
    }
}

module.exports = registerAdmin;