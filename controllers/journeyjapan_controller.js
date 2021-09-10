const express = require('express');
const router = express.Router();

const { City } = require('../models');

// NOTE: INDEX Route
router.get('/', async (req, res, next) => {
    try {
        const allCities = await City.find({});

        const context = {
            cities: allCities,
        };

        return res.render('journeyjapan/index', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

module.exports = router;