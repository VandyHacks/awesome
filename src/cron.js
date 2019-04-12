const fs = require('fs');

(async () => {
  const data = require('./data');
  let contents =
    '# VH Awesome \n A curated list of readings that the VandyHacks dev team finds interesting and useful. \n';

  contents += Object.entries(data).reduce((categoryText, links) => {
    categoryText += `\n ## ${links[0]} \n`;
    categoryText += links[1]
      .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
      .reduce(
        (bulletpoints, { name, URL, description }) =>
          (bulletpoints += `- [${name}](${URL}): ${description}\n`),
        '',
      );

    return categoryText;
  }, '');

  contents += `\n \n *Automatically generated at ${new Date().toTimeString()}.*`;

  try {
    fs.promises.writeFile('README.md', contents);
    console.log('successfully wrote to README.md');
  } catch (err) {
    console.error(err);
  }
})();
