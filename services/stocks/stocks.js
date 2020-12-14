let stocks = require("./stocks.json")
let db_connector = require("./stocks_db.js")

const findStocksForUser = (uid) => {
  return new Promise((resolve) => {
    db_connector.findStocksForUser(uid)
      .then(resp => resolve(resp))
  })
}

const createStockForUser = (uid) => {
  return new Promise((resolve) => {
    db_connector.createStockForUser(uid)
      .then(resp => resolve(resp))
  })
}

const updateStockById = (sid, body) => {
  return new Promise((resolve) => {
    db_connector.updateStockById(sid, body)
      .then(resp => resolve(resp))
  })
}

const deleteStockById = (sid) => {
  return new Promise((resolve) => {
    db_connector.deleteStockById(sid)
      .then(resp => resolve(resp))
  })
}

const findUsersByStock = (ss) => {
  return new Promise((resolve) => {
    db_connector.findUsersByStock(ss)
      .then(resp => resolve(resp))
  })
}

module.exports = {
  findStocksForUser, createStockForUser, updateStockById, deleteStockById, findUsersByStock
}