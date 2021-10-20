// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

let filename = '';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project"
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
        message: "What does the user need to know about using the repo?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What does the user need to know about contributing to the repo?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        const fileName = "README.json";
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
