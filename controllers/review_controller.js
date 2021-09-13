const express = require('express');
const router = express.Router();

const { authRequired } = require('../utils/auth');
const { Review, User } = require('../models');

// NOTE: Show Route 
// router.get('/:id', async (req, res, next) => {
//     try {
//         return res.render('reviews/index');

//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     };
// });

// NOTE: Create Route
router.post('/', authRequired, async (req, res, next) => {
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

// NOTE: Edit Route (Presentational)
// router.get('/:id/edit', async (req, res, next) => {
//     try {
//         const foundReview = await Review.findById(req.params.id);

//         const context = {
//             review: foundReview,
//         };

//         return res.render('reviews/edit', context);

//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     };
// });

// NOTE: Edit Route (Functional)
router.put('/:id', authRequired, async (req, res, next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });

        const context = {
            review: updatedReview,
            // thingstodo: allThingsToDo,
        };

        return res.redirect(`/thingstodo/${updatedReview.thingstodo}`)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Delete Route
router.delete('/:id', authRequired, async (req, res, next) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);

        return res.redirect(`/thingstodo/${deletedReview.thingstodo}`);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});


module.exports = router;