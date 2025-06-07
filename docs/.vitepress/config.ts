import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vue Components',
  description: '一个基于 Vue 3 的组件库',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/your-username/vue-component-template' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '安装', link: '/guide/installation' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/vue-component-template' },
    ],
  },

  vite: {
    resolve: {
      alias: {
        '@vue-components/components': '../packages/components/src',
        '@vue-components/theme-chalk': '../packages/theme-chalk/src',
      },
    },
  },
})
