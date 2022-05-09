module.exports = {
  title: "XY-Mall-Docs",
  description: '一款简易的商城系统',
  dest: 'public',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '指南',
        icon: 'reco-message',
        link: '/docs/guide/'
      },
      {
        text: '相关链接',
        icon: 'reco-message',
        items: [{
          text: 'Admin-GitHub',
          link: 'https://github.com/z-xuanyu/xy-mall-admin',
          icon: 'reco-github'
        }, {
          text: 'Server-Api-GitHub',
          link: 'https://github.com/z-xuanyu/xy-mall-api',
          icon: 'reco-github'
        }, {
          text: 'Uni-GitHub',
          link: 'https://github.com/z-xuanyu/xy-mall-uni',
          icon: 'reco-github'
        }]
      },
      {
        text: '更新记录',
        link: '/timeline/',
        icon: 'reco-date'
      },
    ],
    sidebar: {
      '/docs/course/': [{
        title: '教程',
        path: 'init'
      }],
      '/docs/guide/': [{
        title: '服务端',
        collapsable: false,
        children: [{
          title: '安装',
          path: 'server/install'
        }]
      }, {
        title: 'Admin端',
        collapsable: false,
        children: [{
          title: '安装',
          path: 'admin/install'
        }]
      }, {
        title: 'Uni客户端',
        collapsable: false,
        children: [{
          title: '安装',
          path: 'uni/install'
        }]
      }]
    },
    friendLink: [{
      title: '轩钰博客',
      desc: '轩钰博客笔记记录',
      email: '969718197@qq.com',
      link: 'https://www.zhouxuanyu.com'
    }, ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'xuanyu',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2022.01'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}