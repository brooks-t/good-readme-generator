const generateMarkdown = data => {
const mdOutput = `
# ${data.title}

## Description

${data.description}

---
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

---
## Installation

${data.installation}

---
## Usage

${data.usage}

---
## How to Contribute

${data.contributing}

---
## Tests

${data.testing}

---
## License

${data.license}

---
## Questions

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`
  return mdOutput
}

module.exports = generateMarkdown;

//return # ${data.title}

// Create a function that returns the license link
// If there is no license, return an empty string
/*renderLicenseLink = data => {
  if (data.license === 'MIT') {
    const licenseLink = 'https://choosealicense.com/licenses/mit/';
  } else if (data.license === 'GNU GPLv3') {
    const licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  } else if (data.license === 'Apache License 2.0') {
    const licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (data.license === 'ISC License') {
    const licenseLink = 'https://choosealicense.com/licenses/isc/';
  } else {
    const licenseLink = 'https://choosealicense.com/no-permission/';
  }

  return licenseLink

}*/

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}



// Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}