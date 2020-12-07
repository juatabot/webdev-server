let portfolios = require("./portfolio.json")

const findAllPortfolios = () => {
    return portfolios
}

const findPortfoliosForUser = (uid) => {
    return portfolios.filter(p => p.userId === uid)
}

const updatePortfolioForUser = (uid, newPortfolio) =>
    portfolios.map(p => newPortfolio.find(np => np.id === p.id) || p);

const createPortfolio = (uid) => {
    const newPortfolio = { id: (new Date()).getTime() + "", userId: uid }
    portfolios.push(newPortfolio)
    return newPortfolio
}

const deletePortfolio = (uid, pid) => {
    portfolios = portfolios.filter(p => p.userId !== uid && p.pid !== pid)
}



module.exports = {
    findAllPortfolios, findPortfoliosForUser, updatePortfolioForUser, createPortfolio, deletePortfolio
}