/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_saber/css/styles.ef66a58e.chunk.css",
    "revision": "3c43c2ff6009aae3d7c48d19e2e9f423"
  },
  {
    "url": "_saber/images/20200906001-1b3465b2.jpg",
    "revision": "1b3465b2e2b29a25ffbcc6df31e3415d"
  },
  {
    "url": "_saber/images/20200906001-24826399.jpg",
    "revision": "24826399f97f17f23f2728ccafa59a32"
  },
  {
    "url": "_saber/images/20200906001-8335d609.jpg",
    "revision": "8335d609a0c6483ebb0a4be148d2bee8"
  },
  {
    "url": "_saber/images/20200906002-783ed68b.jpg",
    "revision": "783ed68b2860bd41807c793bd18793fe"
  },
  {
    "url": "_saber/images/20200906002-bbfdc0a2.jpg",
    "revision": "bbfdc0a2f8e083675b872627c6d51fe2"
  },
  {
    "url": "_saber/images/20200906002-c3eab63f.jpg",
    "revision": "c3eab63f0121d312ec004b36dfe288e8"
  },
  {
    "url": "_saber/images/20200906003-635007c3.jpg",
    "revision": "635007c3615c7e0ab5791f7b59901641"
  },
  {
    "url": "_saber/images/20200906003-878650ea.jpg",
    "revision": "878650ea40b1dd60cbdc925a66b396cf"
  },
  {
    "url": "_saber/images/20200906003-a88ee61a.jpg",
    "revision": "a88ee61aa28f31bb827336f91a55183b"
  },
  {
    "url": "_saber/images/20200906004-46eabefc.jpg",
    "revision": "46eabefc006d51ab82df4ca9f2365474"
  },
  {
    "url": "_saber/images/20200906004-dc4c8f0d.jpg",
    "revision": "dc4c8f0d8b013399fa3827af7d2d69bd"
  },
  {
    "url": "_saber/images/20200906004-e8187487.jpg",
    "revision": "e818748759e7aba7232031b873f3bfff"
  },
  {
    "url": "_saber/images/20200906005-1-060a5ee1.jpg",
    "revision": "060a5ee18bd0478eca992ed2ee82d470"
  },
  {
    "url": "_saber/images/20200906005-1-22ccc50a.jpg",
    "revision": "22ccc50ac6e720683690b554134578e7"
  },
  {
    "url": "_saber/images/20200906005-1-a0525041.jpg",
    "revision": "a05250414aa2738cdb9c3d774db939ed"
  },
  {
    "url": "_saber/images/20200906005-2bffb61b.jpg",
    "revision": "2bffb61bbb689df62181ce2a6d38b411"
  },
  {
    "url": "_saber/images/20200906005-305ba248.jpg",
    "revision": "305ba24824042e42ee7b8c7e7935cc95"
  },
  {
    "url": "_saber/images/20200906006-1-3c610796.jpg",
    "revision": "3c6107962d702ef1210d2fb11de20e63"
  },
  {
    "url": "_saber/images/20200906006-1-ad79a2b4.jpg",
    "revision": "ad79a2b4469422087e729fd539cb36cf"
  },
  {
    "url": "_saber/images/20200906006-1-dc55ac29.jpg",
    "revision": "dc55ac2984cd2aea8297146144786b5f"
  },
  {
    "url": "_saber/images/20200906006-13c53cd6.jpg",
    "revision": "13c53cd6a6446c5cc808fa51c0ee2c8a"
  },
  {
    "url": "_saber/images/20200906006-7991deef.jpg",
    "revision": "7991deef4d41fbea692d35014c312888"
  },
  {
    "url": "_saber/images/20200906006-f32ba659.jpg",
    "revision": "f32ba659287b943c6f326e48b4217f9a"
  },
  {
    "url": "_saber/images/20200906007-4808df81.jpg",
    "revision": "4808df81458de1665069b27b1b78bb0a"
  },
  {
    "url": "_saber/images/20200906007-8b2c0f8c.jpg",
    "revision": "8b2c0f8ce11ea732be42b99c3fc74155"
  },
  {
    "url": "_saber/images/20200906007-c5d4eefd.jpg",
    "revision": "c5d4eefd12b5a3d620d8fc670417907c"
  },
  {
    "url": "_saber/images/20200906008-5594ef28.jpg",
    "revision": "5594ef28456737ac75adcaf1366c7074"
  },
  {
    "url": "_saber/images/20200906008-7a225ad8.jpg",
    "revision": "7a225ad8afea742cf2d1a3fdde2e7403"
  },
  {
    "url": "_saber/images/20200906008-e7695d7f.jpg",
    "revision": "e7695d7f37ee6972a31b7a1cbe5205eb"
  },
  {
    "url": "_saber/images/20200906009-212b9b46.jpg",
    "revision": "212b9b4682e42d813f1a4d43d732e207"
  },
  {
    "url": "_saber/images/20200906009-61de6fad.jpg",
    "revision": "61de6fadded714a94b73874a0b2b69d0"
  },
  {
    "url": "_saber/images/20200906009-ad35935f.jpg",
    "revision": "ad35935fef3a7be38e6f0b52dd9a5063"
  },
  {
    "url": "_saber/images/20200906010-3dcb4df0.jpg",
    "revision": "3dcb4df001c84de7657e3985ab871df0"
  },
  {
    "url": "_saber/images/20200906010-452b435a.jpg",
    "revision": "452b435a015073ca3cf596907a621e2e"
  },
  {
    "url": "_saber/images/20200906010-d7c75e8c.jpg",
    "revision": "d7c75e8c276f1d07076cdfe2b2714972"
  },
  {
    "url": "_saber/images/20200906011-1508ae8d.jpg",
    "revision": "1508ae8d32c6495594e98d2bc803029c"
  },
  {
    "url": "_saber/images/20200906011-201204c4.jpg",
    "revision": "201204c4857e2fe8589d93a1b0274bb1"
  },
  {
    "url": "_saber/images/20200906011-cbdb78ce.jpg",
    "revision": "cbdb78ce9230158d6b20216fae80f5cb"
  },
  {
    "url": "_saber/images/20200906012-7cc2604d.jpg",
    "revision": "7cc2604de913bede34ff43e468b42cd2"
  },
  {
    "url": "_saber/images/20200906012-ad482427.jpg",
    "revision": "ad482427b97df07b892b77a3defbd751"
  },
  {
    "url": "_saber/images/20200906012-d1901cdc.jpg",
    "revision": "d1901cdc9ff8f1ecbcbc0375f82d9e3f"
  },
  {
    "url": "_saber/images/20200906013-c23af038.jpg",
    "revision": "c23af03876f924419b1f72ba04127843"
  },
  {
    "url": "_saber/images/20200906013-cf0000cc.jpg",
    "revision": "cf0000cc623b275275dfa7bd23788530"
  },
  {
    "url": "_saber/images/20200906013-f7efe0f3.jpg",
    "revision": "f7efe0f3e227b34ca050c339aabdd02a"
  },
  {
    "url": "_saber/images/20200906014-9f5f96b9.jpg",
    "revision": "9f5f96b99f7861b3ec4c4f1aefc1d097"
  },
  {
    "url": "_saber/images/20200906014-b4d597fc.jpg",
    "revision": "b4d597fcfaca6571ebe6f4d3dd0a0a9a"
  },
  {
    "url": "_saber/images/20200906014-dfce378e.jpg",
    "revision": "dfce378eb49b63754b5a8b411c28b8e8"
  },
  {
    "url": "_saber/images/20200906015-0a90bfb4.jpg",
    "revision": "0a90bfb4ac69f0a4746d29ec2d91ef05"
  },
  {
    "url": "_saber/images/20200906015-3523a9eb.jpg",
    "revision": "3523a9ebbaf3d15403aadcd1544a0a2c"
  },
  {
    "url": "_saber/images/20200906015-6e8af5b9.jpg",
    "revision": "6e8af5b978b0ea17a07ec1d9aa593748"
  },
  {
    "url": "_saber/images/20200906016-18972df1.jpg",
    "revision": "18972df1221fd2e57018db043cd55af8"
  },
  {
    "url": "_saber/images/20200906016-2f8c322c.jpg",
    "revision": "2f8c322cb1447a0a2619fcc0e63d3529"
  },
  {
    "url": "_saber/images/20200906016-804cd966.jpg",
    "revision": "804cd96616ab571374b65661909836c9"
  },
  {
    "url": "_saber/images/20200906017_1-7f537f0d.jpg",
    "revision": "7f537f0dab41a71fc28e9514c3b62f6c"
  },
  {
    "url": "_saber/images/20200906017_1-8a82a9e7.jpg",
    "revision": "8a82a9e78c3b06ad9594bf00302dbd8d"
  },
  {
    "url": "_saber/images/20200906017-1-3c838479.jpg",
    "revision": "3c8384799038d08e99fe87fe863a2dd2"
  },
  {
    "url": "_saber/images/20200906017-1-a5041b86.jpg",
    "revision": "a5041b863b185199695b05fb8b37bca5"
  },
  {
    "url": "_saber/images/20200906017-1-bc90a1a6.jpg",
    "revision": "bc90a1a6d7110bf58286e73b1728c4d9"
  },
  {
    "url": "_saber/images/20200906017-5309893d.jpg",
    "revision": "5309893d6c7f3cb6cc5542933a61b0ec"
  },
  {
    "url": "_saber/images/20200906017-ab13d570.jpg",
    "revision": "ab13d570ce413d1b82207fa7acce2324"
  },
  {
    "url": "_saber/images/20200906017-c4c7ee2c.jpg",
    "revision": "c4c7ee2cc3df7d0d5320abd4a6f75cea"
  },
  {
    "url": "_saber/images/20200906018-7e629f9b.jpg",
    "revision": "7e629f9b7eb3fdedc454ecaf62529db8"
  },
  {
    "url": "_saber/images/20200906018-842aba36.jpg",
    "revision": "842aba369c8b36a39671452ecd65e472"
  },
  {
    "url": "_saber/images/20200906018-da210156.jpg",
    "revision": "da2101566d6e5dff55f350348dd23767"
  },
  {
    "url": "_saber/images/20200915001-25993351.png",
    "revision": "25993351791ff85933ebca777541c146"
  },
  {
    "url": "_saber/images/20200915001-36c32b29.png",
    "revision": "36c32b2936035cdfe9c11345c9aee0f9"
  },
  {
    "url": "_saber/images/20200915001-e735f75e.png",
    "revision": "e735f75ed315615e9a981422f06329c8"
  },
  {
    "url": "_saber/images/20201013001-6c802638.png",
    "revision": "6c8026380738c77fa9b0f824aefeee0f"
  },
  {
    "url": "_saber/images/20201013001-a3dac102.png",
    "revision": "a3dac102b13e5e5e6d8258d963ae462b"
  },
  {
    "url": "_saber/images/20201013001-abed2dda.png",
    "revision": "abed2dda1577668e84c38117703a468e"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-10bc82e4.jpg",
    "revision": "10bc82e41df9d03a6437fa471e696903"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-4cfcfd06.jpg",
    "revision": "4cfcfd063d2d0b2bb7113df3e5310838"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-aa2661dd.jpg",
    "revision": "aa2661dd4dc1b5521d38f5e1a733c838"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-289f5488.png",
    "revision": "289f54887a269ae6aa94372a73020815"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-6fc862d6.png",
    "revision": "6fc862d651a59a267c4b509d2caf7dcd"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-84053503.png",
    "revision": "840535039165009ceb37655d447d9f23"
  },
  {
    "url": "_saber/images/home-page-1-13b7188f.jpg",
    "revision": "13b7188fd1bbeb0cf9731434e8ef657e"
  },
  {
    "url": "_saber/images/home-page-1-19fb3c5d.jpg",
    "revision": "19fb3c5d128b13002286918841c01811"
  },
  {
    "url": "_saber/images/home-page-1-4bc8b7a1.jpg",
    "revision": "4bc8b7a1e36d18aaaaa13ca5b53afde4"
  },
  {
    "url": "_saber/js/404-page.2b1e64bd.js",
    "revision": "8d0560d5cc527b393d36412bb6cfabe2"
  },
  {
    "url": "_saber/js/client.6e4e5dfe.js",
    "revision": "41222116c2285873c414a6625e6d8a0c"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23--my-whole-life-md.ce52c84d.js",
    "revision": "6f8db4dca1af8e2dc1032a8f08369781"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.b28aaad1.js",
    "revision": "cc02ca1b4857523d01c2e29963ef1061"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.a1c4ab62.js",
    "revision": "a76bb0636e18337dcffc72af1d6beaec"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.2ced8c52.js",
    "revision": "9a02365179e5a6cc420252c0549b3047"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.374db563.js",
    "revision": "fae0666ee94dbcb8d49c0ddf424ecbf4"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.fe1e4f24.js",
    "revision": "2bf0f65ad783be5ef54dda5d2372b984"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.e3fc9690.js",
    "revision": "347c85dd3672d66cf7ea9213c83f4556"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.cb525f08.js",
    "revision": "d8b539c23c62c719c9dbbc91ce375b1a"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.aa2d2b80.js",
    "revision": "b5b6e19849c9db522d69b059fae823f0"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.dce76c18.js",
    "revision": "a9afd8325b341dcb03648a7799e07f29"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.7d6355cc.js",
    "revision": "8fba5a95962b5a704116a69a237805ac"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.b84c3b69.js",
    "revision": "578a9a038f560b738d27b704e7ca5303"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.06c274d4.js",
    "revision": "9aae88fba0509733101eafe1abc8b0cd"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.b442d777.js",
    "revision": "f337ce8ce6e02707125be80ba2934f1c"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.56f8addf.js",
    "revision": "1341eb42729cc39d56b8eb121400cb3b"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.91f6e97e.js",
    "revision": "169e7bac96278939919769a48447552c"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.452ceae9.js",
    "revision": "103dda64482a1236db7cb9d564e076d8"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.cbbd1d7b.js",
    "revision": "1c6507ef2906fcc94fae9f751dace60a"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.25e40759.js",
    "revision": "a9b5b8da6d83ea433ab562eaabf22d3f"
  },
  {
    "url": "_saber/js/page--about-md.74beba8a.js",
    "revision": "e90e48fc36ef1a79c214f0cdbfa32ed1"
  },
  {
    "url": "_saber/js/page--blog-index-md.9fb7798d.js",
    "revision": "1a2a36112f078e134b714e5fb63232b7"
  },
  {
    "url": "_saber/js/page--guestbook-md.08b9a112.js",
    "revision": "87e78b0836a55089d0c95eb171596ecf"
  },
  {
    "url": "_saber/js/page--index-md.c6d41ca6.js",
    "revision": "2c1b6f93f73c8ce8f4b97c2b0da1394c"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.ac0d4012.js",
    "revision": "9512167018393dfe9e5aefcab64ea8b1"
  },
  {
    "url": "_saber/js/page--internal_blog__category__uncategorized.b103f2ed.js",
    "revision": "503dfc6efab1ea544a2a6ed747946242"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.c2084c4f.js",
    "revision": "f2d3fd1a0ca9cb2f2033f741b5bf9823"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.d1c45fdb.js",
    "revision": "7f5b0be04937927e8d9b30496dd779af"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.f8f3fe7d.js",
    "revision": "f8c376a5a4d5527da16fc819a9b3fa43"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.4af25190.js",
    "revision": "a5a40cbe2814c1062d7e4cbdcfc7ec4d"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.509c9c1d.js",
    "revision": "341789cadc7eea920eb974229949c948"
  },
  {
    "url": "_saber/js/page--running-md.f8b0ad6a.js",
    "revision": "f281172274c6958cf5f67d12b6aa26ae"
  },
  {
    "url": "_saber/js/styles.ef66a58e.js",
    "revision": "1bd1f22179078d2af51b4bd3bd605f2a"
  },
  {
    "url": "404.html",
    "revision": "2045c4b60e2500dc9fe2c60a4935e91a"
  },
  {
    "url": "about/index.html",
    "revision": "d2862284346cf7f66374b827c9fcafea"
  },
  {
    "url": "blog/2016/09/ my-whole-life/index.html",
    "revision": "c060c8f7cd99bfe7e24e645064df4e94"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "14613feed01bd1ba764c1cd3be2d05e6"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "5c0841a19093de8488113ca2d780ef8b"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "58ac5963daff459738bed1a45358b8c4"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "f1ef17d800b35aff275621ce0e60e3bf"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "f672a79d26a124d9bfcaf15f30db0de7"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "27360cf806b6e5fe934dfe36d2e1946f"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "55ce4394815343cefe5e083b1603ec4d"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "ba3868efbf7906ecb0bf83d554a38671"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "7881f9abd6ac48df4296b601de3a4b6c"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "08bb481f47679b3b9b3c4930a49792ad"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "9e1795f273ddb35740b599a1e9c722f1"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "9f2a70207a3d2613d8d0b9dd0e693b7d"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "0ad77600c2c64da5941c5bd44705425a"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "1e056301719991c0b4bc7170d7d133a4"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "cdb94e74355d8e899d2cea3329a4cb63"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "52f76c7660dfec759b1c8c40cc5b6cfc"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "8a22c680d351251e2f17503dc0bdc53b"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "a274b3b641bad53ca4ee0d98dfa1d01a"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "960966a48d46052195651782a880a4ee"
  },
  {
    "url": "blog/category/uncategorized/index.html",
    "revision": "31f26a4a28cccfa75693b5d09f2af3a9"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "fef0fd9f8283a768bc6c649ebcd992ea"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "2fbe14a00c84eff352228c5aa64a7e97"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "e3966794fc80c8def8df6a09d47d6e3c"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "37d76a9a349008df9c9536d836676d56"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "f9124442f83bf30e9bbe684ac9868fd4"
  },
  {
    "url": "blog/index.html",
    "revision": "8d66bea3b4b62fb6572e3fdca835fff6"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "81114e515b29dd501bdf55adddb39397"
  },
  {
    "url": "guestbook/index.html",
    "revision": "d5a994664c7142c4eb1cc3ccba0ca211"
  },
  {
    "url": "index.html",
    "revision": "8da40b6f11aa59aabf8becf08eb32d1a"
  },
  {
    "url": "page/2/index.html",
    "revision": "8aee6edd807768e2263e413a6d88d941"
  },
  {
    "url": "running/index.html",
    "revision": "e8691e688367f6bf69d0643b6a3dad79"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
