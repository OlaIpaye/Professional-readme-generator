const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Contents of the README file
// const generateMarkdown = `
// # ${projectTitle},
// ## ${projectDescription},
// ## ${tableOfContents},
// ## ${appInstallationGuide},
// ## ${appUsage},
// ## ${appLicense},
// ## ${appContributors},
// ## ${appTesting},
// ## ${questions},
// `;

// array of questions for user
const questions = [
  {
    type: "input",
    name: projectTitle,
    message: "What is the title of your project:",
  },
  {
    type: "input",
    name: projectDescription,
    message: "Write a brief description for your project:",
  },
  {
    type: "input",
    name: tableOfContents,

    type: "input",
    type: appInstallationGuide,
    message: "How do you want people to install your app?",

    type: "input",
    type: appUsage,
    message: "How should people use your app?",

    type: "input",
    type: appLicense,
    message: "License: 1.0.0",

    type: "input",
    type: appContributors,
    message: "Contributors:",

    type: "input",
    type: appTesting,
    message: "Testing:",
  },
  {
    type: "input",
    name: questions,
    message:
      "If you have any questions, please email our team: ipayeola@gmail.com",
  },
];

// function to write README file
fs.writeFile("README.md", generateMarkdown, (err) =>
  err
    ? console.error("Error writing your README file:", err)
    : console.log("Your README.md file has been generated successfully.")
);

// function to initialize program
function generateMarkdown(answers) {
  return `
  # ${answers.projectTitle}
  
  ## Description
  ${answers.projectDescription}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the ${answers.appLicense} license.
  
  ## Contributors
  ${answers.contributing}
  
  ## Testing
  ${answers.appTesting}
  
  ## Questions
  If you have any questions, please feel free to [email me](mailto:${answers.questions}).
  `;
}

// Prompt users questions
inquirer
  .prompt(questions)
  .then((answers) => {
    const readmeFile = generateMarkdown(answers));

  // function call to initialize program
generateMarkdown();