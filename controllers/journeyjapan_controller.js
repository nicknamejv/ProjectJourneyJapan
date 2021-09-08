const express = require('express');
const router = express.Router();

// NOTE: INDEX Route
router.get('/', async (req, res, next) => {
    try {
        return res.render('journeyjapan/index');

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

module.exports = router;