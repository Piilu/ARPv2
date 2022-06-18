module.exports = app => {
    const paeviks = require("../controllers/paevik.controller")
    var router = require("express").Router();
    router.post("/", paeviks.create);
    router.get("/", paeviks.findAll);
    router.get("/:ObjectID", paeviks.findAllByObjectID);
    router.get("/one/:id", paeviks.findOne);
    router.put("/one/:id", paeviks.update);
    router.delete("/one/:id", paeviks.delete);
    app.use('/api/paeviks', router);
}