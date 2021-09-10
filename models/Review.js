const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        thingstodo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ThingsToDo',
            required: true,

        },

        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: true,
        // },
    },

    {
        timestamps: true,
    },
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;