const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
var router = require("express").Router();
module.exports = function(router) {

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  router.get("/api/test/all", controller.allAccess);
  router.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );
  router.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  router.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};