const express = require('express');
const router = express.Router();

const { Review, ThingsToDo } = require('../models');

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
router.post('/', async (req, res, next) => {
    try {
        const review = {
            ...req.body,
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
router.put('/:id', async (req, res, next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });

        // const allThingsToDo = await ThingsToDo.find({ thingstodo: updatedReview.thingstodo }).populate('thingstodo');

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
router.delete('/:id', async (req, res, next) => {
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