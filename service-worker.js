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
    "url": "_saber/images/20200906001-293e5377.jpg",
    "revision": "8335d609a0c6483ebb0a4be148d2bee8"
  },
  {
    "url": "_saber/images/20200906001-749eb1be.jpg",
    "revision": "1b3465b2e2b29a25ffbcc6df31e3415d"
  },
  {
    "url": "_saber/images/20200906001-fa8ca9a2.jpg",
    "revision": "24826399f97f17f23f2728ccafa59a32"
  },
  {
    "url": "_saber/images/20200906002-57124853.jpg",
    "revision": "bbfdc0a2f8e083675b872627c6d51fe2"
  },
  {
    "url": "_saber/images/20200906002-9eb86b1a.jpg",
    "revision": "c3eab63f0121d312ec004b36dfe288e8"
  },
  {
    "url": "_saber/images/20200906002-c0a0b491.jpg",
    "revision": "783ed68b2860bd41807c793bd18793fe"
  },
  {
    "url": "_saber/images/20200906003-75e1059c.jpg",
    "revision": "878650ea40b1dd60cbdc925a66b396cf"
  },
  {
    "url": "_saber/images/20200906003-8130ddbb.jpg",
    "revision": "a88ee61aa28f31bb827336f91a55183b"
  },
  {
    "url": "_saber/images/20200906003-c1bdc5cd.jpg",
    "revision": "635007c3615c7e0ab5791f7b59901641"
  },
  {
    "url": "_saber/images/20200906004-3bc1a067.jpg",
    "revision": "46eabefc006d51ab82df4ca9f2365474"
  },
  {
    "url": "_saber/images/20200906004-7ab921f5.jpg",
    "revision": "e818748759e7aba7232031b873f3bfff"
  },
  {
    "url": "_saber/images/20200906004-c7c7e2e3.jpg",
    "revision": "dc4c8f0d8b013399fa3827af7d2d69bd"
  },
  {
    "url": "_saber/images/20200906005-1-28cb2d68.jpg",
    "revision": "060a5ee18bd0478eca992ed2ee82d470"
  },
  {
    "url": "_saber/images/20200906005-1-99a7f7e3.jpg",
    "revision": "a05250414aa2738cdb9c3d774db939ed"
  },
  {
    "url": "_saber/images/20200906005-1-c40828e1.jpg",
    "revision": "22ccc50ac6e720683690b554134578e7"
  },
  {
    "url": "_saber/images/20200906005-1ad49911.jpg",
    "revision": "305ba24824042e42ee7b8c7e7935cc95"
  },
  {
    "url": "_saber/images/20200906005-72eaae25.jpg",
    "revision": "2bffb61bbb689df62181ce2a6d38b411"
  },
  {
    "url": "_saber/images/20200906006-1-783f7ec6.jpg",
    "revision": "ad79a2b4469422087e729fd539cb36cf"
  },
  {
    "url": "_saber/images/20200906006-1-86e64ff7.jpg",
    "revision": "3c6107962d702ef1210d2fb11de20e63"
  },
  {
    "url": "_saber/images/20200906006-1-cf562d31.jpg",
    "revision": "dc55ac2984cd2aea8297146144786b5f"
  },
  {
    "url": "_saber/images/20200906006-3a02f6de.jpg",
    "revision": "13c53cd6a6446c5cc808fa51c0ee2c8a"
  },
  {
    "url": "_saber/images/20200906006-5860c907.jpg",
    "revision": "f32ba659287b943c6f326e48b4217f9a"
  },
  {
    "url": "_saber/images/20200906006-8a537860.jpg",
    "revision": "7991deef4d41fbea692d35014c312888"
  },
  {
    "url": "_saber/images/20200906007-08946d63.jpg",
    "revision": "4808df81458de1665069b27b1b78bb0a"
  },
  {
    "url": "_saber/images/20200906007-35f0c9e7.jpg",
    "revision": "c5d4eefd12b5a3d620d8fc670417907c"
  },
  {
    "url": "_saber/images/20200906007-dbe686f3.jpg",
    "revision": "8b2c0f8ce11ea732be42b99c3fc74155"
  },
  {
    "url": "_saber/images/20200906008-3006e687.jpg",
    "revision": "e7695d7f37ee6972a31b7a1cbe5205eb"
  },
  {
    "url": "_saber/images/20200906008-55e1b70b.jpg",
    "revision": "7a225ad8afea742cf2d1a3fdde2e7403"
  },
  {
    "url": "_saber/images/20200906008-92a4c6be.jpg",
    "revision": "5594ef28456737ac75adcaf1366c7074"
  },
  {
    "url": "_saber/images/20200906009-b947ea7a.jpg",
    "revision": "212b9b4682e42d813f1a4d43d732e207"
  },
  {
    "url": "_saber/images/20200906009-bd861723.jpg",
    "revision": "ad35935fef3a7be38e6f0b52dd9a5063"
  },
  {
    "url": "_saber/images/20200906009-ec9afd09.jpg",
    "revision": "61de6fadded714a94b73874a0b2b69d0"
  },
  {
    "url": "_saber/images/20200906010-1d5d0093.jpg",
    "revision": "d7c75e8c276f1d07076cdfe2b2714972"
  },
  {
    "url": "_saber/images/20200906010-dfd10b7a.jpg",
    "revision": "3dcb4df001c84de7657e3985ab871df0"
  },
  {
    "url": "_saber/images/20200906010-e14a8c09.jpg",
    "revision": "452b435a015073ca3cf596907a621e2e"
  },
  {
    "url": "_saber/images/20200906011-44bd665b.jpg",
    "revision": "1508ae8d32c6495594e98d2bc803029c"
  },
  {
    "url": "_saber/images/20200906011-77365c89.jpg",
    "revision": "cbdb78ce9230158d6b20216fae80f5cb"
  },
  {
    "url": "_saber/images/20200906011-f9e7ecd1.jpg",
    "revision": "201204c4857e2fe8589d93a1b0274bb1"
  },
  {
    "url": "_saber/images/20200906012-3fd90602.jpg",
    "revision": "7cc2604de913bede34ff43e468b42cd2"
  },
  {
    "url": "_saber/images/20200906012-71694d4a.jpg",
    "revision": "ad482427b97df07b892b77a3defbd751"
  },
  {
    "url": "_saber/images/20200906012-89410914.jpg",
    "revision": "d1901cdc9ff8f1ecbcbc0375f82d9e3f"
  },
  {
    "url": "_saber/images/20200906013-32fa7676.jpg",
    "revision": "cf0000cc623b275275dfa7bd23788530"
  },
  {
    "url": "_saber/images/20200906013-6990f8e7.jpg",
    "revision": "c23af03876f924419b1f72ba04127843"
  },
  {
    "url": "_saber/images/20200906013-f3c21612.jpg",
    "revision": "f7efe0f3e227b34ca050c339aabdd02a"
  },
  {
    "url": "_saber/images/20200906014-13502685.jpg",
    "revision": "9f5f96b99f7861b3ec4c4f1aefc1d097"
  },
  {
    "url": "_saber/images/20200906014-3a26399b.jpg",
    "revision": "dfce378eb49b63754b5a8b411c28b8e8"
  },
  {
    "url": "_saber/images/20200906014-9426fdbc.jpg",
    "revision": "b4d597fcfaca6571ebe6f4d3dd0a0a9a"
  },
  {
    "url": "_saber/images/20200906015-0d1b6602.jpg",
    "revision": "3523a9ebbaf3d15403aadcd1544a0a2c"
  },
  {
    "url": "_saber/images/20200906015-41b75d83.jpg",
    "revision": "0a90bfb4ac69f0a4746d29ec2d91ef05"
  },
  {
    "url": "_saber/images/20200906015-911d4454.jpg",
    "revision": "6e8af5b978b0ea17a07ec1d9aa593748"
  },
  {
    "url": "_saber/images/20200906016-a630cb80.jpg",
    "revision": "804cd96616ab571374b65661909836c9"
  },
  {
    "url": "_saber/images/20200906016-b5efcf11.jpg",
    "revision": "2f8c322cb1447a0a2619fcc0e63d3529"
  },
  {
    "url": "_saber/images/20200906016-e5763b7e.jpg",
    "revision": "18972df1221fd2e57018db043cd55af8"
  },
  {
    "url": "_saber/images/20200906017_1-34679ca2.jpg",
    "revision": "8a82a9e78c3b06ad9594bf00302dbd8d"
  },
  {
    "url": "_saber/images/20200906017_1-baaea520.jpg",
    "revision": "7f537f0dab41a71fc28e9514c3b62f6c"
  },
  {
    "url": "_saber/images/20200906017-1-b821da75.jpg",
    "revision": "bc90a1a6d7110bf58286e73b1728c4d9"
  },
  {
    "url": "_saber/images/20200906017-1-cdaae033.jpg",
    "revision": "3c8384799038d08e99fe87fe863a2dd2"
  },
  {
    "url": "_saber/images/20200906017-1-e87c13b8.jpg",
    "revision": "a5041b863b185199695b05fb8b37bca5"
  },
  {
    "url": "_saber/images/20200906017-649900fa.jpg",
    "revision": "5309893d6c7f3cb6cc5542933a61b0ec"
  },
  {
    "url": "_saber/images/20200906017-bc67e229.jpg",
    "revision": "ab13d570ce413d1b82207fa7acce2324"
  },
  {
    "url": "_saber/images/20200906017-d29402a7.jpg",
    "revision": "c4c7ee2cc3df7d0d5320abd4a6f75cea"
  },
  {
    "url": "_saber/images/20200906018-28b8a674.jpg",
    "revision": "842aba369c8b36a39671452ecd65e472"
  },
  {
    "url": "_saber/images/20200906018-6aaf541d.jpg",
    "revision": "da2101566d6e5dff55f350348dd23767"
  },
  {
    "url": "_saber/images/20200906018-b7cc40f3.jpg",
    "revision": "7e629f9b7eb3fdedc454ecaf62529db8"
  },
  {
    "url": "_saber/images/20200915001-223497b1.png",
    "revision": "36c32b2936035cdfe9c11345c9aee0f9"
  },
  {
    "url": "_saber/images/20200915001-47e4f82e.png",
    "revision": "e735f75ed315615e9a981422f06329c8"
  },
  {
    "url": "_saber/images/20200915001-fecd4242.png",
    "revision": "25993351791ff85933ebca777541c146"
  },
  {
    "url": "_saber/images/20201013001-4ea08994.png",
    "revision": "6c8026380738c77fa9b0f824aefeee0f"
  },
  {
    "url": "_saber/images/20201013001-b1700fc6.png",
    "revision": "a3dac102b13e5e5e6d8258d963ae462b"
  },
  {
    "url": "_saber/images/20201013001-e9278d63.png",
    "revision": "abed2dda1577668e84c38117703a468e"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-1619bc2c.jpg",
    "revision": "4cfcfd063d2d0b2bb7113df3e5310838"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-58cd415a.jpg",
    "revision": "10bc82e41df9d03a6437fa471e696903"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-36-c6ac21fd.jpg",
    "revision": "aa2661dd4dc1b5521d38f5e1a733c838"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-9e29e55b.png",
    "revision": "289f54887a269ae6aa94372a73020815"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-bce8a9cf.png",
    "revision": "840535039165009ceb37655d447d9f23"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-fa75eb83.png",
    "revision": "6fc862d651a59a267c4b509d2caf7dcd"
  },
  {
    "url": "_saber/images/2021-01-04-1-4d30c0fc.jpg",
    "revision": "a7d4116c65046e5a448b63299d7d7564"
  },
  {
    "url": "_saber/images/2021-01-04-1-8446c2d5.jpg",
    "revision": "08fbc4b378dafb1dd4c5a36c3e5c5895"
  },
  {
    "url": "_saber/images/2021-01-04-1-c9e046ad.jpg",
    "revision": "57725f227c28823f61d24870fc1d614a"
  },
  {
    "url": "_saber/images/2021-01-04-b7e23f52.jpg",
    "revision": "de6a2f43de25b89c54e742b116ef0373"
  },
  {
    "url": "_saber/images/2021-01-28-5464fc5f.jpg",
    "revision": "d3bb495018dbe6c48dc4cdab5834bd28"
  },
  {
    "url": "_saber/images/2021-01-28-a9df1d7c.jpg",
    "revision": "9823a8d00a3757582edfda074b1fc7c9"
  },
  {
    "url": "_saber/images/2021-01-28-fe6de14d.jpg",
    "revision": "637678a1af3b50100c26107de7ab46ec"
  },
  {
    "url": "_saber/images/2021-01-29-29ae4964.jpg",
    "revision": "a2b23cea5cc687e62f0a2ad23248bcb0"
  },
  {
    "url": "_saber/images/2021-01-29-a98a413c.jpg",
    "revision": "72d1a429ce274e0391840ed4cfff4261"
  },
  {
    "url": "_saber/images/2021-01-29-f5708645.jpg",
    "revision": "7da85557d0e1881e93c09d917cfbde5e"
  },
  {
    "url": "_saber/images/home-page-1-7ee27199.jpg",
    "revision": "19fb3c5d128b13002286918841c01811"
  },
  {
    "url": "_saber/images/home-page-1-a3bcab18.jpg",
    "revision": "4bc8b7a1e36d18aaaaa13ca5b53afde4"
  },
  {
    "url": "_saber/images/home-page-1-b4a392d3.jpg",
    "revision": "13b7188fd1bbeb0cf9731434e8ef657e"
  },
  {
    "url": "_saber/js/404-page.f8f7358a.js",
    "revision": "614162ec8ff2124f3186328705a2338a"
  },
  {
    "url": "_saber/js/client.0d77db84.js",
    "revision": "80f673690cdc860b3824104bc03aead6"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23--my-whole-life-md.0ff0368e.js",
    "revision": "b0791cbd004b7eaf996cff82afd10af2"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.70b00271.js",
    "revision": "7252e90895d0088338c7773104a7a6a2"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.03a0048b.js",
    "revision": "a92ec9f19bf0ddf053422677d860f71d"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.a8cb6553.js",
    "revision": "25460c26b29184fd58925324af8dbf4c"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.fa6a3e90.js",
    "revision": "b246ade51534ada693957fbc686fbad6"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.ceec40ae.js",
    "revision": "49d49368a2f817c6162db50a7af328d4"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.96e08b98.js",
    "revision": "8b972d50e190f011bfa4abfc385d5a8a"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.6798b25c.js",
    "revision": "66b24e2e3ec38c01d2285b82d8293110"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.4b7d7921.js",
    "revision": "04c7e58b4542328a8e8cc02013421251"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.3ca204e6.js",
    "revision": "facead54996942a8c9b9316f99cd836a"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.dfaef7b2.js",
    "revision": "297c29275bdce140e19317140a21741c"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.ee9e832b.js",
    "revision": "da52a85091428f0e898e43836d7f5271"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.67a33502.js",
    "revision": "ce8bc037e8908af68b7ab41947bd33b6"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.5938e7f4.js",
    "revision": "e59f513d3ca5b9a12a9bb622f1d36035"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.ae8559d1.js",
    "revision": "b2b50df084e6a65def41570fbc0582ea"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.10df2884.js",
    "revision": "18f442fcbddc2089456fe5f60aac7d68"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.ac86fb1e.js",
    "revision": "ead064a2d56c6bfdf68a827fa3270c9d"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.7b23f95a.js",
    "revision": "771b0fb7aadc4a28e8701e4035d8016f"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.fe12630d.js",
    "revision": "8b08356833cded6eab911524570a4988"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.ec2ddbee.js",
    "revision": "69d8ee62980a71f120e3845d7b5d936d"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.2963932f.js",
    "revision": "bc44f1655616fef52c78adc14f2b83cd"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-29-XuZhiyuan-conversation-with-XiangBiao-md.0681d1d9.js",
    "revision": "2b735582230b4a7a9ea1c6c88416e53b"
  },
  {
    "url": "_saber/js/page--about-md.85367905.js",
    "revision": "460ef9e27006cd39222c400bc2b2a0e2"
  },
  {
    "url": "_saber/js/page--blog-index-md.cc0fd9d4.js",
    "revision": "f59741f50f9ee128726677ad6b4591a7"
  },
  {
    "url": "_saber/js/page--guestbook-md.d91a5f4c.js",
    "revision": "a80e1024c8d5b0bc70f86924109487e3"
  },
  {
    "url": "_saber/js/page--index-md.699304d3.js",
    "revision": "f2abf739f14146a530d237474d6c3076"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv-科技.585b353f.js",
    "revision": "298943c0b1f94c779300109df4e840b3"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.4e50b568.js",
    "revision": "bfb682cd5058b8da50eee7106bb88f9f"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.761fe4dc.js",
    "revision": "3b09944634c30b11f819a9bfe81a78e0"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.20c04764.js",
    "revision": "8cfb4bc2a3cac5155b5935d36c0e2bb3"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.0888047f.js",
    "revision": "48fc1041d465c72c4f8d55f6a1a46073"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.a89109c7.js",
    "revision": "3762209a999a165bea2a4b400f2c7ffa"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.d9dc495d.js",
    "revision": "c1614c885fee1c6389bf1901d4b13785"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.7af36f6b.js",
    "revision": "22302bc2b5082668f182ce80e5f379c4"
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
    "revision": "e8b9daaf3cd9a7a59df4c3d84e275bcc"
  },
  {
    "url": "about/index.html",
    "revision": "f6d3a93e5d711676c18316537faf0bf9"
  },
  {
    "url": "blog/2016/09/ my-whole-life/index.html",
    "revision": "7d32351c338011ab8b32ffc0f22e6a30"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "1c2fa5f6ea384f0271ffab5405441f4e"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "b2f701cc8837b5235a21cd07f310107d"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "7057cfb142d975521618841e0243f9ca"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "b8b2431366d0fa8af69bd21062ea7f8e"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "efcae648f58ab37603e9647d1ccee93c"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "07a8eb38e19dc150d446a1d14712e7f0"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "4b581a8dfbfd4fe27690052d51395c54"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "62d7c828df1a38df7f09ebce2f766a3e"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "f6e245a8219290e69db7fe798757828c"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "d188d05bd59686a046f5848e6625a5e0"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "7c8386eb82e661326130ea1df7ea2b1d"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "771a871a13dd00edf297f1609026384e"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "0fa99e9b84c292f3c58dd77306c73ac6"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "c3941b9ea6ac810ce56788714459b528"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "4a72a7bad0e59db247e2b0b799197753"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "94c7cb551aef88c44015a1fca74d66c3"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "c3961297eb4e48c8cfa92d73979d7569"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "e2b8f82e1a4569f64dac9525a455d77f"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "632fab841df9a1cf9a2684977f35f012"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "2eb3fb708f9afcd93f367710631ac519"
  },
  {
    "url": "blog/2021/01/XuZhiyuan-conversation-with-XiangBiao/index.html",
    "revision": "a0782a8c8bc86e49663680a0346c924a"
  },
  {
    "url": "blog/category/googletv-科技/index.html",
    "revision": "5600f2ea845ef2f9325ede8bbc16b962"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "b413697e803d7d069584910bb7133d17"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "a4e090e39a62368bc6f512a355bc0912"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "2a9b7c95eb968d79fb9c3e37eb005eb0"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "1149c8a9a0020855eb1c054f0bfe8100"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "8f374d0a795cc9c96d985298e1565747"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "912b01d98165765cca4f65e361aaf8c5"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "a8db9f7fee78f5416ee1351bacd54888"
  },
  {
    "url": "blog/index.html",
    "revision": "20ca49f36c5888eb135e9d5235953106"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "868a445f7a737c0f7ea9650c76d140c9"
  },
  {
    "url": "guestbook/index.html",
    "revision": "27d3465858036b512f1ae4f6082d9ab1"
  },
  {
    "url": "index.html",
    "revision": "25b71236e384564457f87960fa938073"
  },
  {
    "url": "page/2/index.html",
    "revision": "3355e7c6be61a57c786fc45237b8b757"
  },
  {
    "url": "running/index.html",
    "revision": "ce40a4c288bef3028f735e01ad79af80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
