// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': return '![License Badge](https://img.shields.io/badge/license-MIT-green)';
    case 'APACHE 2.0': return '![License Badge](https://img.shields.io/badge/license-APACHE2.0-green)';
    case 'GPL 3.0': return '![License Badge](https://img.shields.io/badge/license-GPL3.0-green)';
    case 'BSD 3': return '![License Badge](https://img.shields.io/badge/license-BSD3.0-green)';
    case 'None' : return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': return 'https://choosealicense.com/licenses/mit/';
    case 'APACHE 2.0': return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'GPL 3.0': return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'BSD 3': return 'https://choosealicense.com/licenses/bsd-3-clause/'
    case 'None' : return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT': return `## License
    
This project is licensed under the ${license} license. To learn more plase visit this [link](${renderLicenseLink(license)}).`;

    case 'APACHE 2.0': return `## License

This project is licensed under the ${license} license. To learn more plase visit this [link](${renderLicenseLink(license)}).`;

    case 'GPL 3.0': return `## License

This project is licensed under the ${license} license. To learn more plase visit this [link](${renderLicenseLink(license)}).`;

    case 'BSD 3': return `## License

This project is licensed under the ${license} license. To learn more plase visit this [link](${renderLicenseLink(license)}).`;

    case 'None' : return '';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

    ${data.install}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

    ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work on [GitHub](https://github.com/${data.repo}).
`;
}

module.exports = generateMarkdown;
