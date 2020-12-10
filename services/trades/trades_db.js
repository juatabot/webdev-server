const db = require('../../db.js')

const findTradesForUser = (uid) => {
    const query = `SELECT * FROM trade WHERE userId = ${uid}`;
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const createTradeForUser = (uid) => {
    const query = `INSERT INTO trade (userId) VALUES (${uid})`;
    return new Promise((resolve) => {
        db.run(query, [], (result, err) => {
            if (err) {
                throw err;
            }
            // Return ID of object inserted!!!
            resolve(result);
        });
    })
}

const updateTradeById = (tid, body) => {
    const query = `UPDATE portfolio SET portfolioId = $portfolioId, stockId = $stockId, tradeDate = $tradeDate, platformType = $platformType , transactionType = $transactionType WHERE trade.idtrade = ${tid}`;
    return new Promise((resolve) => {
        db.run(query, {
            $portfolioId: body.portfolioId,
            $stockId: body.stockId,
            $tradeDate: body.tradeDate,
            $platformType: body.platformType,
            $transactionType: body.transactionType
        }, (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const deleteTradeById = (tid) => {
    const query = `DELETE FROM trade WHERE trade.idtrade = ${tid}`;
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

module.exports = {
    findTradesForUser, createTradeForUser, updateTradeById, deleteTradeById
}