const db = require('../db/connection');

class DbQuery {
    constructor(db) {
        this.db = db;
    }

    viewDepartments() {
        return this.db.promise().query(
            'SELECT * FROM department'
        );
    };
};

module.exports = new DbQuery(db);