
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if (license === "Apache"){
    return `[![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)](https://opensource.org/license/apache-2-0/)`
  }

  if (license === "GNU"){
    return `[![License: GNU](https://img.shields.io/badge/License-GNU-yellowgreen.svg)](https://opensource.org/license/gpl-3-0/)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `[MIT License Link](https://opensource.org/licenses/MIT)`
  }
  
  if (license === "Apache"){
    return `[Apache License Link](https://opensource.org/license/apache-2-0/)`
  }

  if (license === "GNU"){
    return `[GNU License Link](https://opensource.org/license/gpl-3-0/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge();
  renderLicenseLink();
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
${data.tableOfContents}
## Installation Process
${data.installation}
## Usage
${data.usage}
## License: ${data.license}
## Contributions
${data.contribution}
## How to test
${data.test}
## Questions
${data.userQuestions}
    

  `;
}

module.exports = generateMarkdown;
