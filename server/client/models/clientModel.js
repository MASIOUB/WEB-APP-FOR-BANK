const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        CIN: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        ville:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Client', clientSchema);