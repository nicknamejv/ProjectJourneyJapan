// SECTION: External Modules 
const { response } = require('express');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = 4000;


// SECTION: Internal Modules
const controllers = require('./controllers');


// SECTION: App Config
app.set('view engine', 'ejs');


// SECTION: Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// SECTION: Controller Files
app.use('/journeyjapan', controllers.journeyjapan);
app.use('/city', controllers.city);
app.use('/dosanddonts', controllers.donsanddonts);
app.use('/profile', controllers.profile);
app.use('/reviews', controllers.reviews);
app.use('/thingstodo', controllers.thingstodo);


// SECTION: Index Page
app.get('/', (req, res) => {
    res.redirect('/journeyjapan');
});

// NOTE: 404 Page
app.get("/*", (req, res) => {
    const context = {
    error: req.error,
};

res.render("journeyjapan/404", context);
});

app.listen(PORT, () => {
    console.log(`I live on port ${PORT}`);
});
