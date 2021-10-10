const mongoose = require("mongoose");


//This model represent User collection in MondoDB DataBase
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles: [ //array that contains ids in Role collection as reference.
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);

module.exports = User;