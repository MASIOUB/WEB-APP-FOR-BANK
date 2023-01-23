const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
    {
        type: {
            type: String,
            enum: ['deposit', 'withdrawal'],
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Client",
            required: true,
        },
        account: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Transaction', transactionSchema);