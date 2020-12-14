const db = require('../../db.js')

const register = (body) => {
    const query = `INSERT INTO user (username, pwd) VALUES ("${body.username}", "${body.pwd}")`;
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

const findUserByCredentials = (body) => {
    const query = `SELECT * FROM user WHERE user.username = "${body.username}" AND user.pwd = "${body.pwd}"`;
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

module.exports = { register, findUserByCredentials }