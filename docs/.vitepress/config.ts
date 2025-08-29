import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'EtooreRex Learn',
  description: 'Comprehensive learning resources for reliability engineering',
  base: '/learn/',
  outDir: '../dist/learn',
  
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
            { text: 'Installation', link: '/documentation/installation' },
            { text: 'Quick Start', link: '/documentation/quick-start' }
          ]
        },
        {
          text: 'AeROS®',
          items: [
            { text: 'Overview', link: '/documentation/aeros/' },
            { text: 'User Guide', link: '/documentation/aeros/user-guide' },
            { text: 'Examples', link: '/documentation/aeros/examples' }
          ]
        },
        {
          text: 'Weibull Toolbox®',
          items: [
            { text: 'Overview', link: '/documentation/weibull/' },
            { text: 'User Guide', link: '/documentation/weibull/user-guide' },
            { text: 'Examples', link: '/documentation/weibull/examples' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: 'Video Tutorials',
          items: [
            { text: 'Getting Started', link: '/tutorials/' },
            { text: 'AeROS Basics', link: '/tutorials/aeros-basics' },
            { text: 'Weibull Analysis', link: '/tutorials/weibull-analysis' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Introduction', link: '/api/' },
            { text: 'Authentication', link: '/api/authentication' },
            { text: 'Endpoints', link: '/api/endpoints' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/etoorerex' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 EtooreRex'
    }
  },
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }]
  ]
})