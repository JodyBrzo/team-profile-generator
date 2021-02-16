const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const staffArray = {
    'manager': [], 
    'engineer': [],
    'intern': []
};

const ManagerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please Enter The Team Manager\'s Name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please Enter The Team Manager\'s Employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please Enter The Team Manager\'s Email Address'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please Enter The Team Manager\'s Office Number'
        }])
        .then(({name, id, email, officeNumber}) => {
            //new up a manager class and push the data into the array
        })

  };

const EmployeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message:'Would you like to enter another employee?',
            choices: ['Engineer', 'Intern', 'I am done building my team']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please Enter The Employee\'s Name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please Enter The Employee\'s Employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please Enter The Employee\'s Email Address'
        }
        .then(({name, id, email, role}) => {
            if(role === 'Engineer'){
                return inquirer.prompt([{
                    type: 'input',
                    name: 'github',
                    message: 'What is the Engineer\'s Github username?'
                }])
            }

            if(role === 'Intern'){
                return inquirer.prompt([{
                    type: 'input',
                    name: 'school',
                    message: 'Please enter Intern\'s school name'
                }])
            }

        })
    ])
};


