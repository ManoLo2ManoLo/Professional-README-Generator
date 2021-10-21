// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `https://img.shields.io/badge/license-MIT-blue`
  } else if (license === 'APACHE 2.0') {
    return `https://img.shields.io/badge/license-APACHE%202.0-blue`
  } else if (license === 'GPL 3.0') {
    return `https://img.shields.io/badge/license-GPL%203.0-blue`
  } else if (license === 'BSD 3') {
    return `https://img.shields.io/badge/license-BSD%203-blue`
  } else {
    return `https://img.shields.io/badge/license-NONE-blue`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (license === 'APACHE 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'GPL 3.0') {
    return `https://opensource.org/licenses/GPL-3.0`
  } else if (license === 'BSD 3') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `## License
  ${license} License <br />
  Link to the website: ${renderLicenseLink(license)}`
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //renderLicenseLink(data.license);
  //renderLicenseSection(data.license);
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Badges](#Badges)
  * [Features](#Features)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions]

  ## Installation
  ${data.installation}

  ## Usage
  ${data.information}

  ## Credits
  The following code was written and revised by ${data.username}. <br />
  Any questions, you can email them ${data.email}.

  ${renderLicenseSection(data.license)}

  ## Badges
  ![${data.title}](${renderLicenseBadge(data.license)})

  ## Features
  ${data.features}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  You can reach me on my [Github profile](https://github.com/${data.username}).
  Any questions, you can email me at [${data.email}](${data.email}).
`;
}

module.exports = generateMarkdown;
