// Globethoughts
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const mongoStore = require("connect-mongo");
const path = require("path");
const cohortModel = require("./models/Cohort");
const userModel = require("./models/User");
const app = express();

// Import route files



// Environment variables
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;

// Database connection with verification logging
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected!"))
  .catch((err) => console.error("Mongoose connection error:", err));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session configuration
app.use(session({
  store: mongoStore.create({
    mongoUrl: MONGO_URI,
    ttl: 30 * 60, // 30 minutes
    autoRemove: "interval",
    autoRemoveInterval: 10,
    collectionName: "sessions",
  }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { path: "/", httpOnly: true, secure: false, maxAge: 30 * 60 * 1000 },
  rolling: false,
}));

// Middleware to make user info available globally in templates
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Home page route defined last
app.get('/', function(req, res) {
  res.render('home', { title: 'Home' });
});

  // Start server after "I am" cohort initialization
  app.listen(PORT, () => {
    console.log("Server is listening on port:", PORT);
  });
});
