const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:4200", // restrict calls to those this address
    methods: "GET, POST, PUT, DELETE" // only allow GET requests
  })
);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin',
    'http://localhost:4200');
  res.header('Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'secret'
}));

require("./controllers/stocks.js")(app)
require("./controllers/portfolio.js")(app)
require("./controllers/trades.js")(app)
require("./controllers/session.js")(app)
require("./controllers/login.js")(app)

app.listen(3000)
