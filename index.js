// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const prompt = inquirer.createPromptModule();
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'repo',
        message: 'What is your github username?',
    },
    {
        name: 'email',
        message: 'What is your email address?',
    },
    {
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        name: 'description',
        message: 'Please write a short description of your project:',
    },
    {
        name: 'license',
        message: 'What kind of license should your project have? (Use arrow keys)',
        type: 'rawlist',
        choices: [
            'MIT',
            'APACHE 2.0',
            'GPL 3.0',
            'BSD 3',
            'None',
        ],
        default: 'none',
    },
    {
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm install',
    },
    {
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (!fs.existsSync('output')) {
        fs.mkdirSync('output');
    }
    fs.writeFileSync(`output/${fileName}`, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then((data) => {
        console.log(data);
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();
