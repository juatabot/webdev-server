const express = require("express")
const fetch = require("node-fetch");
const { updatePortfolioForUser, createPortfolio, deletePortfolio } = require("./services/portfolio/portfolio.js");
const { createStockForUser } = require("./services/stocks/stocks.js");
const { updateTradeForPortfolio, deleteTradeById } = require("./services/trades/trades.js");
const app = express()

require("./controllers/stocks.js")(app)
require("./controllers/portfolio.js")(app)
require("./controllers/trades.js")(app)

app.listen(3000)


