const express = require("express")
const fetch = require("node-fetch");
const app = express()
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:4200", // restrict calls to those this address
    methods: "GET, POST, PUT, DELETE" // only allow GET requests
  })
);

require("./controllers/stocks.js")(app)
require("./controllers/portfolio.js")(app)
require("./controllers/trades.js")(app)

app.listen(3000)
