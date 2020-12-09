const service = require("../services/stocks/stocks.js")

module.exports = (app) => {


  const findStocksForUser = (req, res) =>
    res.send(service.findStocksForUser(req.params['uid']))

  const createStockForUser = (req, res) =>
    res.send(service.createStockForUser(req.params['uid'], req.body))

  app.get("/api/users/:uid/stocks/", findStocksForUser)
  app.get("/api/users/:uid/stocks", createStockForUser)

}