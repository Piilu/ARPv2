module.exports = app=>{
    const ping = require("../controllers/ping.controller");
    var router = require("express").Router();
    
    router.get("/",ping.ping);
    app.use("/api/ping",router);
}