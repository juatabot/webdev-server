const express = require("express")
const app = express()

require("./controllers/stocks.js")(app)
require("./controllers/portfolio.js")(app)

app.listen(3000)