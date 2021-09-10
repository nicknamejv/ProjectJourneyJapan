const routes = [
    { href: '/city', title: 'City' },
    { href: '/dosanddonts', title: "Do's & Don'ts" },
    { href: '/profile', title: 'Profile' },
];

const authRoutes = [
    { href: "/login", title: "Login" },
    { href: "/signup", title: "Sign Up" },
];


module.exports = function navLinks(req, res, next) {
    if (req.session.currentUser) {
        res.locals.routes = routes;
    } else {
        res.locals.routes = authRoutes;
    };

    next();
};