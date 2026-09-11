// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kit 辅助开发工具',
  tagline: '手边的开发运维工具',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://kit.fullstack.club',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
        title: 'Kit 项目主页',
        logo: {
          alt: 'kit logo is still in production',
          src: 'img/logo.svg',
        },
        items: [
          { href: 'https://flowus.cn/fullstack/share/9e90b5b7-cea7-44d7-9231-e5d8a6c807f9', label: '文档', position: 'right'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: '代码仓库',
                href: 'https://gitee.com/fullstackclub/kit.git',
              },
              {
                label: '开发者博客',
                to: 'http://gpio.me',
              },
              {
                label: '反馈',
                to: 'mailto:hq@gpio.me',
              },

            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: 'https://flowus.cn/fullstack/share/9e90b5b7-cea7-44d7-9231-e5d8a6c807f9',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kit / fullstack.club`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
