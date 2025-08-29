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
            { text: 'Introduction', link: '/documentation/' },
            { text: 'Installation', link: '/documentation/installation' },
            { text: 'Quick Start', link: '/documentation/quick-start' }
          ]
        },
        {
          text: 'AeROS®',
          items: [
            { text: 'Overview', link: '/documentation/aeros/' },
            { text: 'RAM Analysis', link: '/documentation/aeros/ram-analysis' },
            { text: 'Monte Carlo Simulation', link: '/documentation/aeros/monte-carlo' },
            { text: 'Maintenance Modeling', link: '/documentation/aeros/maintenance' }
          ]
        },
        {
          text: 'Weibull Toolbox®',
          items: [
            { text: 'Overview', link: '/documentation/weibull/' },
            { text: 'Distribution Fitting', link: '/documentation/weibull/distribution-fitting' },
            { text: 'Probability Plotting', link: '/documentation/weibull/probability-plotting' },
            { text: 'Life Data Analysis', link: '/documentation/weibull/life-data-analysis' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: 'Video Tutorials',
          items: [
            { text: 'Getting Started', link: '/tutorials/' },
            { text: 'AeROS Basics', link: '/tutorials/aeros-basics' },
            { text: 'Weibull Analysis', link: '/tutorials/weibull-analysis' },
            { text: 'Advanced Techniques', link: '/tutorials/advanced' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Introduction', link: '/api/' },
            { text: 'Authentication', link: '/api/authentication' },
            { text: 'Simulation API', link: '/api/simulation' },
            { text: 'Analysis API', link: '/api/analysis' }
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