const mongoose = require('mongoose');

const jadeAndy = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('webTech', jadeAndy);