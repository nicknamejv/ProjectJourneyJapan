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

// NOTE: Auth Middleware
const authRequired = async (req, res, next) => {
    try {
        if (req.session.currentUser) {
            return next();
        } else {
            throw "Please log in or sign up!"
        }

    } catch (error) {
        console.log(error);
        const context = { error };
        return res.render('journeyjapan/404', context);
    };
};


// NOTE Current User
app.use(function (req, res, next) {
    res.locals.user = req.session.currentUser;
    next();
});


// SECTION: Controller Files
app.use('/journeyjapan', controllers.journeyjapan);
app.use('/city', authRequired, controllers.city);
app.use('/dosanddonts', authRequired, controllers.donsanddonts);
app.use('/profile', authRequired, controllers.profile);
app.use('/reviews', authRequired, controllers.reviews);
app.use('/thingstodo', authRequired, controllers.thingstodo);
app.use('/', controllers.auth);


// SECTION: Index Page
app.get('/', (req, res) => {
    res.redirect('/journeyjapan');
});

// NOTE: About Page
app.get('/journeyjapan/about', (req, res, next) => {
    const context = {
        error: null,
    };

    return res.render('journeyjapan/about', context);
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


app.listen(process.env.PORT || PORT, () => {
    console.log(`I live on port ${PORT}`);
});
