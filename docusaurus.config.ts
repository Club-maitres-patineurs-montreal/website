import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Club des Maîtres Patineurs de Montréal',
  tagline: 'Vous recherchez une activité physique qui vous garde en forme dans une atmosphère de camaraderie? Vous avez fait du patin plus jeune? Vous savez comment patiner avec des roues alignées? Vous vous retrouvez émule de Gaétan Boucher, Nathalie Lambert, Marc Gagnon et d’autres Québécois et Montréalais qui se sont illustrés dans cette discipline? Le Club des Maîtres, membre de Patinage de vitesse Québec, offre la possibilité d’un entraînement supervisé, pour les débutants jusqu’aux experts.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://maitrespatineurs.ca/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Club-maitres-patineurs-montreal', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'nouvelles',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Maîtres patineurs de Montréal',
      logo: {
        alt: 'Logo du Club des Maîtres',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Informations',
        },
        {to: '/nouvelles', label: 'Nouvelles', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Apprendre',
              to: '/docs/apprendre',
            },
          ],
        },
        {
          title: 'Suivez-nous',
          items: [
            {
              label: 'Page Facebook',
              href: 'https://www.facebook.com/maitres.patineurs.montreal',
            },
            {
              label: 'Groupe Facebook',
              href: 'https://www.facebook.com/groups/1727288670866489',
            },
            {
              label: 'Page Instagram',
              href: 'https://www.instagram.com/maitrespatineurs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Termes et conditions',
              to: '/termes-et-conditions',
            },
            {
              label: 'Règlements',
              href: '/reglements',
            },
            {
              label: 'Patinage de vitesse Québec',
              href: 'https://www.patinagedevitessequebec.ca',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Club des Maîtres Patineurs de Montréal. Site web construit avec Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
