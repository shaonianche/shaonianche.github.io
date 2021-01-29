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
    "url": "_saber/images/2021-01-29-72d1a429.jpg",
    "revision": "72d1a429ce274e0391840ed4cfff4261"
  },
  {
    "url": "_saber/images/2021-01-29-7da85557.jpg",
    "revision": "7da85557d0e1881e93c09d917cfbde5e"
  },
  {
    "url": "_saber/images/2021-01-29-a2b23cea.jpg",
    "revision": "a2b23cea5cc687e62f0a2ad23248bcb0"
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
    "url": "_saber/js/404-page.f8f7358a.js",
    "revision": "614162ec8ff2124f3186328705a2338a"
  },
  {
    "url": "_saber/js/client.ad6b1f03.js",
    "revision": "be0f96ab6516874e3241b3068f3095c5"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23--my-whole-life-md.cff89023.js",
    "revision": "8e61b3be9072a98894a54f587ebe6603"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.3b4399f3.js",
    "revision": "bc98ee3eebc9bfe82aa6bc1cadb8bf7d"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.43fa6637.js",
    "revision": "03c74bb24bcf8d00705d1e74b25558b1"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.91a25e27.js",
    "revision": "e78b8c09121528661d476ca8200a165d"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.7288fb80.js",
    "revision": "fe78389be2c395a32fa23c3755f0ba8e"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.4b9748ef.js",
    "revision": "787dfc0837107e81948a8b3a62ddae78"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.3d1b2d6d.js",
    "revision": "32ba94e3b5d298a20eedbf6c895b9cf9"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.e38d5eaf.js",
    "revision": "749fc597a6b22755a28eff95a85f3ebb"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.e3aae100.js",
    "revision": "fc188383b4534b2551b17f6de98ee165"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.324eb8c2.js",
    "revision": "52db758e4cf32c18530120769ee967fc"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.e62902dc.js",
    "revision": "751d5f4fec0f2eb8bb48a3e11f8f6d17"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.8e943f5c.js",
    "revision": "e26be3d5cffc1dd7666f48a2311d6b59"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.d634135c.js",
    "revision": "eca79a1ee4b2c2b12cb2068e8c7aacc1"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.669a4e6f.js",
    "revision": "f8ef6218961b7cd8f17dac5ffd24890c"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.92914eb0.js",
    "revision": "35ae56a2a9f8eccb9060accd9107fcee"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.7efc88b4.js",
    "revision": "dae79f719eb2ed46ea7413b3dd2aca1f"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.dd304ad8.js",
    "revision": "53ca5fb6438199d0577570e8ca43abe9"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.d4cab6ac.js",
    "revision": "b2ca5ca040a3e4420ee43da50d6c9e89"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.e8c9d2fa.js",
    "revision": "f035816346ac00d2ec3dc4cfe5a7f6bd"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.f0043028.js",
    "revision": "2d989291339d20bc21c5dafe3702b7e0"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.54c44bc8.js",
    "revision": "3377422aa2ba0425a2e0b05bd83cd7d7"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-29-XuZhiyuan-conversation-with-XiangBiao-md.d04cf874.js",
    "revision": "244d20a3622ef6028b69f8018cd0fa72"
  },
  {
    "url": "_saber/js/page--about-md.85367905.js",
    "revision": "460ef9e27006cd39222c400bc2b2a0e2"
  },
  {
    "url": "_saber/js/page--blog-index-md.630426bd.js",
    "revision": "606031e7ce104d4c6b11644a27565a3b"
  },
  {
    "url": "_saber/js/page--guestbook-md.55cc8e7a.js",
    "revision": "48142d882907e4c24480edaf58039e04"
  },
  {
    "url": "_saber/js/page--index-md.b7732904.js",
    "revision": "1752c9865d9f1b33c75f62a0d980fe00"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv-科技.690de14c.js",
    "revision": "9e696d406a21dbce44db01abd2dd9b94"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.2e75fd7f.js",
    "revision": "98589fedf525c777f02c52a3d2f35548"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.36302491.js",
    "revision": "27c3ed1bb2fb4169b6cea13b58380bcc"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.8ed859fc.js",
    "revision": "aad48eed5909a87539ff3102f65d0d1c"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.0f4077fa.js",
    "revision": "fb344f07fe9849305b132ad1040001d3"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.cdeacfb6.js",
    "revision": "89136b9df55cb3ee796846863d7b4285"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.731e6cf8.js",
    "revision": "d70ef536730d871c66af32d92f3bee0f"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.b465bb52.js",
    "revision": "74fcfe9d34e4b9ab7bd9ab1878fe3f02"
  },
  {
    "url": "_saber/js/page--running-md.d8f2ff3e.js",
    "revision": "d27f1313728fcd609fe3c8a32e16e633"
  },
  {
    "url": "_saber/js/styles.206135c9.js",
    "revision": "35e2afa4537015a09bfcc2ef4cc5569d"
  },
  {
    "url": "404.html",
    "revision": "418e123019b239fe239dfd12518de235"
  },
  {
    "url": "about/index.html",
    "revision": "af191ced24551f0d285b1c9b89ff978f"
  },
  {
    "url": "blog/2016/09/ my-whole-life/index.html",
    "revision": "7ef8d3d5a26ed6f6864a58f7b3acd1da"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "230bac82de319350d3603673b9b5df0a"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "56afbc015b4986e4733e3d49d64ab31b"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "5d403211fe12b7b6a616c71cc0daac91"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "b6c8d737c28a895b8c3b29d900615709"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "bb260a820c9554d26b0f7f270dffe678"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "505bf474829e060ae782389e84eb4db7"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "604763010d5cf5091154d89217e0dd0a"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "a6a518d9bf45cefe0262011da6491569"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "9b1cce6944ee5ba74d313f17edc420a4"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "964d51e78ed09df004b92f12baf40256"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "f0558987fe33ad8b70860967e43c4286"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "4f3348b6ecdbe3a200c82057c329b563"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "41362793b71130cc8377a6c131440af9"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "60853a7cdb7b45803da07b528ed60ca6"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "3b7733da0e6f27885341eb144fba7048"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "134188e8c3a757423919279508e27555"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "9496f6295f0aa7bf5bb6e5c097e74c1f"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "637b18278310d4908187e3a324dc542b"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "9e5e2b6b30f7dec2dd31d6854d36c32b"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "d23255b3ec1925f334fbf36edbe5ce79"
  },
  {
    "url": "blog/2021/01/XuZhiyuan-conversation-with-XiangBiao/index.html",
    "revision": "a39cf4e6ab4b8001d610eb4b56d9cb9c"
  },
  {
    "url": "blog/category/googletv-科技/index.html",
    "revision": "807a7a4433c4c60160d8412200a567c0"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "51d73db986c11fd4849c0fb065b7fd1b"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "0980c53d533cab1f3060845e22eb5a6c"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "a4ce5010f0903be735acade3e31b6d1f"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "dbb0408a1135c241058e11898f7d642c"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "4539a3f5f1daab28366291c968c4280a"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "6237f2d008d0fa76cda44cec5736b5c1"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "cd0d9888efce5e96cdcba83e491cadb1"
  },
  {
    "url": "blog/index.html",
    "revision": "c1e611e0369f527954395dde8dee7c24"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "a9a57d03fa9be1b14c806b1f2a7f12f6"
  },
  {
    "url": "guestbook/index.html",
    "revision": "6c24eb6524f136c349f5d613810efad8"
  },
  {
    "url": "index.html",
    "revision": "f5d3a4a87d1984e6a8b7046764d0e826"
  },
  {
    "url": "page/2/index.html",
    "revision": "01d5e01f901f7bbc05a5440a35d1437c"
  },
  {
    "url": "running/index.html",
    "revision": "21cfa17b48c27f7032857169430eab19"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
