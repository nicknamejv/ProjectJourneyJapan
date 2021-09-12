const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please Provide A Unique Username!"],
            unique: true,
        },

        email: {
            type: String,
            required: [true, "Please Provide A Valid Email Address!"],
            unique: true,
        },

        password: {
            type: String,
            required: [true, "Please Provide A Unique Password!"],
        },

        avatar: {
            type: String,
            required: [true, "Please Provide A Profile Picture!"],
        },

        bio: {
            type: String,
            required: [true, "Please Provide Your User Bio!"],
            default: "My bio...",
        },
    },

    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);

module.exports = User;