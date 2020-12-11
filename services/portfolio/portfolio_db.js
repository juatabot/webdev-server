const db = require('../../db.js')

const findAllPortfolios = () => {
    const query = 'SELECT * FROM portfolio';
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const findPortfoliosForUser = (uid) => {
    const query = `SELECT * FROM portfolio WHERE portfolio.userId = ${uid}`;
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const createPortfolioForUser = (uid) => {
    const query = `INSERT INTO portfolio (userId) VALUES (${uid})`;
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

const deletePortfolio = (pid) => {
    const query = `DELETE FROM portfolio WHERE portfolio.idportfolio = ${pid}`;
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const updatePortfolio = (pid, body) => {
    const query = `UPDATE portfolio SET portfolioName = $name, portfolioDescription = $description WHERE portfolio.idportfolio = ${pid}`;
    return new Promise((resolve) => {
        db.run(query, {
            $name: body.portfolioName,
            $description: body.portfolioDescription,
        }, (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}


module.exports = {
    findAllPortfolios, findPortfoliosForUser, createPortfolioForUser, deletePortfolio, updatePortfolio
}
