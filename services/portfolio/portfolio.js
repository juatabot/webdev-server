let portfolios = require("./portfolio.json")
let db_connector = require("./portfolio_db")

const findAllPortfolios = () => {
    return new Promise((resolve) => {
        db_connector.findAllPortfolios()
            .then(resp => resolve(resp))
    })
}


const findPortfoliosForUser = (uid) => {
    return new Promise((resolve) => {
        db_connector.findPortfoliosForUser(uid)
            .then(resp => resolve(resp))
    })
}

const updatePortfolio = (pid, body) => {
    return new Promise((resolve) => {
        db_connector.updatePortfolio(pid, body)
            .then(resp => resolve(resp))
    })
}

const createPortfolio = (uid) => {
    return new Promise((resolve) => {
        db_connector.createPortfolioForUser(uid)
            .then(resp => resolve(resp))
    })
}

const deletePortfolio = (pid) => {
    return new Promise((resolve) => {
        db_connector.deletePortfolio(pid)
            .then(resp => resolve(resp))
    })
}



module.exports = {
    findAllPortfolios, findPortfoliosForUser, updatePortfolio, createPortfolio, deletePortfolio
}