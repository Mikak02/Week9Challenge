// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string or maybe some creative text deemed appropriate
function renderLicense(license) {
  if (license ==='Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license ==='No License') {
    return 'No License? Sigh. Now we have to bring the lawyers.'
  }
  if (license ==='MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
  if (license ==='GPL') {
    return '![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)'
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

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Guidelines](#guidelines)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ![${data.screenshot}](assets/images/screenshot.png)

  ## License

  - ${renderLicense(data.license)}

  Refer to [https://choosealicense.com/](https://choosealicense.com/),

  ## Contributing
  You can make contributions by ${data.contribute}

  ## Guidelines
  Report any Issues by ${data.issues}

  ## Testing
  Testing Instructions are ${data.test}

  ## Questions 
  Contact by email: ${data.email} or see more work at: [${data.git}](https://github.com/${data.git}).
`;
}


module.exports = generateMarkdown;
