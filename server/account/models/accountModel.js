const mongoose = require('mongoose');

const accountSchema = mongoose.Schema(
    {
        number: {
            type: Number,
            unique: true,
            required: true,
        },
        solde: {
            type: Number,
            required: true,
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Client",
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Account', accountSchema);