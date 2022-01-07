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
    "url": "_saber/css/styles.4f7732c8.chunk.css",
    "revision": "b87ef294a966706c9fc3f3f208e4f747"
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
    "url": "_saber/images/2022-01-08_06-10-24-1612d7a3.jpg",
    "revision": "b7df05cc5f0c6683c9d4348da879006d"
  },
  {
    "url": "_saber/images/2022-01-08_06-10-24-2b8ff27b.jpg",
    "revision": "ab0c74a42787e5116dafc2203f5980ef"
  },
  {
    "url": "_saber/images/2022-01-08_06-10-24-d03968ec.jpg",
    "revision": "c517085aeb665fb63e511dd35d97a2fb"
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
    "url": "_saber/js/404-page.43857b9c.js",
    "revision": "6164075ae0f375c15099af396dc610f6"
  },
  {
    "url": "_saber/js/client.e75d7987.js",
    "revision": "0305d3c052e87f66ab9e62ee21ba566f"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23-my-whole-life-md.7f4647fe.js",
    "revision": "758834f0e05ec4ef1cd1a4e0128bc056"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.d53c3921.js",
    "revision": "40c7f9ad6d5cae31f8b89bd85d71414e"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.af0955cc.js",
    "revision": "8e81f95b5c5307e2cd0e258a2ecfcbd1"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.2676b263.js",
    "revision": "a403430584acfcbd1d4e6efcdee71169"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.205c8e17.js",
    "revision": "a395e3d78f2c810cba6c5b9de801c337"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.4240300e.js",
    "revision": "3fa5024d8ecd1c903eb9a9b5bf6accd1"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.d9a0ff6a.js",
    "revision": "cdb29f7cd68fe6f95872eb9d359bc8f8"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.2ef436f2.js",
    "revision": "be9dc2339b76b6219eaa81fefbea69c0"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.ad0db461.js",
    "revision": "bc05f2fe6494ff200c57f9ca40584bc7"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.42eb4fcf.js",
    "revision": "f37296b9f249864964c882a31f0f6308"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.3c209bf5.js",
    "revision": "542b7eec40e6c7ee51676d67692d4146"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.34e6666c.js",
    "revision": "f75cc7221085c9a1bd880f5b4a01bc96"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.7749e480.js",
    "revision": "76992317d5b2611f2588905f6817fa45"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.16e1832d.js",
    "revision": "f643df352d07c67de41032bc8c288085"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.13587934.js",
    "revision": "f5cd4014046ac4b35acc1a520e8f9732"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.9a7fc917.js",
    "revision": "b3ba4f1863af0909b8eb83536e690005"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.16c13219.js",
    "revision": "4f25a5520f5d4f0e14262f6d3bb479c2"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.ce5b2283.js",
    "revision": "e71ca773b147b4266e3d0693279588f0"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.1020fcfe.js",
    "revision": "66088d7c7070d3a96f43d574f9d5f1f3"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.6efa994b.js",
    "revision": "9d220806f0ace9cb2805b112381e9007"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.d32aecb9.js",
    "revision": "21d818252d7557c2010303993c86b3ef"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-29-XuZhiyuan-conversation-with-XiangBiao-md.e0e2f35f.js",
    "revision": "3107e9d52cc22875d0dcb2315ef94d86"
  },
  {
    "url": "_saber/js/page--_posts-2022-01-07-2021-end-md.9baf0dcd.js",
    "revision": "9d605f185cae5702cc5f951ba8cabff8"
  },
  {
    "url": "_saber/js/page--about-md.5e95d063.js",
    "revision": "1b19cd8505633ad3ee3450f2cd956a93"
  },
  {
    "url": "_saber/js/page--blog-index-md.eae4425e.js",
    "revision": "ec5b2b8f8215231668d0484a94055833"
  },
  {
    "url": "_saber/js/page--guestbook-md.f56c4ee3.js",
    "revision": "301c5603025ca5b53985d7f0627ba6c9"
  },
  {
    "url": "_saber/js/page--index-md.f8fc5d79.js",
    "revision": "e5a9581f10753b330ffdc9fb0bc2da8a"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv.996c66ac.js",
    "revision": "11bd7af3e2fc3bea7f9a541c1c7372de"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.789d73f4.js",
    "revision": "5faff0f56e9c78d8e67cc2eb8c0cebc6"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.b1f29b73.js",
    "revision": "60f745163847490cfcaaeee7d6bcda6f"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.07801c81.js",
    "revision": "d40bae480c9f52f4ea2e5d6faf839758"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.831bd206.js",
    "revision": "8adc90a8016ab3a4d1bae3980de8bfc0"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.d6d13d14.js",
    "revision": "ea989df9e72ca5a34bd8f3e9bf2a688f"
  },
  {
    "url": "_saber/js/page--internal_blog__category__科技.f168f561.js",
    "revision": "18e6d3d98c4ff4614223ae82c09ede84"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.bb3aea13.js",
    "revision": "151661e2be1ada5a4566ceefa0020fae"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.04c475ef.js",
    "revision": "0c35933eee60bf79d68b0c0f2c42952d"
  },
  {
    "url": "_saber/js/styles.4f7732c8.js",
    "revision": "8223485ad3001935965a73c2283b964a"
  },
  {
    "url": "404.html",
    "revision": "d7f2ebf4a5844b0c126f62fffbb32a86"
  },
  {
    "url": "about/index.html",
    "revision": "bbba9c25c4ef20b56bd6ead581bfcf32"
  },
  {
    "url": "blog/2016/09/my-whole-life/index.html",
    "revision": "90593c13a59a0cd14b3796636ce083ce"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "8d02acbd125bfcf14ae59a25e402b2f3"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "4526971f853ca2fe41717fa5eaa49aa3"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "5755b8520b246d1d8f5ba80184c8f8ea"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "837ae354008f8ed27bc5d977c2082636"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "c38830b048d76d5fe0551ca4acf84843"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "448a651405606e0c7fbaa333ce0cbeff"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "fbc4dbc2c080385542f4877e0a639a7e"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "0618a345ed9b7bd07d62f70727360c2d"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "ebb3fb36a7dde8cfe03d4bf9f2ccfcb9"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "dba36ebdfceb551ea5529b78deb43899"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "792428349373185b3951efc234afafab"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "cbd54581b1d63a16da6001a68f26e415"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "297d709fb6f7a96054c74395991dc9e8"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "4554e9e8ca56f5831e0d3941a57d48b2"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "d436175b9d255b405027126ae6e111a9"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "068a769765c091200674a514cd22ad18"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "c6f6faa6eae7513eb80689758f381f20"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "6834baf4319de25c09033d5bc436a310"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "6db7a6334108cae8ec0115551d580d5c"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "2148370a6d62977a4664f024c26ea8e8"
  },
  {
    "url": "blog/2021/01/XuZhiyuan-conversation-with-XiangBiao/index.html",
    "revision": "725ab9d063955c603d87f6844b152b88"
  },
  {
    "url": "blog/2022/01/2021-end/index.html",
    "revision": "51071f5715bc276369609dd04b936471"
  },
  {
    "url": "blog/category/googletv/index.html",
    "revision": "897a79a0e1e0601b5932be24ddc0ced5"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "97923dce11892023b593a5ed829984cc"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "f7fa6bc138e47ffe2490fbf132c43220"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "b9de97bca883ad938f4a372ff54a9f63"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "6b12d12a4237a4fbd6e3500723e5a243"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "7290c9771154a31fb3c954f6b58062c9"
  },
  {
    "url": "blog/category/科技/index.html",
    "revision": "668c01b141dfe63268d25918580ad030"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "370c195535c4fcd385cb6746800f63b3"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "67e1e332942fbb2ddcab0b228e926cb6"
  },
  {
    "url": "blog/index.html",
    "revision": "8a1e4857e8295aee63c6b93cd0a1dcc8"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "7d4235de2ca882ae660c06211a4ab76b"
  },
  {
    "url": "guestbook/index.html",
    "revision": "03e328085c20fdab84a9201165894cd1"
  },
  {
    "url": "index.html",
    "revision": "aeff238daa9654e03b2129dd3057373d"
  },
  {
    "url": "page/2/index.html",
    "revision": "f888633a88032d35de964c982f1cd007"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
