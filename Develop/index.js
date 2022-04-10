// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');
const createReadme = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
            type: 'input',
            message: 'What license did you use?',
            name: 'license',
            choices:['MIT', 'GPL', 'Apache', 'Unlicense', 'EPL'],
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
    ]
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

    console.log('Your README was generated');
    });
};
// .then((data) => {
//     console.log(data);
//     fs.writeFile('README.md', generateMarkdown(data),
//     error =>{
//         if (error) {
//             console.log('Please input all data')
//         }
//         console.log('Your README was generated')
//     })
// })

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
