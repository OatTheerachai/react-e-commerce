const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/product/Best_Seller", async (req, res) => {
  const user = await User.find({});
  res.json(user);
});

module.exports = router;
