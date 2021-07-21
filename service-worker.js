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
    "url": "_saber/css/styles.1849aaf9.chunk.css",
    "revision": "928914f698b398cc840db51a8f3c3d3c"
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
    "url": "_saber/images/20200915001-1d76e28e.png",
    "revision": "ed78dc5e20af761601bd1044a8decd6a"
  },
  {
    "url": "_saber/images/20200915001-36c11988.png",
    "revision": "bda34e159f37d88f3e0ab0b8788e934b"
  },
  {
    "url": "_saber/images/20200915001-5669097b.png",
    "revision": "28e4adee86618d61b0743d0974b14485"
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
    "url": "_saber/images/2021-01-01-00-17-37-1d88d65e.png",
    "revision": "6b0bf6c537188f2f8a87ae3afa393851"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-6e1b23fc.png",
    "revision": "120d7d2db4a1e7617b8f912ae150cf71"
  },
  {
    "url": "_saber/images/2021-01-01-00-17-37-b3a8b115.png",
    "revision": "38b78d1545103872212fa61aec0086bd"
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
    "url": "_saber/images/2021-01-28-1-1883e89c.jpg",
    "revision": "0f2e10fefb502e15ded66e59241ce6f2"
  },
  {
    "url": "_saber/images/2021-01-28-1-19d15f86.jpg",
    "revision": "f0192513d4ba5f3ad5773e171a0653aa"
  },
  {
    "url": "_saber/images/2021-01-28-1-7f80c784.jpg",
    "revision": "8ec1469d65a06241eb6409cb93ed65c5"
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
    "url": "_saber/images/home-page-1-04cf4f3e.jpg",
    "revision": "ca15903f4b21b4d9f1e2201d431cd49d"
  },
  {
    "url": "_saber/images/home-page-1-293b2d05.jpg",
    "revision": "324dd039c45a638fdbe54c1c2ae6629d"
  },
  {
    "url": "_saber/images/home-page-1-c6bef49b.jpg",
    "revision": "5a885ef26dd9c804d62d9e3435a85d44"
  },
  {
    "url": "_saber/js/404-page.f8f7358a.js",
    "revision": "614162ec8ff2124f3186328705a2338a"
  },
  {
    "url": "_saber/js/client.2594ed57.js",
    "revision": "8003da07765e3b8d88754044aafadd0c"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23-my-whole-life-md.d728269e.js",
    "revision": "f977fad68ed970ff76db1b3e1c7308ea"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.e2ec447b.js",
    "revision": "fffa2f344c4ca95af0fa853e2e9ff9e8"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.3556afe0.js",
    "revision": "59a224e99f6cb4ce032529cd1cb7e047"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.afee56e8.js",
    "revision": "c3b56145140f59b13002e1731f5bd1f4"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.d7cee233.js",
    "revision": "41b5c91f7b07231a34a3948befe88585"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.771343e7.js",
    "revision": "a3d153521814df72656f6384b281b2b9"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.5f1981f1.js",
    "revision": "12dba7fdaa01f22a3bae6515ab9b83a8"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.01335a73.js",
    "revision": "982ebdc07a75af036b379b2bd88f0b04"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.38a978de.js",
    "revision": "f4783dcb6761e4ab2bed7ef5bf0fca44"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.9dd28b2d.js",
    "revision": "184802557aa4f5c463fa9cf26d3829b1"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.69b3d592.js",
    "revision": "297c29275bdce140e19317140a21741c"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.f52a1115.js",
    "revision": "7deb302e67c3b58860ff3e745ff46fa2"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.c67df779.js",
    "revision": "deb21dfa10dfe8306c600ffd984c8e10"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.4f1b4338.js",
    "revision": "c2462a4d8c8dbcf58608010c63b9fc3c"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.feea08a8.js",
    "revision": "9338a0f6e626c1e7f6f44f5ab1da5c15"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.033eae2a.js",
    "revision": "d5e4512dc547f5357e18e5e0501eab9d"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.a8def0e8.js",
    "revision": "3f04cd6e70e1cb0ac227ce25b7c868ea"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.5a698e96.js",
    "revision": "771b0fb7aadc4a28e8701e4035d8016f"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.4a44a37d.js",
    "revision": "2ab97155cf59226dca745ab2d185286b"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.e9664e9f.js",
    "revision": "b0435ed1d331c3810b58879a41f22096"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.245e1dc3.js",
    "revision": "46b98719770e9853aa47fe6f8795d3ab"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-29-XuZhiyuan-conversation-with-XiangBiao-md.3cbfcef5.js",
    "revision": "7cb64dc940fd6c2ff0e2df484c1d8ea7"
  },
  {
    "url": "_saber/js/page--about-md.f6fb3f8a.js",
    "revision": "a41411361c08c2608bba80d2c754b1d0"
  },
  {
    "url": "_saber/js/page--blog-index-md.c39faaeb.js",
    "revision": "27b3c82537627090c96802a1c6686e9e"
  },
  {
    "url": "_saber/js/page--guestbook-md.1c04866b.js",
    "revision": "a80e1024c8d5b0bc70f86924109487e3"
  },
  {
    "url": "_saber/js/page--index-md.053539ce.js",
    "revision": "41daa6aa39bb93a14bd83a08b4ff6e14"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv.9336f105.js",
    "revision": "b90f318410f457b614a09163e2c7059b"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.d6125ebd.js",
    "revision": "219f0d8c76d0dd1e6271bbc8ba5d09ee"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.2361ea63.js",
    "revision": "b1bfa157e4bcc4fd7e92e7b66571baa9"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.1863eced.js",
    "revision": "7d5cdcf647281e5c411f32abd2c8e65d"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.a310cfb3.js",
    "revision": "0f3a9ca983738b200caf890e9eb42911"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.2a404f45.js",
    "revision": "226e8f6fa9d06be4433d86aeed3b4dd0"
  },
  {
    "url": "_saber/js/page--internal_blog__category__科技.dc80d34a.js",
    "revision": "cb85cabc17eb0ea9a7415d3803093ecf"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.3ca380e4.js",
    "revision": "9c727c8340493e2f4420c18953ef8c70"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.c1f35172.js",
    "revision": "92f69825a5d3fdc76c1fd6faa3ac700f"
  },
  {
    "url": "_saber/js/styles.1849aaf9.js",
    "revision": "35e2afa4537015a09bfcc2ef4cc5569d"
  },
  {
    "url": "404.html",
    "revision": "49accaff42a8cf7c0d1569ee2d14b4d3"
  },
  {
    "url": "about/index.html",
    "revision": "d7b2b0ba684b09f5f23b312faef71b75"
  },
  {
    "url": "blog/2016/09/my-whole-life/index.html",
    "revision": "7bde05c0c2bde63860bcbc8e11cdc2c0"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "2d3f4be9c51bc8be68c7853f14175805"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "15862c2ea7286b2fbdb194ce12964441"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "7b4e767cd97800520ecdce29566f09c1"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "585a6eecbd8045d42e160631cc2dca08"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "e3f2c6e290f0b6ed566f9b4aa92be6d2"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "a139a6d941ca76a5dc9080c9b9bf6c75"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "ca96ef433de765429b1b78d6509eee14"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "420966f18f9e1b5dee7a4387b1e86501"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "02b775fd1924026d10a2a00e681187f8"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "2080b55019b3a26b8c9382d20ac8443e"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "4c6aa1ae24cb8e871f3692853f3c1b34"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "3726c4ba4906ff2ef851ed7f5e43e92b"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "c327c723381b3dadc43373f227038ee0"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "b6bfb8d6b7802380ed2592ebb741b51e"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "904e4c842b1a74bf30947b0d36a8dd6b"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "4dd5f05e9e1eaad1ad06d4ebec4af307"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "d9134f544ae0797dc9676b0d3f93e5a2"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "8017c8e7a2df48276a73a476ab1dfe0e"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "d7d16d6e43ac388d95b9694aece74289"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "2c047b971127815b17b89b127c24a867"
  },
  {
    "url": "blog/2021/01/XuZhiyuan-conversation-with-XiangBiao/index.html",
    "revision": "baecb0d6d588e7bad27d645e3335d888"
  },
  {
    "url": "blog/category/googletv/index.html",
    "revision": "c767793bfdfd0048cefb513936bae549"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "4244cfb1adeb7fb7b7b33c53e0ffb975"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "966931f17fb31ac53ff17cd189c267a3"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "b3a6786cab48cf228f6603d5a2a270f7"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "eb26f0e7952ff11a787c6be1e9cb78ee"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "5e9ddb653d69d3f0b814fbe80b113659"
  },
  {
    "url": "blog/category/科技/index.html",
    "revision": "6be6b3043bdd721bac4be14932a73dbb"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "b565e0355a9013ff91eecfda5440121e"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "7fc6c021c9145831fead6b91f58e1579"
  },
  {
    "url": "blog/index.html",
    "revision": "6c742f94a93c611768775d2554de75b4"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "e02111f7553d2cee73700c3b82ebbdde"
  },
  {
    "url": "guestbook/index.html",
    "revision": "99ccaa697fb0a53231ee9c3073307374"
  },
  {
    "url": "index.html",
    "revision": "5accf0f68724e1a7955d590280ffe32e"
  },
  {
    "url": "page/2/index.html",
    "revision": "c019a414b17f790a1b357956303d57d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
