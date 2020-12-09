const express = require("express")
const fetch = require("node-fetch");
const { createPortfolioForUser } = require("./services/portfolio/portfolio_db.js");
const app = express()

require("./controllers/stocks.js")(app)
require("./controllers/portfolio.js")(app)
require("./controllers/trades.js")(app)

app.listen(3000)
