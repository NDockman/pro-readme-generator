
//include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//acquire the generateMarkdown function from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

//prompt an array of questions for user input
inquirer
    .prompt([
        {
            name: "title",
            message: "What is the title of the project? "
        },
        {
            name: "description",
            message: "Please enter a description of the project: "
        },
        {
            name: "tableOfContents",
            message: "What would you like in the Table of Contents? "
        },
        {
            name: "installation",
            message: "Please explain the installation process: "
        },
        {
            name: "usage",
            message: "What is the use of your application? "
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license for your application: ",
            choices: ["MIT", "Apache", "GNU"]
        },
        {
            name: "contribution",
            message: "How can the user contribute to the repo? "
        },
        {
            name: "test",
            message: "What command should be entered to run tests? "
        },
        {
            name: "userQuestions",
            message: "What should the user do if they have questions? "
        },
        {
            name: "username",
            message: "What is your GitHub username? "
        },
        {
            name: "email",
            message: "What is your email? "
        }
    ])
    .then(data => {
        const markdownContent = generateMarkdown(data);

        writeToFile("README.md", markdownContent);
    });

var questionsIndex = 0;

//writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md file')
    );
}
