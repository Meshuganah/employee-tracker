const db = require('../db/connection');

class DbQuery {

    viewDepartments() {
        // const sql = 'SELECT * FROM department'

        // db.query (sql, (err, row) => {
        //     return row
        // })
        return db.query('SELECT * FROM department');
    };
};

module.exports = DbQuery;