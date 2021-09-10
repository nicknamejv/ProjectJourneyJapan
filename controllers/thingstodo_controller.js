const express = require('express');
const router = express.Router();

const { City, ThingsToDo } = require('../models');

// NOTE: Show Route 
router.get('/:id', async (req, res, next) => {
    try {
        const allCities = await City.find({});
        const foundTodo = await ThingsToDo.findById(req.params.id);

        const context = {
            cities: allCities,
            todos: foundTodo,
        };


        return res.render('thingstodo/show', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

module.exports = router;