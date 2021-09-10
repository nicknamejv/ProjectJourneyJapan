const express = require('express');
const router = express.Router();

const { City, ThingsToDo } = require('../models');

// NOTE: Show Route
router.get('/:id', async (req, res, next) => {
    try {
        const allCities = await City.find({});
        const foundCity = await City.findById(req.params.id);
        const foundThingsToDoFood = await ThingsToDo.find({ city: req.params.id, category: 'Food' }).populate('city');
        const foundThingsToDoAttractions = await ThingsToDo.find({ city: req.params.id, category: 'Attraction' }).populate('city');


        const context = {
            city: foundCity,
            cities: allCities,
            thingstodofood: foundThingsToDoFood,
            thingstodoattraction: foundThingsToDoAttractions,
        };

        return res.render('city/show', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

module.exports = router;