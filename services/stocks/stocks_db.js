const db = require('../../db.js')

const findStocksForUser = (uid) => {
    const query = `SELECT * FROM stock WHERE stock.userId = ${uid}`;
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const createStockForUser = (sid) => {
    const query = `INSERT INTO stock (userId) VALUES ("${sid}")`;
    console.log(query)
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

const updateStockById = (sid, body) => {
    const query = `UPDATE portfolio SET stockSymbol = $stockSymbol, currentPrice = $currentPrice, idStock = $sharesAmt WHERE stock.id = ${sid}`;
    return new Promise((resolve) => {
        db.run(query, {
            $stockSymbol: body.stockSymbol,
            $currentPrice: body.currentPrice,
            $sharesAmt: body.sharesAmt
        }, (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const deleteStockById = (sid) => {
    const query = `DELETE FROM stock WHERE stock.idstock = ${sid}`;
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const findUsersByStock = (ss) => {
    const query = `SELECT stock.userId FROM stock WHERE stock.stockSymbol = "${ss}"`;
    console.log(query)
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
    findStocksForUser, createStockForUser, updateStockById, deleteStockById, findUsersByStock
}