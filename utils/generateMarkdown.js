
//returns a license badge based on which license is passed in
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

//returns the license link
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


//generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license. \n
${renderLicenseLink(data.license)}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
Link to my GitHub profile: [${data.username}](https://github.com/NDockman) \n
Additional questions can be submitted to: ${data.email} \n
${data.userQuestions}
    
`;
}

module.exports = generateMarkdown;
