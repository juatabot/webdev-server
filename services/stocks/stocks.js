let stocks = require("./stocks.json")

const findStocksForUser = (uid) =>
  stocks.filter(s => s.userId === uid)

const createStockForUser = (uid, newStock) =>
  stocks.push(newStock);

module.exports = {
  findStocksForUser, createStockForUser
}