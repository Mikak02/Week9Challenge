// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==='Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license ==='Unlicense') {
    return ''
  }
  if (license ==='MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
  if (license ==='GNU') {
    return '!License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license ==='EPL') {
    return '![License: EPL](https://img.shields.io/badge/License-EPL_1.0-red.svg)(https://opensource.org/licenses/EPL-1.0)'
  }
  
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  - ${data.use}
  - ${data.how}
  - ${data.git}

  ## License

  - ${renderLicense(data.license)}

  Refer to [https://choosealicense.com/](https://choosealicense.com/),

  ## Installation
  ${data.install}

  ## Issues
  Report any Issues by ${data.issues}

  ## Contributions
  You can make contributions by ${data.contribute}

  ## Usage

  ![alt text](assets/images/screenshot.png)

  ## Contact 
  Contact by email: ${data.email} or see more work at: [${data.git}](https://github.com/${data.git}).
`;
}


module.exports = generateMarkdown;
