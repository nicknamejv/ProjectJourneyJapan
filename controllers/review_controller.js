const express = require('express');
const router = express.Router();

const { Review, User } = require('../models');

// NOTE: Create Route
router.post('/', async (req, res, next) => {
    try {
        const review = {
            ...req.body,
            user: req.session.currentUser.id,
        };

        const createdReview = await Review.create(review);

        return res.redirect(`/${req.query.redirect}`);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});


// NOTE: Edit Route (Functional)
router.put('/:id', async (req, res, next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });

        const context = {
            review: updatedReview,
        };

        return res.redirect(`/thingstodo/${updatedReview.thingstodo}`)

    } catch (error) {
        req.error = error;
        return next();
    };
});

// NOTE: Delete Route
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);

        return res.redirect(`/thingstodo/${deletedReview.thingstodo}`);

    } catch (error) {
        req.error = error;
        return next();
    };
});


module.exports = router;