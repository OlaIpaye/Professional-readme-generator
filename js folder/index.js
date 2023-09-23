// Giving access to the file system
const fs = require("fs");

// Stored README user inputs in const and let variables
const projectTitle = "#";
let projectDescription = "##";
let tableOfContents = "##";
let appInstallationGuide = "##";
let appUsage = "##";
let appLicense = "##";
let appContributors = "##";
let appTesting = "##";
let questions = "##";

// Contents of the README file
const readMeContent = `
${projectTitle},
${projectDescription},
${tableOfContents},
${appInstallationGuide},
${appUsage},
${appLicense},
${appContributors},
${appTesting},
${questions},
`;

// Function to create the file
fs.writeFile("Readme.md", readMeContent, "utf8", (err) => {});
