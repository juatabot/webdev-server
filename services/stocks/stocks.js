let stocks = require("./stocks.json")

const findStocksForUser = (uid) =>
  stocks.filter(s => s.userId === uid)

const createStockForUser = (uid, newStock) =>
  stocks.push(newStock);

const updateStockForUser = (uid, updatedStock) =>
  stocks = stocks.map((s) => {
    if (s.id == updatedStock.id) {
      return updatedStock
    }
    return s;
  });

const deleteStockForUser = (uid, sid) =>
  stocks = stocks.filter(s => s.userId !== uid && s.id !== sid)


module.exports = {
  findStocksForUser, createStockForUser, updateStockForUser, deleteStockForUser
}