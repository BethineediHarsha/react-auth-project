require('dotenv').config();
let mysql = require('mysql');

let conn = mysql.createConnection({
host: process.env.DB_HOST,
port: process.env.DB_PORT,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
});

conn.connect((err) => {
    if (err) return console.error(err.message);

    console.log('Connected to the MySQL server.');
});

module.exports = conn;