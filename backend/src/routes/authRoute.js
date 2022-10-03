const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");
const { checkDuplicateUsername } = require("../middleware/signupMiddleware");

router.post("/auth/signin", controller.signin);

router.post("/auth/signup", checkDuplicateUsername, controller.signup);

router.post("/auth/refreshToken", controller.refreshToken);

// router.post("/auth/refreshToken", controller.csrf);

module.exports = router;
