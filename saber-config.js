module.exports = {
  build: {
    extractCSS: true,
    lazy: true,
  },
  theme: './theme',
  siteConfig: {
    lang: 'zh-cn',
    url: 'https://blog.duanfei.org',
    title: 'FriendsA',
    description: 'Personal Website of Duan Fei.',
    keywords: 'duanfei,blog,blogger，个人博客',
    author: 'DuanFei',
    disqusjs: {
      shortname: 'duanfeis-blog',
      sitename: "DuanFei's blog",
      apikey:
        'D7uane8BBRWsUOjSMYQiB5MsH23KwfUsby74d4a7aiWWT49tIAqqqC2gigQ1q8uk',
      admin: 'disqus_kHjqZhPfw2',
    },
  },
  themeConfig: {
    since: '2016',
    pswp: true,
    header: {
      logo_url: '/',
      nav: [
        {
          name: 'Blog',
          path: '/blog',
        },
        {
          name: 'Guestbook',
          path: '/guestbook',
        },
        {
          name: 'Running',
          path: 'https://run.duangfei.org/',
          // path: '/running'
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
    },
    footer: {
      social_network: [
        {
          name: 'Instagram',
          path: 'https://www.instagram.com/alone_cmj/?hl=en',
        },
        {
          name: 'GitHub',
          path: 'https://github.com/shaonianche',
        },
        {
          name: 'Twitter',
          path: 'https://twitter.com/Bonjour_Ar',
        },
        {
          name: 'Steam',
          path: 'https://steamcommunity.com/id/duanf/',
        },
      ],
    },
  },
  markdown: {
    plugins: [
      {
        resolve: 'markdown-it-footnote',
      },
      {
        resolve: 'markdown-it-cjk-breaks',
      },
      {
        resolve: 'markdown-it-attrs',
      },
    ],
  },
  permalinks: {
    post: '/blog/:year/:month/:slug',
    page: '/:slug',
  },
  plugins: [
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: '/feed/atom.xml',
        jsonFeed: '/feed/index.json',
      },
    },
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 12,
        permalinks: {
          category: '/blog/category/:name',
          tag: '/blog/tag/:name',
        },
        categoriesMap: {},
      },
    },
    {
      resolve: './packages/saber-plugin-image',
      options: {
        sizes: [1200, 720, 480],
        placeholder: true,
        blendIn: false,
      },
    },
    {
      resolve: './packages/saber-plugin-adobe-font',
      options: {
        kitId: 'mfy3ycj',
        useTypekitCache: true,
      },
    },
    {
      resolve: 'saber-plugin-prismjs',
    },
    {
      resolve: 'saber-plugin-sitemap',
      options: {
        template: './sitemap.xml',
      },
    },
    {
      resolve: 'saber-plugin-baidu-analytics',
      options: {
        trackId: 'ce8a793b27a541a8902492d462952fca',
      },
    },
  ],
}
