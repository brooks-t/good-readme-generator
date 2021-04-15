// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
    const mdOutput = `
    # ${data.title}
    
    ## Description
    ${data.description}

    ## Table of Contents
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## How to Contribute
    ${data.contributing}
    
    ## Tests
    ${data.testing}
    
    ## License
    ${data.license}
    
    ## Questions

    ### GitHub
    ${data.github}

    ### Email
    ${data.email}
    `
    return mdOutput
}

module.exports = generateMarkdown;

//return # ${data.title}