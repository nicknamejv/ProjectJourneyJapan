const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },
    },
);

const City = mongoose.model('City', citySchema);

module.exports = City;