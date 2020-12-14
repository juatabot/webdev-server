let db_connector = require("./trades_db.js")

const findTradesForUser = (uid) => {
    return new Promise((resolve) => {
        db_connector.findTradesForUser(uid)
            .then(resp => resolve(resp))
    })
}

const createTradeForUser = (uid) => {
    return new Promise((resolve) => {
        db_connector.createTradeForUser(uid)
            .then(resp => resolve(resp))
    })
}

const updateTradeById = (tid, body) => {
    return new Promise((resolve) => {
        db_connector.updateTradeById(tid, body)
            .then(resp => resolve(resp))
    })
}

const deleteTradeById = (tid) => {
    return new Promise((resolve) => {
        db_connector.deleteTradeById(tid)
            .then(resp => resolve(resp))
    })
}

module.exports = {
    findTradesForUser, createTradeForUser, updateTradeById, deleteTradeById
}