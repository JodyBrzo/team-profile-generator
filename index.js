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
            staffArray.manager.push(new Manager(name, id, email, officeNumber))
            console.log(staffArray);
            EmployeeQuestions();
        })
  };

const EmployeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message:'What type of employee would you like to add or are you finished?',
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
        }])
        .then(({name, id, email, choice}) => {
            if(choice === 'Engineer')
            {
                return inquirer.prompt([{
                    type: 'input',
                    name: 'github',
                    message: 'What is the Engineer\'s Github username?'
                },
                {
                    type:'confirm',
                    name:'addEmployee',
                    message: 'Whould you like to add another employee?',
                    default: false
                }])
                .then(({github, addEmployee}) => {
                    staffArray.engineer.push(new Engineer(name, id, email, github))
                    console.log(staffArray);

                    if (addEmployee) {
                        return EmployeeQuestions();
                    }
                })
            }
            else if(choice === 'Intern')
            {
                return inquirer.prompt([{
                    type: 'input',
                    name: 'school',
                    message: 'Please enter Intern\'s school name'
                },
                {
                    type:'confirm',
                    name:'addEmployee',
                    message: 'Whould you like to add another employee?',
                    default: false
                }])
                .then(({school, addEmployee}) => {
                    staffArray.intern.push(new Intern(name, id, email, school))
                    console.log(staffArray);

                    if (addEmployee) {
                        return EmployeeQuestions();
                    }
                })            
            }
            else if(choice === 'I am done building my team')
            {
                //render HTML
            }
        })
};

  //function to initialize app
  const init = async () => {
    console.log('Welcome To The Team Profile Generator!');
    try {
        ManagerQuestions(); //Prompt manager for manager information
    } catch (err) {
      console.log(err);
      console.log('There was an error with user input');
    }
  };
  
  // Function call to initialize app
  init();