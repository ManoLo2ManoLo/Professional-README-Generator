// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'
function renderLicenseBadge(license) {
  if (license === 'MIT') {

  } else if (license === 'APACHE 2.0') {
    
  } else if (license === 'GPL 3.0') {
    
  } else if (license === 'BSD 3') {
    
  } else {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {

  } else if (license === 'APACHE 2.0') {
    
  } else if (license === 'GPL 3.0') {
    
  } else if (license === 'BSD 3') {
    
  } else {
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {

  } else if (license === 'APACHE 2.0') {
    
  } else if (license === 'GPL 3.0') {
    
  } else if (license === 'BSD 3') {
    
  } else {
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);
  return `
  # ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents
  -[installation](#Installation)
  -[usage](#Usage)
  -[credits](#Credits)
  -[license](#License)
  -[badges](#Badges)
  -[features](#Features)
  -[contributing](#Contributing)
  -[tests](#Tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.information}

  ## Credits
  ${data.username}
  ${data.email}

  ## License
  ${data.license}

  ## Badges

  ## Features

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

`;
}

module.exports = generateMarkdown;
