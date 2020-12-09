
const service = require("../services/trades/trades.js")

module.exports = (app) => {
    const findTradesForPortfolio = (req, res) =>
        res.send(service.findTradesForPortfolio(req.params['uid'], req.params['pid']))

    const updateTradeForPortfolio = (req, res) =>
        res.send(service.updateTradeForPortfolio(req.params['uid'], req.params['pid'], req.params['tid'], req.body))

    const deleteTradeById = (req, res) =>
        res.send(service.deleteTradeByIdreq.params['uid'], req.params['pid'], req.params['tid'])

    app.get("/api/users/:uid/portfolio/:pid/trades", findTradesForPortfolio)
    app.post("/api/users/:uid/portfolio/:pid/trades/:tid", updateTradeForPortfolio)
    app.delete("/api/users/:uid/portfolio/:pid/trades/:tid", deleteTradeById)
}
