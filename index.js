const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Enter usage information: ',
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
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'No License'],
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

inquirer.prompt(questions).then((data) => {
    const mdOutput = generateMarkdown(data);
    fs.writeFile('sampleREADME.md', mdOutput, (err) => {
        err ? console.log(err) : console.log('Successfully created README.md!!')
    });

});


// Create a function to initialize app
function init() {}

// Function call to initialize app
init();
