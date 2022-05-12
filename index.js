const inquirer = require('inquirer');
const cTable = require('console.table');
//const db = require ('db');

const mainPrompt = () => {
    return inquirer.prompt([
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
    ]).then(data => {
        switch(data.choice) {
            case 'viewDepartments':
                return console.log('Currently viewing all departments');
            case 'viewRoles':
                return console.log('Currently viewing all roles');
            case 'viewEmployees':
                return console.log('Currently viewing all employees');
            case 'addDepartment':
                return console.log('Currently adding a department');
            case 'addRole':
                return console.log('Currently adding a role');
            case 'addEmployee':
                return console.log('Currently adding an employee');
            case 'updateEmployee':
                return console.log('You are now updating employee information');
        };

    })
};




mainPrompt();