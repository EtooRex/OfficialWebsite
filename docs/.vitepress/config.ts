import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AEROS Documentation',
  description: 'Comprehensive learning resources for reliability engineering and asset management',
  base: '/docs/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'API Reference', link: '/api/' }
    ],

    sidebar: {
      '/documentation/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/documentation/' },
            { text: 'Data Classification', link: '/documentation/data-classification' }
          ]
        },
        {
          text: 'AeROS®',
          items: [
            { text: 'Overview', link: '/documentation/aeros/' },
            { text: 'User Guide', link: '/documentation/aeros/user-guide' },
            { text: 'Best Practices', link: '/documentation/aeros/best-practices' }
          ]
        },
        {
          text: 'Weibull Toolbox®',
          items: [
            { text: 'Overview', link: '/documentation/weibull/' },
            { text: 'Statistical Analysis', link: '/documentation/weibull/analysis' },
            { text: 'Distribution Fitting', link: '/documentation/weibull/fitting' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: 'Tutorials',
          items: [
            { text: 'Getting Started', link: '/tutorials/' },
            { text: 'Basic Analysis', link: '/tutorials/basic-analysis' },
            { text: 'Advanced Techniques', link: '/tutorials/advanced' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Authentication', link: '/api/auth' },
            { text: 'Endpoints', link: '/api/endpoints' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aeros' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 AEROS'
    }
  }
})