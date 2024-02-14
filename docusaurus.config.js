// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'In-toto',
  tagline: 'Documentation for the in-toto Project',
  favicon: '/static/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://witness.in-toto.chaosinthe.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'in-toto', // Usually your GitHub org/user name.
  projectName: 'in-toto', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "..",
          // Every project must have a docs directory, CONTRIBUTING.md, and CODE_OF_CONDUCT.md 
          include: [
            "docs/**/*.{md,mdx}",
            "README.md",
            "CONTRIBUTING.md",
            "CODE_OF_CONDUCT.md",
          ],
          sidebarPath: '../sidebars.js',
          routeBasePath: "/docs",
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'in-toto Project Logo',
          src: 'img/in-toto.png',
        },
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            href: "http://localhost:3000/docs/",
            position: "left",
            className: "header-community-link",
            target: '_self',
          },
          {
            href: "http://localhost:3001/docs/",
            position: "left",
            className: "header-golang-link",
            target: '_self',
          },
          {
            href: "http://localhost:3001/docs/",
            position: "left",
            className: "header-python-link",
            target: '_self',
          },
          {
            href: "https://witness.in-toto.chaosinthe.dev/docs/",
            position: "left",
            className: "header-witness-link",
            target: '_self',
          },
          {
            href: "http://archivista.in-toto.chaosinthe.dev/docs/",
            position: "left",
            className: "header-archivista-link",
            target: '_self',
          },
          {
            href: "https://github.com/in-toto/in-toto",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://communityinviter.com/apps/cloud-native/cncf",
            position: "right",
            className: "header-slack-link",
            "aria-label": "Slack Invite Link",
          },

        ],
      },
    announcementBar: {
      id: 'support_us',
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      textColor: 'white',
      backgroundColor: '#333385',
      isCloseable: false,
    },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/tutorials/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://slack.cncf.io/',
              },
              {
                label: 'Github',
                href: 'https://github.com/in-toto/in-toto',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The in-toto Contributors, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
