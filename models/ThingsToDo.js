const mongoose = require('mongoose');

const thingsToDoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        city: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'City',
            required: true,
        },

        image: {
            type: String,
            required: true,
        },
    },
);

const ThingsToDo = mongoose.model('ThingsToDo', thingsToDoSchema);

module.exports = ThingsToDo;