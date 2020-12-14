
const service = require("../services/trades/trades.js")

module.exports = (app) => {
    const findTradesForUser = (req, res) =>
        service.findTradesForUser(req.params['uid']).then(resp => { res.send(resp) });

    const createTradeForUser = (req, res) =>
        service.createTradeForUser(req.params['uid']).then(resp => { res.send(resp) });

    const updateTradeById = (req, res) =>
        service.updateTradeById(req.params['tid'], req.body).then(resp => { res.send(resp) });

    const deleteTradeById = (req, res) =>
        service.deleteTradeById(req.params['tid']).then(resp => { res.send(resp) });

    app.get("/api/users/:uid/trades", findTradesForUser)
    app.post("/api/users/:uid/trades", createTradeForUser)
    app.put("/api/trades/:tid", updateTradeById)
    app.delete("/api/trades/:tid", deleteTradeById)
}
