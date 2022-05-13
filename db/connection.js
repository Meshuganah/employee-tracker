const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Meshuganah251$',
        database:'employee_tracker'
    },
    console.log('Connected to the Employee Tracker!')
);

db.connect(function (err){
    if (err) throw err;
});

module.exports = db;