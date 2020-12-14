const service = require("../services/stocks/stocks.js")

module.exports = (app) => {

  const findStocksForUser = (req, res) =>
    service.findStocksForUser(req.params['uid']).then(resp => { res.send(resp) });

  const createStockForUser = (req, res) =>
    service.createStockForUser(req.params['uid']).then(resp => { res.send(resp) });

  const updateStockById = (req, res) =>
    service.updateStockForUser(req.params['sid'], req.body).then(resp => { res.send(resp) });

  const deleteStockById = (req, res) =>
    service.deleteStockById(req.params['sid']).then(resp => { res.send(resp) });

  const findUsersByStock = (req, res) =>
    service.findUsersByStock(req.params['ss']).then(resp => { res.send(resp) });

  app.get("/api/users/:uid/stocks/", findStocksForUser)
  app.post("/api/users/:uid/stocks", createStockForUser)
  app.put("/api/stocks/:sid", updateStockById)
  app.delete("/api/stocks/:sid", deleteStockById)
  app.get("/api/stocks/:ss", findUsersByStock)

}