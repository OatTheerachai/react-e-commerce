const User = require("../models/userModel");

const checkDuplicateUsername = (req, res, next) => {
  // username
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
    }

    next();
  });
};

module.exports = { checkDuplicateUsername };
