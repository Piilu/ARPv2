const { secret } = require("../config/auth.config");
const jwt = require("jsonwebtoken");

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
      const decoded = jwt.verify(req.session.token, secret);  
    res.status(200).send({username:decoded.username,email:decoded.email});
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };