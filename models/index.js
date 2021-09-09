require('../config/db.connection');

module.exports = {
    City: require('./City'),
    Review: require('./Review'),
    ThingsToDo: require('./ThingsToDo'),
    User: require('./User'),
};