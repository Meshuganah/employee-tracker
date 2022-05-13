const db = require('../db/connection');

class DbQuery {
    constructor(db) {
        this.db = db;
    }

    viewDepartments() {
        const sql = 'SELECT * FROM department'

        return new Promise((resolve, reject) => {
            db.query(sql, function(err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
        //return db.query('SELECT * FROM department');
    };
};

module.exports = new DbQuery(db);