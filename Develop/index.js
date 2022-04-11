// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Answer following questions to create README file:")


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
           validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'What is app used for?',
            name: 'use',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'How to use the app?',
            name: 'how',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'How to install the app',
            name: "install",
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type:'input',
            message: 'How to report issues?',
            name: 'issues',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type:'input',
            message: 'How to make contributions',
            name: 'contribute',
            validate: (value)=>{ if(value){return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache', 'EPL', 'No License'],
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'git',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Add a screenshot using ![alt text](assets/images/screenshot.png)',
            name: 'screenshot',
        },
    ];
//);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

    console.log('Your README was generated');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
