/** js is just so much easier to maintain than .jsonc.
 * Avoid writing dynamic code here.
 * Remember that this gets rendered once and that's that.
 * You can find a template at the bottom
 */
module.exports = {
  backend: [
    {
      name: 'CORS explained',
      description:
        'CORS is important but sucks - this explains it and tries to solve common problems',
      URL: 'https://medium.com/@baphemot/understanding-cors-18ad6b478e2b',
    },
    {
      name: 'Intro to JWT',
      description: 'Explains how to securely transmit secrets as a JSON',
      URL: 'https://jwt.io/introduction/',
    },
    {
      name: 'Guide to easy SSL',
      description:
        "A great article from Troy Hunt on how to easily secure your website's data in transit. Really important for us since we handle personal data.",
      URL: 'https://www.troyhunt.com/the-6-step-happy-path-to-https/',
    },
  ],

  devops: [
    {
      name: 'Netlify > GitHub Pages',
      description:
        'A very biased but accurate explanation of why Netlify is better for static websites',
      URL: 'https://www.netlify.com/github-pages-vs-netlify/',
    },
  ],

  graphql: [
    {
      name: 'Docs for Apollo Server',
      description: 'Apollo is the GQL server that we use.',
      URL: 'https://www.apollographql.com/docs/',
    },
  ],

  random: [
    {
      name: 'Time is hard',
      description: 'Fun article about how hard timezones are and why they suck.',
      URL: 'https://zachholman.com/talk/utc-is-enough-for-everyone-right',
    },
  ],

  react: [
    {
      name: 'Intro to hooks',
      description: 'The canonical explanation of React Hooks from the team.',
      URL: 'https://reactjs.org/docs/hooks-intro.html',
    },
    {
      name: "Why we don't need Redux",
      description:
        'An argument from Dan Abramov (go look him up!) about why Redux is often not needed',
      URL: 'https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367',
    },
    {
      name: 'Deciding component structure',
      description: 'A guide on how to create a React component hierarchy.',
      URL: 'https://reactjs.org/docs/thinking-in-react.html',
    },
    {
      name: 'Getting started with React Router',
      description: 'What it sounds likes - authenticated routes and passing state',
      URL: 'https://reacttraining.com/react-router/web/guides/quick-start',
    },
  ],

  servers: [
    {
      name: '12 Factor App',
      description: "Ben likes this article but Kwuang doesn't.",
      URL: 'https://12factor.net/',
    },
  ],

  shell: [
    {
      name: 'zsh',
      description: 'Why we like ZSH as our shell',
      URL: 'http://fendrich.se/blog/2012/09/28/no/',
    },
    {
      name: 'Helpful shell commands',
      description: 'Pipe, grep, sort, filter commands which are useful for logging and such',
      URL: 'https://www.guru99.com/linux-pipe-grep.html',
    },
  ],

  typescript: [
    {
      name: 'Best practices',
      description: "A good guide to the dos and don'ts for typescript from MSFT.",
      URL: 'https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html',
    },
  ],

  // here's a template for an individual link - copy and paste it
  // { name: '', description: '', URL: '' }
};
