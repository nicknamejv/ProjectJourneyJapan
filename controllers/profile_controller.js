const express = require('express');
const router = express.Router();

// NOTE: Show Route
router.get('/:id', async (req, res, next) => {
    try {
        return res.render('profile/index');

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Update Route (Presentational)
router.get('/:id/edit', async (req, res, next) => {
    try {
        return res.render('profile/edit');

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Update Route (Functional)
// router.put('/:id', async (req, res, next) => {
//     try {

//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

module.exports = router;