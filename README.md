# ReadMe Gen

  ![License Badge](function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': return 'https://img.shields.io/badge/license-MIT-green';
    case 'APACHE 2.0': return 'https://img.shields.io/badge/license-APACHE2.0-green';
    case 'GPL 3.0': return 'https://img.shields.io/badge/license-GPL3.0-green';
    case 'BSD 3': return 'https://img.shields.io/badge/license-BSD3.0-green';
    case 'None' : return '';
  };
})

  ## Description

  It generates readmes

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  npm install

  ## Usage

  Be careful.

  function renderLicenseSection(license) {
  switch (license) {
    case 'MIT': return `  ## License

    This project is licensed under the ${data.license} license. To learn more plase visit this [link](${renderLicenseLink})
  `;
    case 'APACHE 2.0': return `  ## License

    This project is licensed under the ${data.license} license. To learn more plase visit this [link](${renderLicenseLink})
  `
    case 'GPL 3.0': return `  ## License

    This project is licensed under the ${data.license} license. To learn more plase visit this [link](${renderLicenseLink})
  `
    case 'BSD 3': return `  ## License

    This project is licensed under the ${data.license} license. To learn more plase visit this [link](${renderLicenseLink})
  `
    case 'None' : return '';
  };
}

  ## Contributing

  PLease do.

  ## Tests

  To run tests, run the following command:

  npm test

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at none@gmail.com. You can find more of my work at nsantander.
