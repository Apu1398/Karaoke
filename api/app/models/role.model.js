const mongoose = require("mongoose");

//This model represent Role collection in MondoDB DataBase
const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Role;