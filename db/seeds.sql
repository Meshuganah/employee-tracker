INSERT INTO department (name)
VALUES
    ('Finance'),
    ('Engineering'),
    ('HR');

INSERT INTO `role` (title, salary, department_id)
VALUES
    ('Accountant', 70000, 1),
    ('Account Manager', 100000, 1),
    ('Junior Developer', 60000, 2),
    ('Software Developer', 120000, 2),
    ('Senior Developer', 150000, 2),
    ('HR Partner', 60000, 3),
    ('HR Specialist', 80000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Josh', 'Klein', 5, NULL),
    ('Sam', 'Samuelson', 4, 1),
    ('Mark', 'Spectre', 3, 1),
    ('Joe', 'Swift', 7, NULL),
    ('Jon', 'Nester', 6, 4),
    ('Belle', 'Marshall', 2, NULL),
    ('Matt', 'Ander', 1, 6);