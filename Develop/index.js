// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('You need a Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need a description!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "Select your project's licensing: ",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'list',
        name: 'installation',
        message: "What command should be run to install dependencies?",
        choices: ['npm i']
    },
    {
        type: 'list',
        name: 'test',
        message: "What command should be run to run tests?",
        choices: ['npm test']
    },
    {
        type: 'input',
        name: 'information',
        message: "What does the user need to know about using the repo?",
        validate: informationInput => {
            if (informationInput) {
                return true;
            } else {
                console.log('You need some information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'features',
        message: "What are some features that sets apart your project from the rest?",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What does the user need to know about contributing to the repo?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Generating Read Me...');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        const fileName = "README.md";
        writeToFile(fileName, generateMarkdown(data));
    });
}

// Function call to initialize app
init();
