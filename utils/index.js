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

    viewRoles() {
        return this.db.promise().query(
            `SELECT role.*, department.name
            AS department_name
            FROM role
            LEFT JOIN department
            ON role.department_id = department.id`
        );
    };

    viewEmployees() {
        return this.db.promise().query( 
            `SELECT employees.*, role.title, role.salary, department.name
            AS role_name
            FROM employees
            JOIN role
            ON employees.role_id = role.id
            JOIN department
            ON role.department_id = department.id`        
        )
    }

    addDepartment(department) {
        return this.db.promise().query(
            `INSERT INTO department (name)
            VALUES('${department}')`
        );
    };

    addRole(name, salary, department_id) {
        return this.db.promise().query(
            `INSERT INTO role (name, salary, department_id)
            VALUES('${name}', '${salary}', '${department_id}')`
        );
    };

    addEmployee(firstName, lastName, roleId, managerId) {
        return this.db.promise().query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES('${firstName}', '${lastName}', '${roleId}', '${managerId}')`
        );
    };

    updateEmployee(id, role, salary) {
        return this.db.promise().query(
            `UPDATE employee SET 
            role_id = '${role}',
            salary = '${salary}'
            WHERE id = '${id}'`
        );
    };
};



module.exports = new DbQuery(db);