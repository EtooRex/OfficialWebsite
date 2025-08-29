import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AEROS Documentation',
  description: 'Comprehensive documentation for AEROS reliability engineering platform',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' }
        ]
      },
      {
        text: 'Products',
        items: [
          { text: 'AeROS®', link: '/guide/aeros' },
          { text: 'Weibull Toolbox®', link: '/guide/weibull' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Overview', link: '/api/' },
          { text: 'Authentication', link: '/api/auth' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aeros' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 AEROS'
    }
  }
})