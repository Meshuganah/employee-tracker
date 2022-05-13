const inquirer = require('inquirer');
require('console.table');
const Db = require ('./utils/index');
//const db = require ('./db/connection');

// async function mainPrompt()  {
//     const { choice } = await inquirer.prompt([
//         {
//             type: 'list',
//             name: 'choice',
//             message: 'Welcome to Employee Tracker data base, what would you like to do?',
//             choices: [
//                 {
//                     name: 'View all departments',
//                     value: 'viewDepartments'
//                 },
//                 {
//                     name: 'View all roles',
//                     value: 'viewRoles'
//                 },
//                 {
//                     name: 'View all employees',
//                     value: 'viewEmployees'
//                 },
//                 {
//                     name: 'Add a department',
//                     value: 'addDepartment'
//                 },
//                 {
//                     name: 'Add a role',
//                     value: 'addRole'
//                 },
//                 {
//                     name: 'Add an employee',
//                     value: 'addEmployee'
//                 },
//                 {
//                     name: 'Update an employee role',
//                     value: 'updateEmployee'
//                 }
//             ]
//         }
//     ])

// switch(choice) {
//     case 'viewDepartments':
//         const departments =  Db.viewDepartments();
//         return console.log(departments);
//     case 'viewRoles':
//         console.log('Currently viewing all roles');
//         break;
//     case 'viewEmployees':
//         console.log('Currently viewing all employees');
//         break;
//     case 'addDepartment':
//         console.log('Currently adding a department');
//         break;
//     case 'addRole':
//         console.log('Currently adding a role');
//         break;
//     case 'addEmployee':
//         console.log('Currently adding an employee');
//         break;
//     case 'updateEmployee':
//         console.log('You are now updating employee information');
//         break;
// };
// };

const mainPrompt = () => {
    inquirer.prompt([
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
                // Db.viewDepartments().then(([results]) => {
                //     console.table(results)});
                // mainPrompt();
                getDepartments();
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

function getDepartments() {
    Db.viewDepartments()
    .then(([results]) => {
        console.table(results);
    });
    mainPrompt();
}
mainPrompt();