const express = require("express")
const app = express()

require("./controllers/stocks.js")(app)

app.listen(3000)