const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
    {
        city: {
            type: String,
            required: true,
        },
        
        description: {
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