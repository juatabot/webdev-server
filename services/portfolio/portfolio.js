let portfolios = require("./portfolio.json")
let db_connector = require("./portfolio_db")

const findAllPortfolios = () => {
    return db_connector.findAllPortfolios();
}

const findPortfoliosForUser = (uid) => {
    return db_connector.findPortfoliosForUser();
}

const updatePortfolioForUser = (uid, newPortfolio) => {
    portfolios = portfolios.map((p) => {
        if (p.id == newPortfolio.id) {
            return newPortfolio
        }
        return p;
    });
}

const createPortfolio = (uid) => {
    db_connector.createPortfolioForUser(uid);
}

const deletePortfolio = (uid, pid) => {
    portfolios = portfolios.filter(p => p.userId !== uid && p.pid !== pid)
}



module.exports = {
    findAllPortfolios, findPortfoliosForUser, updatePortfolioForUser, createPortfolio, deletePortfolio
}