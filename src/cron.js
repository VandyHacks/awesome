const stripJsonComments = require('strip-json-comments'),
  fs = require('fs');

(async () => {
  const data = JSON.parse(
    stripJsonComments(await fs.promises.readFile('./src/data.jsonc', 'utf8')),
  )
    .filter(el => el.name !== '')
    .sort((a, b) => {
      const A = a.category.toUpperCase(),
        B = b.category.toUpperCase();

      if (A < B) return -1;

      if (A > B) return 1;
      return 0;
    });

  let contents =
    '# VH Awesome \n A curated list of readings that the VandyHacks dev team finds interesting and useful. \n';
  let lastCategory = '';
  for (let i = 0; i < data.length; i++) {
    const article = data[i];

    if (lastCategory !== article.category) {
      lastCategory = article.category;
      contents += ` \n ## ${lastCategory} \n`;
    }
    contents += `- [${article.name}](${article.URL}): ${article.description}`;
  }

  contents += `\n \n *Automatically generated at ${new Date().toTimeString()}*`;
  try {
    fs.promises.writeFile('README.md', contents);
    console.log('successfully wrote to README.md');
  } catch (err) {
    console.error('something bad happened');
  }
})();
