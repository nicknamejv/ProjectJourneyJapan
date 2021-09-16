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
            error: null,
        };


        return res.render('thingstodo/show', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Create Route
router.post('/', async (req, res, next) => {
    try {
        const todo = {
            ...req.body,
        };

        const createdTodo = await ThingsToDo.create(todo);

        return res.redirect(`/${req.query.redirect}`);

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

        return res.redirect(`/city/${updatedThingsToDo.city}`);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Delete Route
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedThingsToDo = await ThingsToDo.findByIdAndDelete(req.params.id);
        const deletedReviews = await Review.deleteMany({ thingstodo: req.params.id });

        return res.redirect(`/city/${deletedThingsToDo.city}`);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

module.exports = router;