module.exports = app => {
    const objektids = require("../controllers/objektid.controller")
    var router = require("express").Router();
    router.post("/", objektids.create);
    router.get("/", objektids.findAll);
    router.get("/:id", objektids.findOne);
    router.put("/:id", objektids.update);
    router.delete("/:id", objektids.delete);
    app.use('/api/objektids', router);
}