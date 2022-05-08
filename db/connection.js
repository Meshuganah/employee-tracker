const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Meshuganah251$',
        database:'employee-tracker'
    },
    console.log('Connected to the Employee Tracker!')
);

module.exports = db;