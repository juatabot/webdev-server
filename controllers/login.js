const service = require("../services/login/login_db.js")
module.exports = (app) => {

    const register = (req, res) => {
        service.register(req.body)
            .then(actualUser => {req.session['currentUser'] = actualUser
                                 res.json(actualUser)
                                })
    }


    const login = (req, res) => {
        service.findUserByCredentials(req.body)
            .then(actualUser => {req.session['currentUser'] = actualUser
                                             res.json(actualUser)
                                            })
    }

    const currentUser = (req, res) => {
        console.log(req.session["currentUser"])
        res.json(req.session["currentUser"])

    }

    const logout = (req, res) => {
        req.session.destroy()
        res.send(200)
    }

    app.post('/api/login', login)
    app.post('/api/register', register)
    app.post('/api/currentUser',
        currentUser)
    app.post('/api/logout', logout)
}