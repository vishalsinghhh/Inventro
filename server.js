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

// routers
const authRouter = require("./routes/authRoutes");

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

// app.use("/api/v1/auth", authRouter);



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
