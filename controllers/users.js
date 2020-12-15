const service = require('../services/users/users_db.js')

const findAllUsers = (req, res) => {
    service.findAllUsers()
        .then(resp => res.send(resp));
}

const findUserById = (req, res) => {
    service.findUserById(req.params['uid'])
        .then(resp => res.send(resp));
}

const deleteUserById = (req, res) => {
    service.deleteUserById(req.params['uid'])
        .then(resp => res.send(resp));
}

const updateUserById = (req, res) => {
    service.updateUserById(req.params['uid'], req.body)
        .then(resp => res.send(resp));
}



module.exports = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.delete('/api/users/:uid', deleteUserById);
    app.put('/api/users/:uid', updateUserById)
}