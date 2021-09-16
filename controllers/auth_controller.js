const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User, City } = require("../models");


// NOTE: GET Sign Up
router.get('/signup', async (req, res, next) => {
    try {
        const allCities = await City.find({});

        const context = {
            cities: allCities,
            error: null,
        };

        return res.render('auth/signup', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: POST Sign Up
router.post('/signup', async (req, res) => {
    try {
        const foundUser = await User.exists(
            { username: req.body.username },
        );

        const foundEmail = await User.exists(
            { email: req.body.email },
        );

        if (foundUser) {
            throw "Username is already taken. Please try again!"
        };

        if (foundEmail) {
            throw 'Email is already taken. Please try again!'
        };

        // salt here for hash
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;

        // create user in DB
        const newUser = await User.create(req.body);

        return res.redirect('/journeyjapan');

    } catch (error) {
        console.log(error);
        const context = { error };
        return res.render('auth/signup', context);
    };
});


// NOTE: POST Login
router.post('/login', async (req, res) => {
    try {
        // check if user exists 
        const foundUser = await User.findOne({
            username: req.body.username
        });

        // if not redirect to register page
        if (!foundUser) {
            throw 'Username is incorrect or not found. Please try again or signup.'
        }

        // if user exists we will validate the user if password match they will be logged in
        const match = await bcrypt.compare(req.body.password, foundUser.password);

        // if not match we will send error
        if (!match) {
            throw 'Your password is invalid!'
        };
        // if (!match) return res.redirect('/journeyjapan');

        // if match then create the session and redirect to home page
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };

        return res.redirect('/journeyjapan');

    } catch (error) {
        console.log(error);
        const context = { error };
        return res.render('journeyjapan/index', context);
    }
});


// NOTE: Logout
router.get('/logout', async (req, res) => {
    try {
        await req.session.destroy();
        return res.redirect('/journeyjapan');

    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});


module.exports = router;