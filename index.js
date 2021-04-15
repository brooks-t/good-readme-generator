// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage in information: ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines: ',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application: ',
        choices: ['choice A', 'choice B', 'choice C'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    }
];

inquirer.prompt(questions).then

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
