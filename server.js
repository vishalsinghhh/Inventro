require("dotenv").config();
require("express-async-errors");
const passport = require("passport");
// express
const corsMiddleware = require("./cors");


const express = require("express");
const app = express();

app.use(corsMiddleware);

const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
// rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");

const mongoSanitize = require("express-mongo-sanitize");

// database
const connectDB = require("./db/connect.js");

// routers USER
const authUserRouter = require("./routes/User/authRoutes");
const storesUserRouter = require('./routes/User/storesRoutes')
const adityaRouter = require('./routes/User/adityaRoute')

// routers MASTER
const authRouterMaster = require("./routes/Master/authRoutes");
const stockRouterMaster = require("./routes/Master/stockRoutes");
const manageAdminRouteMaster = require('./routes/Master/manageAdminRoutes')

// middleware
const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 6000,
  })
);
app.use(helmet());

app.use(xss());
app.use(mongoSanitize());
app.use(morgan("tiny"));
app.use(express.static("./public"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(fileUpload({ useTempFiles: true }));

app.get("/", (req, res) => {
  res.send('Inventro');
});


app.get("/api/v1", (req, res) => {
  // console.log(req.signedCookies);
  res.send("Inventro");
});
// USER
app.use("/api/v1/user/auth", authUserRouter);
app.use("/api/v1/user/stores", storesUserRouter);
app.use("/api/v1/user/aditya", adityaRouter);
// MASTER
app.use("/api/v1/master/auth", authRouterMaster);
app.use("/api/v1/master/stock", stockRouterMaster);
app.use("/api/v1/master/manageAdmin", manageAdminRouteMaster);


app.use(notFoundMiddleware); 
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
