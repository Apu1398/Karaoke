const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,  //Two middlewares before signup a user
            verifySignUp.checkRolesExisted
        ],
        controller.signup // Signup a user if everything is god
    );

    app.post("/api/auth/signin", controller.signin);
};