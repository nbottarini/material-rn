import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const githubOwner = 'nbottarini'
const githubRepo = 'material-rn'

const config: Config = {
    title: 'Design System',
    tagline: 'Material Design 3 based Design System',
    favicon: 'img/material-rn.png',
    url: `https://${githubOwner}.github.io`,
    baseUrl: `/${githubRepo}/`,
    organizationName: githubOwner,
    projectName: githubRepo,

    onBrokenLinks: 'throw',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            require.resolve('@cmfcmf/docusaurus-search-local'),
            {
                indexBlog: false,
            },
        ],
    ],

    themeConfig: {
        colorMode: {
            disableSwitch: true,
        },
        navbar: {
            title: 'Design System',
            logo: {
                alt: 'Material RN',
                src: 'img/material-rn.png',
            },
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Nicolas Bottarini. Built with Docusaurus 3.`,
        },
        prism: {
            theme: prismThemes.dracula,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
}

export default config
