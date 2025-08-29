import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AEROS Documentation',
  description: 'Comprehensive learning resources for reliability engineering and asset management',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Complete Guide', link: '/documentation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aeros' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 AEROS'
    },

    outline: {
      level: [2, 3, 4]
    }
  }
})