let stocks = require("./stocks.json")

const findStocksForUser = (uid) =>
  stocks.filter(s => s.userId === uid)

module.exports = {
  findStocksForUser
}