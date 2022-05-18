module.exports = app => {
    const paeviks = require("../controllers/paevik.controller")
    var router = require("express").Router();
    router.post("/", paeviks.create);
    router.get("/", paeviks.findAll);
    router.get("/:id", paeviks.findOne);
    router.put("/:id", paeviks.update);
    router.delete("/:id", paeviks.delete);
    app.use('/api/paeviks', router);
}