module.exports = {
  build: {
    extractCSS: true,
    lazy: true
  },
  theme: "./theme/src",
  siteConfig: {
    lang: 'zh-CN',
    url: 'https://blog.duanfei.org',
    title: "友人A",
    description: 'Personal Website of Duan Fei.',
    keywords: 'duanfei,blog,blogger,个人博客',
    author: 'DuanFei',
    disqusjs: {
      shortname: 'duanfeis-blog',
      sitename: "DuanFei's blog",
      apikey: 'D7uane8BBRWsUOjSMYQiB5MsH23KwfUsby74d4a7aiWWT49tIAqqqC2gigQ1q8uk',
      admin: 'disqus_kHjqZhPfw2'
    },
    pwaFirstTimeInstallMessage: '本站可以离线访问',
    pwaUpdateFoundMessage: '正在更新站点资源',
    pwaUpdateReadyMessage: '站点资源更新就绪',
    pwaUpdateButtonMessage: '刷新',
    pwaDismissMessage: '忽略'
  },
  themeConfig: {
    since: '2016',
    pswp: true,
    header: {
      logo_url: '/',
      nav: [
        {
          name: 'Blog',
          path: '/blog'
        },
        {
          name: 'Guestbook',
          path: '/guestbook'
        },
        {
          name: 'Running',
          path:'https://run.duangfei.org/'
          // path: '/running'

        },
        {
          name: 'About',
          path: '/about'
        }
      ]
    },
    footer: {
      social_network: [
        {
          name: 'Instagram',
          path: 'https://www.instagram.com/alone_cmj/?hl=en'
        },
        {
          name: 'GitHub',
          path: 'https://github.com/shaonianche'
        },
        {
          name: 'Twitter',
          path: 'https://twitter.com/Bonjour_Ar'
        },
        {
          name: 'Steam',
          path: 'https://steamcommunity.com/id/duanf/'
        }
      ]
    }
  },
  markdown: {
    plugins: [
      {
        resolve: 'markdown-it-emoji'
      },
      {
        resolve: 'markdown-it-footnote'
      },
      {
        resolve: 'markdown-it-cjk-breaks'
      },
      {
        resolve: 'markdown-it-attrs'
      },
      {
        resolve: 'markdown-it-implicit-figures',
        options: {
          dataType: true,
          figcaption: true
        }
      }
    ]
  },
  permalinks: {
    post: '/blog/:year/:month/:slug',
    page: '/:slug'
  },
  plugins: [
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: '/feed/atom.xml',
        jsonFeed: '/feed/index.json'
      }
    },
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 12,
        permalinks: {
          category: '/blog/category/:name',
          tag: '/blog/tag/:name'
        },
        categoriesMap: {
        }
      }
    },
    {
      resolve: './packages/saber-plugin-image',
      options: {
        sizes: [1200, 720, 480],
        placeholder: true,
        blendIn: false
      }
    },
    // {
    //   resolve: './packages/saber-plugin-adobe-font',
    //   options: {
    //     kitId: 'qxo6reu',
    //     useTypekitCache: true
    //   }
    // },
    {
      resolve: 'saber-plugin-code-copy',
      options: {
        buttonStyle: {
          'display': 'flex',
          'border-radius': 0,
          'padding': '6px 6px 8px 8px',
          'transition': 'opacity .2s ease-in-out',
          'outline': 'none'
        }
      }
    },
    {
      resolve: 'saber-plugin-pwa',
      options: {
        generateSWOptions: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/cdn\.jsdelivr\.net\//,
              handler: 'StaleWhileRevalidate'
            },
            {
              urlPattern: /^https:\/\/use\.typekit\.net\//,
              handler: 'StaleWhileRevalidate'
            }
          ]
        }
      }
    },
    {
      resolve: 'saber-plugin-netlify-redirect'
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-sitemap',
      options: {
        template: './sitemap.xml'
      }
    },
    {
      resolve: 'saber-plugin-google-analytics',
      options: {
        trackId:'G-894MPRJ6VX'
      }
    },
    {
      resolve: 'saber-plugin-baidu-analytics',
      options: {
        trackId: 'ce8a793b27a541a8902492d462952fca'
      }
    },
  ]
}
