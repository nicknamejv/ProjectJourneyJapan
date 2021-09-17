const express = require('express');
const router = express.Router();

const { City } = require('../models');

// NOTE: INDEX Route
router.get('/', async (req, res, next) => {
    try {
        const allCities = await City.find({});

        const context = {
            cities: allCities,
            error: null,
        };

        return res.render('journeyjapan/index', context);

    } catch (error) {
        const context = { error };
        return res.render('journeyjapan/index', context);
    };
});

module.exports = router;