const express = require('express');
const router = express.Router();

const { User, City, Review } = require('../models');

// NOTE: Show Route
router.get('/:id', async (req, res, next) => {
    try {
        const foundUser = await User.findById(req.params.id);
        const allCities = await City.find({});
        const allUserReviews = await Review.find({ user: req.params.id }).populate('user thingstodo');

        const context = {
            user: foundUser,
            cities: allCities,
            review: allUserReviews,
        };

        return res.render('profile/show', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Update Route (Functional)
router.put('/:id', async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });

        const context = {
            user: updatedUser,
        };

        return res.redirect(`/profile/${updatedUser.id}`)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;