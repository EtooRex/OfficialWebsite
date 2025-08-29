import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'EtooreRex Documentation',
  description: 'Comprehensive documentation for AeROS® and Weibull Toolbox®',
  base: '/docs/',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AeROS®', link: '/aeros/' },
      { text: 'Weibull Toolbox®', link: '/weibull-toolbox/' },
      { text: 'API Reference', link: '/api/' }
    ],

    sidebar: {
      '/aeros/': [
        {
          text: 'AeROS® Documentation',
          items: [
            { text: 'Getting Started', link: '/aeros/' },
            { text: 'Installation', link: '/aeros/installation' },
            { text: 'User Guide', link: '/aeros/user-guide' },
            { text: 'Advanced Features', link: '/aeros/advanced-features' },
            { text: 'Troubleshooting', link: '/aeros/troubleshooting' }
          ]
        }
      ],
      '/weibull-toolbox/': [
        {
          text: 'Weibull Toolbox® Documentation',
          items: [
            { text: 'Getting Started', link: '/weibull-toolbox/' },
            { text: 'Installation', link: '/weibull-toolbox/installation' },
            { text: 'Statistical Analysis', link: '/weibull-toolbox/statistical-analysis' },
            { text: 'Distribution Fitting', link: '/weibull-toolbox/distribution-fitting' },
            { text: 'Examples', link: '/weibull-toolbox/examples' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Documentation',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Authentication', link: '/api/authentication' },
            { text: 'Simulation API', link: '/api/simulation' },
            { text: 'Analysis API', link: '/api/analysis' },
            { text: 'Error Handling', link: '/api/errors' }
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
  }
})