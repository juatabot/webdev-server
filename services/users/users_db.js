const db = require('../../db.js')

const findAllUsers = () => {
    const query = `SELECT * FROM user;`;
    return new Promise((resolve) => {
        db.all(query, [], (err, result) => {
            if (err) {
                throw err;
            }
            resolve(result)
        });
    })
}

const findUserById = (uid) => {
    const query = `SELECT * FROM user where user.iduser = "${uid}";`;
    console.log(query)
    return new Promise((resolve) => {
        db.all(query, [], (err, result) => {
            if (err) {
                throw err;
            }
            resolve(result)
        });
    })
}

const deleteUserById = (uid) => {
    const query = `DELETE FROM user WHERE user.iduser = ${uid}`;
    return new Promise((resolve) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

const updateUserById = (uid, body) => {
    const query = `UPDATE user SET role = $role WHERE user.iduser = ${uid}`;
    return new Promise((resolve) => {
        db.run(query, {
            $role: body.role,
        }, (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}

module.exports = { findAllUsers, findUserById, deleteUserById, updateUserById }