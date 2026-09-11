// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kit 辅助开发工具',
  tagline: '手边的开发运维工具',
  favicon: 'img/favicon.ico',

  url: 'http://kit.fullstack.club',
  baseUrl: '/',

  organizationName: 'Fullstack',
  projectName: 'kit.program',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Kit',
        logo: {
          alt: 'Kit logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            href: 'http://git.honor3.com/Fullstack/kit.program',
            label: '仓库',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kit',
            items: [
              {
                label: '下载',
                to: '/',
              },
              {
                label: '文档',
                to: '/docs/intro',
              },
              {
                label: '功能概览',
                to: '/docs/features',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '代码仓库',
                href: 'http://git.honor3.com/Fullstack/kit.program',
              },
              {
                label: '反馈',
                href: 'mailto:hq@gpio.me',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kit / fullstack.club`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash'],
      },
    }),
};

export default config;
