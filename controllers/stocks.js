const service = require("../services/stocks.js")

module.exports = (app) => {


  const findStocksForUser = (req, res) =>
    res.send(service.findStocksForUser(req.params['uid']))

  app.get("/api/:uid/stocks/", findStocksForUser)

}