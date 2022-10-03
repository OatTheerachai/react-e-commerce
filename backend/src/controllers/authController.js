const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const RefreshToken = require("../models/refreshTokenModel");
const config = require("../config/auth.js");
const libs = require("../libs/calculateTime");

const cookie__config = {
  expires: libs.calculateTime(),
  // sameSite: "strict",
  httpOnly: true,
  signed: true,
};

exports.signup = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  await user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    }
    res.send({ message: "User was registered successfully!" });
  });
};

exports.signin = async (req, res) => {
  User.findOne({
    username: req.body.username,
  }).exec(async (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.expired, // 24 hours
    });

    let refreshToken = await RefreshToken.createToken(user);

    res.cookie("jwtToken", token, cookie__config);
    res.cookie("refreshToken", refreshToken, cookie__config);

    res.status(200).send({
      username: user.username,
      // email: user.email,
      // accessToken: token,
      // refreshToken: refreshToken,
    });
  });
};

exports.refreshToken = async (req, res) => {
  const requestToken = req.body.refreshToken;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
    }

    //  check expiration refresh token
    if (RefreshToken.verifyExpiration(refreshToken)) {
      //  delete refreshToken from database
      await RefreshToken.findByIdAndRemove(refreshToken._id, {
        useFindAndModify: false,
      }).exec();

      res.status(403).json({
        message: "Refresh token was expired.",
      });
    }

    let newAccessToken = jwt.sign(
      { id: refreshToken.user._id },
      config.secret,
      {
        expiresIn: config.expired,
      }
    );

    return res
      .status(200)
      .cookie("jwtToken", newAccessToken, {
        maxAge: config.maxAgeCookie,
        httpOnly: true,
        signed: true,
      })
      .json({
        accessToken: newAccessToken,
        refreshToken: refreshToken.token,
      });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
