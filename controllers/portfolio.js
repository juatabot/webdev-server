const service = require("../services/portfolio/portfolio.js")

module.exports = (app) => {


  const findAllPortfolios = (req, res) =>
    res.send(service.findAllPortfolios())

  const findPortfoliosForUser = (req, res) =>
    res.send(service.findPortfoliosForUser(req.params['uid']))

  const updatePortfolioForUser = (req, res) =>
    res.send(service.updatePortfolioForUser(req.params['uid'], req.body))

  const createPortfolio = (req, res) =>
    res.send(service.createPortfolio(req.params['uid']))

  const deletePortfolio = (req, res) =>
    res.send(service.deletePortfolio(req.params['uid'], req.params['pid']))

  app.get("/api/portfolios/", findAllPortfolios)
  app.get("/api/users/:uid/portfolio/", findPortfoliosForUser)
  app.post("/api/users/:uid/portfolio/", updatePortfolioForUser)
  app.post("/api/users/:uid/portfolio", createPortfolio)
  app.delete("/api/users/:uid/portfolio/:pid", deletePortfolio)

}