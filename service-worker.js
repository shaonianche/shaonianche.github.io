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
    "url": "_saber/css/styles.206135c9.chunk.css",
    "revision": "98a07807eb0772be2d3dba1e839ca5d6"
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
    "url": "_saber/images/2021-01-04-1-08fbc4b3.jpg",
    "revision": "08fbc4b378dafb1dd4c5a36c3e5c5895"
  },
  {
    "url": "_saber/images/2021-01-04-1-57725f22.jpg",
    "revision": "57725f227c28823f61d24870fc1d614a"
  },
  {
    "url": "_saber/images/2021-01-04-1-a7d4116c.jpg",
    "revision": "a7d4116c65046e5a448b63299d7d7564"
  },
  {
    "url": "_saber/images/2021-01-04-de6a2f43.jpg",
    "revision": "de6a2f43de25b89c54e742b116ef0373"
  },
  {
    "url": "_saber/images/2021-01-28-637678a1.jpg",
    "revision": "637678a1af3b50100c26107de7ab46ec"
  },
  {
    "url": "_saber/images/2021-01-28-9823a8d0.jpg",
    "revision": "9823a8d00a3757582edfda074b1fc7c9"
  },
  {
    "url": "_saber/images/2021-01-28-d3bb4950.jpg",
    "revision": "d3bb495018dbe6c48dc4cdab5834bd28"
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
    "url": "_saber/js/404-page.f59e98f2.js",
    "revision": "705ad48f74b045d4faca9b5793f5c7e2"
  },
  {
    "url": "_saber/js/client.ef16a9c7.js",
    "revision": "10b58bbb36a750555db5fb0feb639309"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23--my-whole-life-md.251a1563.js",
    "revision": "ac220e88da7b1226a1453301cbb07160"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.430d539a.js",
    "revision": "1a104b56aca0c122aff6a33ce6d8d513"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.e1929465.js",
    "revision": "7c5fa39c80727cf0936d60e22f88577b"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.e58178be.js",
    "revision": "a7589ccb7580da31e19516a0fff71b1b"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.d2476599.js",
    "revision": "35706a363e818aa0ff631ee1f6e44f49"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.290244bb.js",
    "revision": "011df430493662d1d9092be7194f7024"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.4d4e3dd6.js",
    "revision": "97d7e3c22bffe4816481d54cdc13f63a"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.1b55e3ec.js",
    "revision": "080a554ae4c44e588f294e780791b687"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.65b45908.js",
    "revision": "d2b98ea3511bba02e3920df059ef7b47"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.db6ac067.js",
    "revision": "d2bd63c729d0a04e75ae502d446ca2d2"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.3b6a1472.js",
    "revision": "2797e3a62e52dd4fcee382c62bffa19a"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.a7151b9b.js",
    "revision": "9f944d1fa27a7d6416eff507668c116f"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.b75620ef.js",
    "revision": "46a919fb9788bc9feab253d954c7205d"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.ad41cfde.js",
    "revision": "716633eeec67d6a63c325e97f53100ef"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.8bec4ab4.js",
    "revision": "e86e9bbc83c6dd4707bc7bd5f9604ea7"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.fa47afd9.js",
    "revision": "a280c6c4cec7dd0b8fa8c2e39fba0ada"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.2f54ba20.js",
    "revision": "3c5b318e6c32b5d20299c66b04baf72d"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.d260be24.js",
    "revision": "e46735e9f420f74004df513c7c9bfd02"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.3174ae39.js",
    "revision": "fcafeb4f2970adef9204e4776cf809e8"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.7a94b9f8.js",
    "revision": "8c40fbac9c87817fe5204f454e02aad9"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.b40f3b86.js",
    "revision": "635940ef69d14d420a266d7116cb03a3"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-29-XuZhiyuan-conversation-with-XiangBiao-md.edd63b84.js",
    "revision": "41dc21f9416b0e4ab8ff33fba007eff2"
  },
  {
    "url": "_saber/js/page--about-md.92214156.js",
    "revision": "863d8ce7f77adc7fca1bb339f5c4c311"
  },
  {
    "url": "_saber/js/page--blog-index-md.855b65dd.js",
    "revision": "c09c57c617b30869d76769f0b703db95"
  },
  {
    "url": "_saber/js/page--guestbook-md.448c3ff0.js",
    "revision": "a9ff5e5296ad66c374aaef220b020dd0"
  },
  {
    "url": "_saber/js/page--index-md.94f05e9f.js",
    "revision": "23a1944c0f9833c4254d572ff3f289e3"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv-科技.e1b3129b.js",
    "revision": "8e36f13ff58cd8b872f69cd80b54cd80"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.da1e110b.js",
    "revision": "92a3c51365907133288313b97b8d3c1e"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.9068829f.js",
    "revision": "723000be4699f1dfcd7730b9bbac4bd7"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.bbea661f.js",
    "revision": "1fbfe823be22e94f53c42ac2d225f86f"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.fa4bfe0f.js",
    "revision": "6da1ec6dc6de48a3952b27700ff6a456"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.b441afd3.js",
    "revision": "fcd1c72d01cdbcf94a9a81bdb1e6e575"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.bcbf59ad.js",
    "revision": "592b79792599c191e244fe80d8bb61c7"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.1c656bd6.js",
    "revision": "36ca4c22db615b94c6904a5e835ad698"
  },
  {
    "url": "_saber/js/page--running-md.c72c4aa6.js",
    "revision": "a6285ea640006cee3a51e1ab4ed007db"
  },
  {
    "url": "_saber/js/styles.206135c9.js",
    "revision": "35e2afa4537015a09bfcc2ef4cc5569d"
  },
  {
    "url": "404.html",
    "revision": "af0b7a81cfe34e841eeb746e28a9e1d9"
  },
  {
    "url": "about/index.html",
    "revision": "218b3245f8993760871b7f7038d284c9"
  },
  {
    "url": "blog/2016/09/ my-whole-life/index.html",
    "revision": "7afa33b66afab96384abf5cb73199f2f"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "17d0f56ad6bb5876a3e024abe8b1bfbe"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "81479cd3e9329fca2388738436d4d94b"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "45c5be17d666181541d4940525e3b2e8"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "31b24347859d45b2266ea5d789a355ca"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "de97dc371967f122af99f7edc296f188"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "b11292eff24aefe443f7f0d899d9dab7"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "bb1365ef11745471ce1a2dcec5bb2d4d"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "b3620ad28b035ab7764fd3f9bb793c75"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "a5f41d67139ae3f2c16c625aafde87ad"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "fc748f84942d9010d72b90c59e7f58d6"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "6c6a8a1ec3a46f629289e0fc20de2d3c"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "1bf2c8ccde1f7194bf68971941f9fbb8"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "b94f29f1e1f50978b33790787081067f"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "21b785907ed04abd1998be9439307ef0"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "a494333adaa0bbd2be7c44a1f68e2b9c"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "7670e0bc0e77b87c82390c7c037e6fe9"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "29b605bf57bc9780e55d802093d4d46d"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "28abd74f170e1c0822384e1f4540080b"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "46d82c316f7bbcbf4da65581308385c4"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "4b01f318353ab6e40d39bfe66b42c5b6"
  },
  {
    "url": "blog/2021/01/XuZhiyuan-conversation-with-XiangBiao/index.html",
    "revision": "7d446c0202527fb8a36c40d1c167eed9"
  },
  {
    "url": "blog/category/googletv-科技/index.html",
    "revision": "907bed7ac7db13be9fe726bccea021ba"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "13ae84aea8208d57e09c584d7348a74a"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "1386b07734d269c2a08741dc5a9ac752"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "367ae817b3aadeeb69664ce670403f9b"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "bb2457fcd418878f0913be029977bcd6"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "55740557d2ef9b89b3fd975c2b3abac2"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "aacb91670e0d0a1ea4c3fb61a463fc62"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "841fc478558f3d4ffd609b172da8c270"
  },
  {
    "url": "blog/index.html",
    "revision": "685e3ad8252b1ce14644ba2d58277f8e"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "d0be6fdd85ec56be4f5d030f63e330a3"
  },
  {
    "url": "guestbook/index.html",
    "revision": "7dca9c48af1d344a7ebae841a812633e"
  },
  {
    "url": "index.html",
    "revision": "8f2604d780777a3583167361acd60f80"
  },
  {
    "url": "page/2/index.html",
    "revision": "59de2e0006896e60f445ffc54836dfa5"
  },
  {
    "url": "running/index.html",
    "revision": "c37de2418acdd7c52597af4d4b9670fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
