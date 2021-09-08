const express = require('express');
const router = express.Router();

// NOTE: Show Route 
router.get('/:id', async (req, res, next) => {
    try {
        return res.render('thingstodo/index');

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

module.exports = router;