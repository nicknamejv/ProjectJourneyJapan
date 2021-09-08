const express = require('express');
const router = express.Router();

// NOTE: Show Route 
router.get('/:id', async (req, res, next) => {
    try {
        return res.render('reviews/index');

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Edit Route (Presentational)
router.get('/:id/edit', async (req, res, next) => {
    try {
        return res.render('reviews/edit');

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Edit Route (Functional)
router.put('/:id', async (req, res, next) => {
    try {
        return res.render('reviews/edit');

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Delete Route
// router.delete('/:id', async (req, res, next) => {
//     try {

//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     };
// });


module.exports = router;