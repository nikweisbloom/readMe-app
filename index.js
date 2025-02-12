const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project use?'
    },
];

function generateREADME(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} License.
    `;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README.md has been generated!');
        }
    });
}

async function init() {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateREADME(answers);
    writeToFile('README.md', readmeContent);
}

init();
