const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Contents of the README file
const generateMarkdown = `
# ${projectTitle},
## ${projectDescription},
## ${tableOfContents},
## ${appInstallationGuide},
## ${appUsage},
## ${appLicense},
## ${appContributors},
## ${appTesting},
## ${questions},
`;

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
    message: "License:",

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
function init() {}

function generateReadme(answers) {
  return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions, please feel free to [email me](mailto:${answers.email}).
  
  ![GitHub Profile Picture](${answers.avatar_url})
  `;
}

// function call to initialize program
init();
