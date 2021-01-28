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
    "url": "_saber/css/styles.2dcb7321.chunk.css",
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
    "url": "_saber/js/404-page.6c5d4e0a.js",
    "revision": "0158d64f61a9034fdf603019e50d1092"
  },
  {
    "url": "_saber/js/client.74efedab.js",
    "revision": "5554ec72fb514954141a572851f6551c"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23--my-whole-life-md.6c97f393.js",
    "revision": "9905dd38a5e11109315790aecfe31ac7"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.85c35851.js",
    "revision": "7ad22ba625e9ed32c41e2f004d02d8b6"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.db35ea69.js",
    "revision": "6b31d9c42f47435a297bfa68e1a5a02e"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.19aa57c4.js",
    "revision": "8cf7ce4c754db31f0cc6709cbf63d288"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.f99be1c2.js",
    "revision": "f2b9f4f865d45bdcd101c237c908326a"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.8a623f19.js",
    "revision": "e308cff09b0238f92d1b11ebcccd83bf"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.54f991b3.js",
    "revision": "9d03b9e15fac19296da1c490c01ccfee"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.7c3c54b0.js",
    "revision": "bc1fcdf3655b38270ded22b2f7f8cf66"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.027a8eed.js",
    "revision": "3a2c1fd36af40f7d323c479be3956b2e"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.86e7828a.js",
    "revision": "3c3a7811bc42d6c3c75d837f0e1d23e9"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.d8a4a3a7.js",
    "revision": "ee92d4d84d6c43903809e68f28129b2f"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.be46f0dd.js",
    "revision": "318360d46e8b2a3c92f98b22882d6a99"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.845759a1.js",
    "revision": "f8b50d0778d8d9d600db4a9b5e281c9f"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.4e7e5df0.js",
    "revision": "23f35a7f28b8fefcc34e3c9ea3619d31"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.c0fe510e.js",
    "revision": "fb69a1b77564d3ee55449eb4736bc088"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.f3bedc98.js",
    "revision": "e0b056a4cfc500595eac78b99dcb9be6"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.373a1c6e.js",
    "revision": "a7ff59d18a974f43229f60d73980e616"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.8a8684f3.js",
    "revision": "731c218cb4b2737a1131212e161d27b3"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.3476381e.js",
    "revision": "2cfb5ba00a7ea7dfa36baa9ef06e8a76"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.9aadcc6f.js",
    "revision": "3b75acae7dbdc9906d5486dc233628b3"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.935f42a1.js",
    "revision": "669c071cf8aecb2ffa6b9c58dc30106d"
  },
  {
    "url": "_saber/js/page--about-md.73a5ff72.js",
    "revision": "25d053326d388bc29ced122203445ecd"
  },
  {
    "url": "_saber/js/page--blog-index-md.5623665d.js",
    "revision": "9bc3450086806e059ff229677f6e32cf"
  },
  {
    "url": "_saber/js/page--guestbook-md.07177d21.js",
    "revision": "861c36cdf16312592b1805b207f8f562"
  },
  {
    "url": "_saber/js/page--index-md.6e47f2a8.js",
    "revision": "5caaa138a5f4cccc91e20b8648b95158"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv-科技.9bdcb615.js",
    "revision": "8f29effb4bf0957b19d2d317597b76b1"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.eb71cb15.js",
    "revision": "b56cbe18f0e423b9f6924bf8808b4f84"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.678a4350.js",
    "revision": "a663a58dd92d0a526b9e0613269b2a58"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.687e405a.js",
    "revision": "10eac660be4e46f81f3b9e44daa329a6"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.a4ee0667.js",
    "revision": "936ca7e243aa6c6668f804aa7680b6f5"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.ef921480.js",
    "revision": "0858e82a5bd0780b6d31be7bb95f6115"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.0563f0e3.js",
    "revision": "61a4893c4cf045e26ff7805e2523861c"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.83f26157.js",
    "revision": "35105db639dbdc457e0a148087924c83"
  },
  {
    "url": "_saber/js/page--running-md.ae886437.js",
    "revision": "e493574c462a43ccce7a20adc2520a5e"
  },
  {
    "url": "_saber/js/styles.2dcb7321.js",
    "revision": "1b26df7bc4ba1e7274ffe7556e0d9748"
  },
  {
    "url": "404.html",
    "revision": "881423b39c47788988e2dd067d0034dc"
  },
  {
    "url": "about/index.html",
    "revision": "d7ca1d50159a0826ce5fa9dcbb8c83ba"
  },
  {
    "url": "blog/2016/09/ my-whole-life/index.html",
    "revision": "34ef24bf28561dbd246f05233b05a0d6"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "7a8b244ed3f479157a474db2363d7e32"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "a186263c6a6ea4508c59bbc551f0952b"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "5e7f2a8e0070174334de7adb5ce5b517"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "821e3cb5a97aab80901d64d1f021238d"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "792253ce92c3dc5a8b972e7d35552cf9"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "b4f67c963f177abfb128954af216dccf"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "89711b85a579a3c413d260241bc69be1"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "7c25a1d43bbb6c847cdd5c13c0d9cd12"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "7e073c951088504fe4a977941b404a28"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "d5106216e729673e37ae16269f2ffa4f"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "6391594f84d9d30cda911fa596a59a36"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "34d5ce21efec9591d208566cd174aa60"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "30e8ad80ed649b9a8f98ef963fe57868"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "d84a072e23ec240e616261d230dcd263"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "1473d4ee4231c5444ed829e674d71714"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "c52801ea5c24e145afb10f8686ebae0d"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "338da1a9033f34373bedb2bffa373ea9"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "0800c7f34c72bef68a498f57f40e6991"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "c256f3cc578104b17ce5bb853321fac7"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "c71346902768bde7ff7654a014e6bf3f"
  },
  {
    "url": "blog/category/googletv-科技/index.html",
    "revision": "b8efc23c805bb455016d22e45d7b7105"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "1be43674dfc6b92e839df21ec50940a7"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "ec5fdceab83efbe108542698ab61fb06"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "44415a396c3b92e6c5591e31015d4168"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "84127615aa848b161171348db1810078"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "1460198de35a2dbe3755803237464c3b"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "179c40da09be7ae7d1fda523de5ead5c"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "d521a5c9002f166dd9814004cf2abcd2"
  },
  {
    "url": "blog/index.html",
    "revision": "c3a1698786e4829d85d7c9b8b6401f55"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "5c1d097972a23479ed1fdceac248d51b"
  },
  {
    "url": "guestbook/index.html",
    "revision": "46ad9fed3aa0484db46e2920a6e4461d"
  },
  {
    "url": "index.html",
    "revision": "81a52f65474b11d92dd39dc415567d40"
  },
  {
    "url": "page/2/index.html",
    "revision": "137a0e93bfce86d84de1e5e1177d4088"
  },
  {
    "url": "running/index.html",
    "revision": "b3b4fdef1ba9cba4e27cce3090563475"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
