import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ci/',
  title: 'CI-SRE',
  description: '一站式部署发布SRE',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Deploy', link: '/deploy' },
      { text: 'CI介绍', link: '/ci/ci-introduce' },
      { text: '项目使用', link: '/sre/operate' }
    ],

    sidebar: {
      '/ci/': [
        {
          text: 'CI',
          items: [
            { text: 'ci介绍', link: '/ci/ci-introduce' },
            { text: 'Github Actions', link: '/ci/github-actions' },
            { text: 'gitee and jenkins', link: '/ci/gitee-jenkins' },
            { text: 'gitlab and jenkins', link: '/gitlab-jenkins' }
          ]
        }
      ],
      '/sre/': [
        {
          text: 'SRE',
          items: [
            { text: '使用说明', link: '/sre/operate' },
            { text: '代码解读', link: '/sre/code' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Eadela/ci#readme' }
    ]
  }
});
