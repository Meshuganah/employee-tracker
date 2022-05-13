const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require ('./utils/index');
//const db = require ('./db/connection');

async function mainPrompt()  {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Welcome to Employee Tracker data base, what would you like to do?',
            choices: [
                {
                    name: 'View all departments',
                    value: 'viewDepartments'
                },
                {
                    name: 'View all roles',
                    value: 'viewRoles'
                },
                {
                    name: 'View all employees',
                    value: 'viewEmployees'
                },
                {
                    name: 'Add a department',
                    value: 'addDepartment'
                },
                {
                    name: 'Add a role',
                    value: 'addRole'
                },
                {
                    name: 'Add an employee',
                    value: 'addEmployee'
                },
                {
                    name: 'Update an employee role',
                    value: 'updateEmployee'
                }
            ]
        }
    ])

switch(choice) {
    case 'viewDepartments':
        //console.log(choice);
        // const departments =  db.viewDepartments();
        // return console.table(departments);
        //return console.log('Placeholder')
        // const sql = 'SELECT * FROM department';

        // db.query(sql, (err, row) => {
        //     return console.table(row);
        // });
        console.log('You are now viewing all departments');
        break;
    case 'viewRoles':
        console.log('Currently viewing all roles');
        break;
    case 'viewEmployees':
        console.log('Currently viewing all employees');
        break;
    case 'addDepartment':
        console.log('Currently adding a department');
        break;
    case 'addRole':
        console.log('Currently adding a role');
        break;
    case 'addEmployee':
        console.log('Currently adding an employee');
        break;
    case 'updateEmployee':
        console.log('You are now updating employee information');
        break;
};
};




mainPrompt();