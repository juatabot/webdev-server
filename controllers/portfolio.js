const service = require("../services/portfolio/portfolio.js")

module.exports = (app) => {


  const findAllPortfolios = (req, res) =>
    res.send(service.findAllPortfolios())

  const findPortfolioForUser = (req, res) =>
    res.send(service.findPortfolioForUser(req.params['uid']))

  const updatePortfolioForUser = (req, res) =>
    res.send(service.updatePortfolioForUser(req.params['uid'], req.body))

  const createPortfolio = (req, res) =>
    res.send(service.createPortfolio())

  app.get("/api/portfolios/", findAllPortfolios)
  app.get("/api/portfolio/:uid", findPortfolioForUser)
  app.post("/api/portfolio/:uid", updatePortfolioForUser)
  app.post("/api/portfolio", createPortfolio)

}