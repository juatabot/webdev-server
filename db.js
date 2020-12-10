var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('db.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

const fs = require('fs')
fs.readFile('./create_tables.sql', 'utf8', (err, data) => {
    if (err) {
        console.log("Tables already created! Or there's an error :(")
        return
    }
    const create_tables = data.split("\n\n");
    create_tables.forEach(table => {
        console.log(`${table.split('(')[0]}`)
        db.run(table);
    })
})

module.exports = db;