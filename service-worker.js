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
    "url": "_saber/css/styles.0897f13d.chunk.css",
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
    "url": "_saber/images/2022-01-13_12-46-22-11c3d1db.jpg",
    "revision": "b6b23bca9a6709a927eda94004419326"
  },
  {
    "url": "_saber/images/2022-01-13_12-46-22-12e295ee.jpg",
    "revision": "f1b7810cfaccadd100fadb78b90218ab"
  },
  {
    "url": "_saber/images/2022-01-13_12-46-22-6c607289.jpg",
    "revision": "1beb39ef4f82ce7048a7b64ebe92fa83"
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
    "url": "_saber/js/404-page.10a6a3c7.js",
    "revision": "7593ce4eccf75e4e20a38179d8470a41"
  },
  {
    "url": "_saber/js/client.32846fd3.js",
    "revision": "8fcbafe1adcb2666d1fcd89aed775737"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23-my-whole-life-md.87310dca.js",
    "revision": "5be1e7ed805b7eee5ebec817e97bc184"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.25f9c189.js",
    "revision": "4d24c91d555ee9fbe821b049316d3bc0"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.6dff731a.js",
    "revision": "28f1fbb686c071f95ebc501443f2a33c"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.7f2ade4a.js",
    "revision": "9097dfe0b831b46643683145cce1482d"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.2942b8c6.js",
    "revision": "8c53ee92d419a53cd6c48f147c9ea489"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.adbc4b20.js",
    "revision": "a6579d6040a3cffa0661aac55904b0b0"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.030b3f04.js",
    "revision": "04c7216ca6c652efa9a423ea0cc11c91"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.b9de3c50.js",
    "revision": "328601793e2808784924d8bc430b98d7"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.563b0a3c.js",
    "revision": "917d7e6ac9e1f3de52aeb18fe1a82176"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.9b7ea3be.js",
    "revision": "484aa0bb8a3bbdf7ca4d9efb354fda03"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.6c910089.js",
    "revision": "3c479f32e1498eb1055f9cbf2cac3bdd"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.3d4d3c0e.js",
    "revision": "1037f97915f2bd5e3e198a41b6410611"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.f4ae7e93.js",
    "revision": "586c2d7a676ed5203a8c255d19f6da0a"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.9d274025.js",
    "revision": "7379571c6ac3c94364b134cacd799910"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.3185759a.js",
    "revision": "12be0ed0322e6c78f7d5045910251cfb"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.d461b085.js",
    "revision": "7a00b32969fdb096b564569104bc6d16"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.a3b78cb2.js",
    "revision": "dabd642c03c436dc8c966bc51e5f9b48"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.c14c03da.js",
    "revision": "35f8ce54eddd4dce23e8cce8ee646b4c"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.41df824a.js",
    "revision": "ff010c9f51bfcbe3f7ec6fa3219bc5fe"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.aa62582d.js",
    "revision": "1d02274a10d9edc1aae242d2ddfaa17d"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.479aa69b.js",
    "revision": "b0de80d7cf35cdd781c3de459b5e7bd0"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-29-XuZhiyuan-conversation-with-XiangBiao-md.1c96daac.js",
    "revision": "afdb4954a2a521d3c14af1d081d361cd"
  },
  {
    "url": "_saber/js/page--_posts-2022-01-07-2021-end-md.736a0bdf.js",
    "revision": "6d939ed6053d6d2648b0ef9ddb89fc23"
  },
  {
    "url": "_saber/js/page--_posts-2022-01-13-0x1b-md.a9160634.js",
    "revision": "41f4672468dc3c380a6f801f415f6e22"
  },
  {
    "url": "_saber/js/page--about-md.77e66049.js",
    "revision": "eb41b5b74528bd68a32978b0f537465f"
  },
  {
    "url": "_saber/js/page--blog-index-md.3ffcbd28.js",
    "revision": "3550d223b2a0722c6aa0de11c7bbec7b"
  },
  {
    "url": "_saber/js/page--guestbook-md.e7dfe5c9.js",
    "revision": "8cc16021931d23661e0a9794ab215d6c"
  },
  {
    "url": "_saber/js/page--index-md.c9ebfc61.js",
    "revision": "940007eafcc0b42b6cde7a8dd443b5a3"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv.9f3c631d.js",
    "revision": "f83e38e4d94d6932555a6856f08c5150"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.3540d383.js",
    "revision": "f77f891060c3238851ee0bb73188317d"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.b53e21a8.js",
    "revision": "4f67bde3f460422f41f13d4ca0fd9c3c"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.ff53f629.js",
    "revision": "d6f78e70957378e7ecd5281381907c10"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.38cd2db1.js",
    "revision": "4e90737b629d8d863d66f352710ff23d"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.f6d323ff.js",
    "revision": "2ee84ebf2b7f406d34f8f7dcba30a6c8"
  },
  {
    "url": "_saber/js/page--internal_blog__category__科技.84b77401.js",
    "revision": "126a5b42c9b26ad7f8b865d0c2a74d96"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.4ff435d4.js",
    "revision": "b477c5635fbf5e5582cfa38e21449f23"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.bc4ebc48.js",
    "revision": "c2a2f9a1cacc12d04143b2dc40065f4e"
  },
  {
    "url": "_saber/js/styles.0897f13d.js",
    "revision": "8a8b7837d49f57e55745ee2902d2e58c"
  },
  {
    "url": "404.html",
    "revision": "9898aa70cdc90d1ca8531d8d032e30c9"
  },
  {
    "url": "about/index.html",
    "revision": "84118c9ac20761eddb5a941eed701992"
  },
  {
    "url": "blog/2016/09/my-whole-life/index.html",
    "revision": "e15faa6fc1cd662637d0d92c25beacce"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "4ac3ba5f0d41773d52c1497e878400e6"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "6968ef4ea3f2851641492691afb6a586"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "ebb8407b925f0dee28e3e595c5d08f85"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "4ede4c35eea5d88cd48a1e2e244f96d2"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "4b40ecc4a4ca9094d0d25b100c1b9f06"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "6606cc2ce6c8836a02bbbb1e43269057"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "fcf403638085e2fea53e9421bcd90a93"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "46d782d14f5a6b08440f317e7feb7310"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "9f533de006f038df3260c7faf61cf9f7"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "591eba09ffab7a1c7c969a16f4a3c09f"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "ba0f8c1e2d030df43f95dddd4a318b98"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "667c68f525799addba459033da57fbfc"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "2cd5d122212921b6e5de04f9bbe0ebad"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "303aafffe6b9cae2c41ec435355f19b3"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "46c2126989591daa5d67fbdc43fabe56"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "9b4a29be89d1ef5193824b1455ac4867"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "ceb2ddb588d3531a3ea1ca159b395297"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "4bfaf53884ab26a8d5471fc7a6e51574"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "78834c84516bfadbff778b0fd100eb07"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "fef5e9a44611985d1873fe536a3e4c75"
  },
  {
    "url": "blog/2021/01/XuZhiyuan-conversation-with-XiangBiao/index.html",
    "revision": "4d2a2c56f4814ced5c0dc6532fcb8528"
  },
  {
    "url": "blog/2022/01/0x1b/index.html",
    "revision": "55b343462720a9db94ca8a4bc92d12fc"
  },
  {
    "url": "blog/2022/01/2021-end/index.html",
    "revision": "eaeecf63ae3ebc241800910a840779a7"
  },
  {
    "url": "blog/category/googletv/index.html",
    "revision": "380e4c287e716a2a8716aacd171f1fdd"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "798b4bd1bf5148bed4794a92dc227d4c"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "b1e5ff3a8a7b4c645fcfd33cc0ef4cda"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "daa418df7cec26fd94aaa71018a2b81c"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "3f9d566c9232a26f947b27189efe8be5"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "1ca4014e3165f1372fb823cd89e74677"
  },
  {
    "url": "blog/category/科技/index.html",
    "revision": "49f3540ce8bdc1202e3c22104d93282e"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "e00a8058085128063fd45fd7101a6d36"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "f09f89b213069b45da390ba0dcd5c27f"
  },
  {
    "url": "blog/index.html",
    "revision": "579fa0093530d49956b6325e4497a40e"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "1f54f0d9729cb38aa926f8d2544bd5ac"
  },
  {
    "url": "guestbook/index.html",
    "revision": "b454f592a9dc7776e428306c0098a370"
  },
  {
    "url": "index.html",
    "revision": "b35d33c1500745312f5f4cdc13376630"
  },
  {
    "url": "page/2/index.html",
    "revision": "a9e25fa36084bc706bdfbbaf847f810d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
