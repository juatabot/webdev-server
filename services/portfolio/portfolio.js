let portfolios = require("./portfolio.json")

const findAllPortfolios = () =>
    portfolios

const findPortfolioForUser = (uid) =>
    portfolios.filter(p => p.userId === uid)

const updatePortfolioForUser = (uid, newPortfolio) =>
    portfolios.map(p => newPortfolio.find(np => np.id === p.id) || p);

const createPortfolio = () => {
    const newPortfolio = { id: (new Date()).getTime() + "" }
    portfolios.push(newPortfolio)
    return newPortfolio
}

module.exports = {
    findAllPortfolios, findPortfolioForUser, updatePortfolioForUser, createPortfolio
}