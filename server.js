// SECTION: External Modules 
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = 4000;
require('dotenv').config();

// SECTION: AUTH
const session = require("express-session");
const MongoStore = require("connect-mongo");

// SECTION: Internal Modules
const controllers = require('./controllers');


// SECTION: App Config
app.set('view engine', 'ejs');

app.use(
    session({
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),

        // secret key
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,

        // configure the expiration of the cookie 
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
        },
    }),
);

// SECTION: Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(require('./utils/navlinks'));

// NOTE Current User
app.use(function (req, res, next) {
    res.locals.user = req.session.currentUser;
    next();
});


// SECTION: Controller Files
app.use('/journeyjapan', controllers.journeyjapan);
app.use('/city', controllers.city);
app.use('/dosanddonts', controllers.donsanddonts);
app.use('/profile', controllers.profile);
app.use('/reviews', controllers.reviews);
app.use('/thingstodo', controllers.thingstodo);
app.use('/', controllers.auth);


// SECTION: Index Page
app.get('/', (req, res) => {
    res.redirect('/journeyjapan');
});

// NOTE: 404 Page
const { City } = require('./models');

app.get("/*", async (req, res, next) => {
    try {
        const allCities = await City.find({});
        
        const context = {
            cities: allCities,
            error: req.error,
        };
        
        res.render("journeyjapan/404", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});


app.listen(PORT, () => {
    console.log(`I live on port ${PORT}`);
});
