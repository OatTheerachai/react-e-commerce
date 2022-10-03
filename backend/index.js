const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./src/config/connect");
const { notFound, errorHandler } = require("./src/middleware/errorMiddleware");
const authRoute = require("./src/routes/authRoute");
const PORT = process.env.PORT || 5000;
const config = require("./src/config/auth");

// const productRoute = require("./src/routes/productRoute");

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

dotenv.config();

// body-parser config
app.use(bodyParser.urlencoded({ limit: "8mb", extended: false }));
app.use(bodyParser.json({ limit: "8mb" }));

app.use(cookieParser(config.secretCookie));

// connect database
connectDB();

app.get("/", (req, res) => {
  // console.log(new Date().getTime() + 1000 * 60);
  // console.log(req.signedCookies.cookie1);
  // res
  //   .cookie("cookie1", "This is my first cookie", {
  //     maxAge: 90000,
  //     httpOnly: true,
  //     signed: true,
  //   })
  //   .send("API is running...");
  res.send("API is running...");
});

app.use("/api/v1", authRoute);
// app.use("/api/v1", productRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Application is running on port 5000");
});
