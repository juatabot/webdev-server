let trades = require("./trades.json")

const findTradesForPortfolio = (uid, pid) => {
    return trades.filter(t => t.portfolioId === pid)
}

const updateTradeForPortfolio = (uid, pid, tid, newTrade) => {
    trades = trades.map((t) => {
        if (t.id == newTrade.id) {
            return newTrade
        }
        return t;
    });
}

const deleteTradeById = (uid, pid, tid) => {
    trades = trades.filter(t => t.id !== tid)
}

module.exports = {
    findTradesForPortfolio, updateTradeForPortfolio, deleteTradeById
}