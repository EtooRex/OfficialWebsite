import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'EtooreRex Learn',
  description: 'Comprehensive learning resources for reliability engineering',
  base: '/learn/',
  outDir: '../dist/learn',
  
  themeConfig: {
    nav: [
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'API Reference', link: '/api/' }
    ],
    
    sidebar: {
      '/documentation/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/documentation/' }
          ]
        },
        {
          text: 'AeROS®',
          items: [
            { text: 'Overview', link: '/documentation/aeros/' }
          ]
        },
        {
          text: 'Weibull Toolbox®',
          items: [
            { text: 'Overview', link: '/documentation/weibull/' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: 'Video Tutorials',
          items: [
            { text: 'Getting Started', link: '/tutorials/' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Introduction', link: '/api/' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/etoorerex' }
    ]
  },
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }]
  ]
})