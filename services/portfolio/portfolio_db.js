const db = require('../../db.js')

const findAllPortfolios = () =>
    db.run('SELECT * FROM portfolio')

const findPortfoliosForUser = (uid) =>
    db.run(`SELECT * 
            FROM portfolio
            WHERE portfolio.userId = uid`)

const createPortfolioForUser = (uid) => {
    db.run("INSERT INTO portfolio (userId) VALUES (uid)");
    console.log("asldkflaskdfj")
}


module.exports = {
    findAllPortfolios, findPortfoliosForUser, createPortfolioForUser
}