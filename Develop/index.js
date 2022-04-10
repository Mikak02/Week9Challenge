// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');


// TODO: Create an array of questions for user input
//const questions = [];
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Instructions to follow?',
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Any credits?',
            name: "credits",
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type:'input',
            message: 'How do you use your app?',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'What license did you use?',
            name: 'license',
            choices:['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'git',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'E-mail',
            name: 'email',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},

        },
    ]
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
