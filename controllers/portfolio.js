const service = require("../services/portfolio/portfolio.js");
module.exports = (app) => {

  const findAllPortfolios = (req, res) =>
    service.findAllPortfolios().then(resp => { res.send(resp) });

  const findPortfoliosForUser = (req, res) =>
    service.findPortfoliosForUser(req.params['uid']).then(resp => { res.send(resp) });

  const updatePortfolio = (req, res) => {
    service.updatePortfolio(req.params['pid'], req.body).then(resp => { res.send(resp) });
    }

  const createPortfolio = (req, res) =>
    service.createPortfolio(req.params['uid']).then(resp => { res.send(resp) });

  const deletePortfolio = (req, res) =>
    service.deletePortfolio(req.params['pid']).then(resp => { res.send(resp) });

  app.get("/api/portfolios/", findAllPortfolios)
  app.get("/api/users/:uid/portfolios", findPortfoliosForUser)
  app.put("/api/portfolios/:pid", updatePortfolio)
  app.post("/api/users/:uid/portfolios", createPortfolio)
  app.delete("/api/portfolios/:pid", deletePortfolio)

}
