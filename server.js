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

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'secret'
}));

require("./controllers/stocks.js")(app)
require("./controllers/portfolio.js")(app)
require("./controllers/trades.js")(app)
require("./controllers/session.js")(app)

app.listen(3000)
