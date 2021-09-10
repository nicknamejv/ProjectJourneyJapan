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
        };

        return res.render('auth/signup', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: GET Login 
router.get('/login', async (req, res, next) => {
    try {
        const allCities = await City.find({});

        const context = {
            cities: allCities,
        };

        return res.render('auth/login', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});





module.exports = router;