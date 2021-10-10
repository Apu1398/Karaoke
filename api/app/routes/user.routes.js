const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

    app.get(
        "/api/test/premium",
        [authJwt.verifyToken, authJwt.isPremium],
        controller.premiumBoard
    );


    app.post("/api/add_song", [authJwt.verifyToken, authJwt.isPremium], controller.create);

    app.get("/api/get_songs", [authJwt.verifyToken], controller.findAll);

    app.get("/api/get_song/:id", [authJwt.verifyToken], controller.findOne);

    app.put("/api/update_song/:id", [authJwt.verifyToken, authJwt.isPremium], controller.update);

    app.delete("/api/delete_song/:id", [authJwt.verifyToken, authJwt.isPremium], controller.delete);

};