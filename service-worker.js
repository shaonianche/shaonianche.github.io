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
    "url": "_saber/css/styles.61731265.chunk.css",
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
    "url": "_saber/js/404-page.7bad1ebd.js",
    "revision": "54b8970b9c408ced424642c767dd9a86"
  },
  {
    "url": "_saber/js/client.0c97698e.js",
    "revision": "3da7f4389560c3c200bf65d53c057b85"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23--my-whole-life-md.577c05e4.js",
    "revision": "22a2d22a2ffae48f88e6be679dc8e957"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.7e35ba99.js",
    "revision": "ff76f6c38d79f78cc8fb82cb90b337c0"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.5db3cccd.js",
    "revision": "17312b62d246339f90cda53b1eebcc3d"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.fc0df1cb.js",
    "revision": "207359f779235521d1012c6e1f1016f2"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.5d6b7ed6.js",
    "revision": "e7337df55066c2c7c47f2c6358d61a0a"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.206927d5.js",
    "revision": "e036e80690419312087f9189dabc33b3"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.0df5912c.js",
    "revision": "997ba8b3db352fa3b141f16b7f1c1e12"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.1625b860.js",
    "revision": "cc0c79cad04ff0d3389fe151b1aa2f94"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.78268e51.js",
    "revision": "31bb295922619dedde432c7c4cfa63f2"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.a9ebb679.js",
    "revision": "6b721675d0807bdd773d5aa3a0f0ec07"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.c972070e.js",
    "revision": "b9427cb90470679b965a2468708506a1"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.69d0c95d.js",
    "revision": "970e53570b0865bcc332cab87036d991"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.3c9816a8.js",
    "revision": "905de13d9fd40ee99176d71a3cf95934"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.9fef9aa4.js",
    "revision": "48cab2b10255b3030bee1cab1b0e0634"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.d7709e98.js",
    "revision": "b9a17f0c480d75bf604733c19b512021"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.bb87d26b.js",
    "revision": "36bc7d80e0b86a923b5f9c5dc21988d1"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.1c63106e.js",
    "revision": "27107e4ac41d624e6e61ddbdaac218ec"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.08971c00.js",
    "revision": "6d07d6006f8d9ffbce904cbc5392e33d"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.e9712235.js",
    "revision": "506351f74d72134d644df868ce28d156"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.c26b163e.js",
    "revision": "5f25280cf58bd4e86b69015b10c39f82"
  },
  {
    "url": "_saber/js/page--about-md.9f8dcbac.js",
    "revision": "87e5343f6ee6cae002d95f49d8b9074e"
  },
  {
    "url": "_saber/js/page--blog-index-md.a3e6ad9a.js",
    "revision": "dfbbed255450a09c2edab7b701c0234f"
  },
  {
    "url": "_saber/js/page--guestbook-md.9d233879.js",
    "revision": "287a766c5de8da48a437421b9aaa62db"
  },
  {
    "url": "_saber/js/page--index-md.f2023d46.js",
    "revision": "c7523233c48485e25cd6fca8cee614a6"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.05306d50.js",
    "revision": "48da08dd0a556a89d33f815775d4a341"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.c7bf4423.js",
    "revision": "48ce759879b12ada6c214dff36f598d6"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.38100154.js",
    "revision": "703e99905ce758bcb0bb4bc63733ea6e"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.6c9aa87d.js",
    "revision": "6d473e6dbb53223fee525c1374630cf6"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.d258107f.js",
    "revision": "867b55a52a6398dbd1859debc8e5d2bc"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.b4eb7dc0.js",
    "revision": "668f02bfc8453efeee1689f80189c6c9"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.988840d4.js",
    "revision": "95e5b0b9b70303e3741960ded2952d9f"
  },
  {
    "url": "_saber/js/page--running-md.e2a77665.js",
    "revision": "d42b92de0d58beb7bdc27fc90aeb1c43"
  },
  {
    "url": "_saber/js/styles.61731265.js",
    "revision": "61b1014766e7d583db5a6e42189e396e"
  },
  {
    "url": "404.html",
    "revision": "07c316fa356d5b7587c4e0cd27025164"
  },
  {
    "url": "about/index.html",
    "revision": "c2903d00c9eb00c120793c969ce24c8c"
  },
  {
    "url": "blog/2016/09/ my-whole-life/index.html",
    "revision": "004902eb60b65ec562104ebb3e878410"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "a9711cd09e07f191e2a69c072b84119d"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "722266a7e65a710dcb952adadaa0e8b5"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "9fb28c98eeebf7ff3271f9f0ef8030a1"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "326dec70d0b02bf2e42f7faf2756edf8"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "aac50092e73ec13c4fa5c6f4efe8325e"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "e72141b65e00e89a8a97368628e5c963"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "358f52d11bc891c7e43937a2932b0552"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "01ecee3727c04e600f82c0e2facfbce7"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "f66aea0194a68c978c0a351f6c28d97d"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "ba7df80c2edb76e778cb41688bb4a493"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "b52a4791f31e43eb5617d9dd60c0937f"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "318db2d917e2e6fb1f902abad93d44f0"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "21a10f273953126d712b8a7946ac7234"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "d5d93ccd3fbf5ce1da751d61a22f6ac5"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "69f42145f688219d281ffc1b7805eea7"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "6451b834fc5d7f4528635dadf416f8bd"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "f75d889e6a26340f41cded2b4cfe5918"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "ba91bbc0819ac8e195f6d0d062f7a14a"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "b91b73eadcdc2e811c78cfb5eddb1071"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "08f57fd1500c032733fcd0ce2ae5ca90"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "6f352753b8a6eb328ae5811a8a59fc2f"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "1dc01f96dcb600e4890b766d3e90f4f7"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "740732662ff38a750756559c4cba48a8"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "7740e8529e0d31e3b716129f60a964d8"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "f1588692c2655a5ab5c1f0abf7671fd0"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "ec19a168b51881420bab9ca8f42697ea"
  },
  {
    "url": "blog/index.html",
    "revision": "e3ef1a395b6d84fa475293f38477b835"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "787f8dbb87e6927ba080f0a2c5158d72"
  },
  {
    "url": "guestbook/index.html",
    "revision": "d6e6f837e8e1e54e8485c90f36cdd53d"
  },
  {
    "url": "index.html",
    "revision": "4564711f5436962cd4f70a3b5a6f538b"
  },
  {
    "url": "page/2/index.html",
    "revision": "4449adfe9a76c160796485a4514bea9c"
  },
  {
    "url": "running/index.html",
    "revision": "c06c237253179b830a103db6848184d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
