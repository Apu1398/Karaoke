const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Create db object
const db = {};

db.mongoose = mongoose; // Assigning the mongoose module

db.user = require("./user.model"); // Assigning the User model
db.role = require("./role.model"); // Assigning the Role model
db.song = require("./song.model"); // Assigning the Song model

db.ROLES = ["user", "premium"]; // Assigning valid ROLES.

module.exports = db;