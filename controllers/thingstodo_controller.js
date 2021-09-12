const express = require('express');
const router = express.Router();

const { City, ThingsToDo, Review, User } = require('../models');

// NOTE: Show Route 
router.get('/:id', async (req, res, next) => {
    try {
        const allCities = await City.find({});
        const foundThingsToDo = await ThingsToDo.findById(req.params.id);
        const allReview = await Review.find({ thingstodo: req.params.id }).populate('thingstodo user');

        const context = {
            cities: allCities,
            thingstodo: foundThingsToDo,
            reviews: allReview,
        };


        return res.render('thingstodo/show', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: UPDATE Route
router.put('/:id', async (req, res, next) => {
    try {
        const updatedThingsToDo = await ThingsToDo.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });

        return res.redirect('/thingstodo');

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

module.exports = router;