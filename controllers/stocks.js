const service = require("../services/stocks/stocks.js")

module.exports = (app) => {


  const findStocksForUser = (req, res) =>
    res.send(service.findStocksForUser(req.params['uid']))

  const createStockForUser = (req, res) =>
    res.send(service.createStockForUser(req.params['uid'], req.body))

  const updateStockForUser = (req, res) =>
    res.send(service.updateStockForUser(req.params['uid'], req.body))

  const deleteStockForUser = (req, res) =>
    res.send(service.deleteStockForUser(req.parms['uid'], req.params['sid']))

  app.get("/api/users/:uid/stocks/", findStocksForUser)
  app.post("/api/users/:uid/stocks", createStockForUser)
  app.post("/api/users/:uid/stocks/", updateStockForUser)
  app.delete("/api/users/:uid/stocks/:sid", deleteStockForUser)

}