const inquirer = require('inquirer');
const { addDepartment } = require('./utils/index');
require('console.table');
const Db = require ('./utils/index');

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
                return printDepartments();               
            case 'viewRoles':
                return printRoles();              
            case 'viewEmployees':
                return printEmployees();
            case 'addDepartment':
                return createDepartment();
            case 'addRole':
                return createRole();
            case 'addEmployee':
                return createEmployee();
            case 'updateEmployee':
                return changeEmployee();
        };
    })
};

function printDepartments() {
    Db.viewDepartments()
    .then(([results]) => {
        console.log('\n')
        console.table(results);
    });
    mainPrompt();
};

function printRoles() {
    Db.viewRoles()
    .then(([results]) => {
        console.log('\n');
        console.table(results);
    });
    mainPrompt();
};

function printEmployees() {
    Db.viewEmployees()
    .then(([results]) => {
        console.log('\n')
        console.table(results);
    });
    mainPrompt();
};

async function createDepartment() {
    const newDepartment = await inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What department would you like to add?'
        }
    ]);
    const result = newDepartment.department;
    Db.addDepartment(result);
    console.log(`${result} has been added!`)
    mainPrompt();
};

async function createRole() {
    const newRole = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the new role you would like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What will the base salary of this role be?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Which department will this role be a part of? Please use department id.'
        }
    ]);
    const newName = newRole.name;
    const newSalary = newRole.salary;
    const newDepartmentId = newRole.department_id;

    Db.addRole(newName, newSalary, newDepartmentId);
    console.log(`${newRole.name} has been added to the database!`);
    mainPrompt();
};

async function createEmployee() {
    const newEmployee = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: `What is this employee's first name?`,
        },
        {
            type: 'input',
            name: 'lastName',
            message: `What is this employee's last name?`
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What role will this employee be in? Please use a role Id'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Who does this employee report to? Please use the employee Id of the manager, or enter NULL if none.'
        }
    ]);
    const newFirstName = newEmployee.firstName;
    const newLastName = newEmployee.lastName;
    const newRoleId = newEmployee.roleId;
    const newManagerId = newEmployee.newManagerId;

    Db.addEmployee(newFirstName, newLastName, newRoleId, newManagerId);
    console.log(`${newFirstName} ${newLastName} has been added to the database!`);
    mainPrompt();
};

async function changeEmployee() {
    const updatedEmployee = await inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: `Which employee's information would you like to update? Please use employee id number.`
        },
        {
            type: 'input',
            name: 'role',
            message: 'Which role will this employee be moving into? Please use role id, if role has not changed, use previous id.'
        },
        {
            type: 'input',
            name: 'salary',
            message: `What will the employee's salary be? If no change, use old salary.`
        },
    ]);
    const employeeId = updatedEmployee.employeeId;
    const employeeRole = updatedEmployee.role;
    const employeeSalary = updatedEmployee.salary;


    Db.updateEmployee(employeeId, employeeRole, employeeSalary);
    console.log('Employee information has been updated!');
    mainPrompt();
}

mainPrompt();