module.exports = {
  dest: 'dist',
  port: 8080,
  // host: '127.0.0.1',
  base: '/',
  title: '一緒に',
  description: 'VuePress Blog 的网站描述',
  // description: 'VuePress Blog 的网站描述',  当然我在日白
  head: [
      ['link', { rel: 'icon', href: '/img/logo.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: '归档', link: '/guide/' },
      {
        text: '联系',
        items: [
          {
            text: '中文',
            items: [
              {
                text: '中文简体', link: '/language/chinese'
              },
              {
                text: '中文繁体', link: '/language/chinese2'
              }
            ]
          },
          { text: '英语', link: '/language/english' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/wangyixu' }
    ],

    sidebar: 'auto',
    search: true,
    searchMaxSuggestions: 10
  }
}