const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js"); // Return the object with the key
const db = require("../models");
const User = db.user; //Handle the User Model created in user.model.js
const Role = db.role; //Handle the Role Model created in role.model.js

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => { //Decode the provided token
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};

isPremium = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => { //Use the User model to call MongoDB passing the id that was decoded
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find(
            {
                _id: { $in: user.roles } //The user object has the roles of that user
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "premium") { // Verify is that user has the admin role
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require Premium Role!" });
                return;
            }
        );
    });
};


const authJwt = {
    verifyToken,
    isPremium
};
module.exports = authJwt;