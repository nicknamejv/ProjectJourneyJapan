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
            default: "https://www.vippng.com/png/full/416-4161690_empty-profile-picture-blank-avatar-image-circle.png",
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