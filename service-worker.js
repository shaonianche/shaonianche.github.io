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
    "url": "_saber/css/styles.1b0dc771.chunk.css",
    "revision": "0d4da53f7500a9ffea5bd93d87fa6405"
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
    "url": "_saber/js/404-page.6c5d4e0a.js",
    "revision": "0158d64f61a9034fdf603019e50d1092"
  },
  {
    "url": "_saber/js/client.3f2cd9d1.js",
    "revision": "02735dc5cb834b62da40b96d35c3e229"
  },
  {
    "url": "_saber/js/page--_posts-2016-09-23-my-whole-life-md.7a48478e.js",
    "revision": "0b3887a327eb6aa1dbbb073d62ca4383"
  },
  {
    "url": "_saber/js/page--_posts-2017-02-07-start-md.57ca44ef.js",
    "revision": "bd8b49f5522742428ede4ff0b6f93134"
  },
  {
    "url": "_saber/js/page--_posts-2017-04-03-time-md.ae20f996.js",
    "revision": "021c3cec821cd5a72377e9b2afc62ce2"
  },
  {
    "url": "_saber/js/page--_posts-2018-02-26-games-data2-md.f20db91d.js",
    "revision": "485c567b463316834a78d65378e43fbd"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-02-fu-lei-letters-md.bb4443b8.js",
    "revision": "55199ff61bf9da4ad6933f86473faac0"
  },
  {
    "url": "_saber/js/page--_posts-2018-04-05-hello-friend-md.5c4ffa4b.js",
    "revision": "2facd49a982fc69ac27fb0044013aafe"
  },
  {
    "url": "_saber/js/page--_posts-2019-01-17-we-md.ab85e7e0.js",
    "revision": "85b43127a63e8a56f4f2965cda095fbb"
  },
  {
    "url": "_saber/js/page--_posts-2019-03-04-social-animal-md.8d032844.js",
    "revision": "bbd5b13331d3dbf7a5a533e9a178a107"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-26-How-to-Think-Straight-chinaese-md.29ea2865.js",
    "revision": "74ab966ff3340de535505f389d3ee9ad"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-lorem-ipsum-md.7fe0a18d.js",
    "revision": "dc760048cdd07a115c849dca4dbaa950"
  },
  {
    "url": "_saber/js/page--_posts-2019-06-27-soul-series-md.117992cd.js",
    "revision": "d3b5f80c7708be425fc53669e33d5aef"
  },
  {
    "url": "_saber/js/page--_posts-2019-09-19-mountains-may-depart-md.fc0e9435.js",
    "revision": "fbfd16284fcb4af21c2df864b30831d8"
  },
  {
    "url": "_saber/js/page--_posts-2019-11-30-customer-journey-maps-md.0a0bbc57.js",
    "revision": "469ce8cdf36c94cdc4b4e26c7fbafff8"
  },
  {
    "url": "_saber/js/page--_posts-2019-12-18-good-and-bad-md.b014e533.js",
    "revision": "bbfb398bb5cad81a31841a87d1e34396"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-07-restart-md.6db3f99d.js",
    "revision": "31001d7d7daa278f0d9c9c73fc799d20"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-10-use-yourself-as-a-method-md.60b46081.js",
    "revision": "87fc73b272aee62da622e5101074de60"
  },
  {
    "url": "_saber/js/page--_posts-2020-09-15-private-secondary-school-md.fcb603b3.js",
    "revision": "c74a6df9c0430183204b662dbedd23f8"
  },
  {
    "url": "_saber/js/page--_posts-2020-10-13-national-day-holiday-md.24b935cb.js",
    "revision": "2f429aca062fec3f88a389dfc0433292"
  },
  {
    "url": "_saber/js/page--_posts-2020-12-30-2020-end-md.2948429c.js",
    "revision": "e9adee8744eb83203e42f4d2c3b81d17"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-04-more-Joel-on-software-md.fd57027a.js",
    "revision": "90e4f6fce12aa096bfb33e46a0b07df3"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-28-chromecast-with-google-tv-time-error-md.874646cc.js",
    "revision": "8249a8ac01ccf899d0fe1808e2e2d7f8"
  },
  {
    "url": "_saber/js/page--_posts-2021-01-29-XuZhiyuan-conversation-with-XiangBiao-md.203a0b02.js",
    "revision": "7ff0d29425241cc7be0450a049c5ae2c"
  },
  {
    "url": "_saber/js/page--about-md.08e91f66.js",
    "revision": "12efd113bbfb77e783ce40bd9b38d73e"
  },
  {
    "url": "_saber/js/page--blog-index-md.c021a70b.js",
    "revision": "5d6dc3db126b38b08bb06572ae3118f5"
  },
  {
    "url": "_saber/js/page--guestbook-md.c61e9cc1.js",
    "revision": "fe86b09b414c1c0b5401f1117732f885"
  },
  {
    "url": "_saber/js/page--index-md.8afb8028.js",
    "revision": "60afb744fc48f35ca10607189c4604b9"
  },
  {
    "url": "_saber/js/page--internal_blog__category__googletv.249e84c6.js",
    "revision": "7f756d8c26bf68a45b9159d0f3251f84"
  },
  {
    "url": "_saber/js/page--internal_blog__category__notes.79a316ea.js",
    "revision": "716dcb9ad0f83c3669831f84d5160e54"
  },
  {
    "url": "_saber/js/page--internal_blog__category__ux.e84cfcc6.js",
    "revision": "73a17f308a22895a15bc5d4e15bb7ef5"
  },
  {
    "url": "_saber/js/page--internal_blog__category__杂谈.c2a203d6.js",
    "revision": "26d499f247c211486de2e1539962892a"
  },
  {
    "url": "_saber/js/page--internal_blog__category__游戏.26c40738.js",
    "revision": "e528115331a13886f4ff788437eb378a"
  },
  {
    "url": "_saber/js/page--internal_blog__category__生活.44353b7f.js",
    "revision": "490e90838ea9093a056edc884eabc757"
  },
  {
    "url": "_saber/js/page--internal_blog__category__科技.a84d2c60.js",
    "revision": "a21aaa168618a15f9f4cfdbd8bd0d71d"
  },
  {
    "url": "_saber/js/page--internal_blog__category__认知心理.d68ef2b8.js",
    "revision": "317aaac218bab81de18c8d1ce249a273"
  },
  {
    "url": "_saber/js/page--internal_blog__category__读书笔记.f1b005f4.js",
    "revision": "815309cfa9db5b9b0660aebc2c73002d"
  },
  {
    "url": "_saber/js/styles.1b0dc771.js",
    "revision": "35e2afa4537015a09bfcc2ef4cc5569d"
  },
  {
    "url": "404.html",
    "revision": "01630b96b3c20df88be0e084c702de9f"
  },
  {
    "url": "about/index.html",
    "revision": "3aa16715873cc27103af5134dcfce483"
  },
  {
    "url": "blog/2016/09/my-whole-life/index.html",
    "revision": "a9d47792e6414e3561ac1fb774bd4cd4"
  },
  {
    "url": "blog/2017/02/start/index.html",
    "revision": "f7e7777b317c3868bd1d9ff155c109f2"
  },
  {
    "url": "blog/2017/04/time/index.html",
    "revision": "c169475abdf5295d014005e76c8397d1"
  },
  {
    "url": "blog/2018/02/games-data2/index.html",
    "revision": "38c57afe251fff940be961a03703fd0c"
  },
  {
    "url": "blog/2018/04/fu-lei-letters/index.html",
    "revision": "75891cfde93693e6cee1fff3f3cf86d1"
  },
  {
    "url": "blog/2018/04/hello-friend/index.html",
    "revision": "e48ad7153e00edd3f28906b27104e9c4"
  },
  {
    "url": "blog/2019/01/we/index.html",
    "revision": "a42b03d162aeb0c7a3462ba476b08dcb"
  },
  {
    "url": "blog/2019/06/How-to-Think-Straight-chinaese/index.html",
    "revision": "f6e88984fc0a98348bceda87cb16fbba"
  },
  {
    "url": "blog/2019/06/lorem-ipsum/index.html",
    "revision": "325c11c2d23286f2fbe83ca2308839c4"
  },
  {
    "url": "blog/2019/06/social-animal/index.html",
    "revision": "102045add34a4d43aac3f951f8919912"
  },
  {
    "url": "blog/2019/06/soul-series/index.html",
    "revision": "b16e48b3f84b73f31967e4db2f63b0bb"
  },
  {
    "url": "blog/2019/09/mountains-may-depart/index.html",
    "revision": "00c5542b0b9edc92b3dab8fde2a076bd"
  },
  {
    "url": "blog/2019/11/customer-journey-maps/index.html",
    "revision": "a8cc4dca639dd0a0d3584a2bbc6e5c2d"
  },
  {
    "url": "blog/2019/12/good-and-bad/index.html",
    "revision": "02d50cfde3a84892c36a0fc4063c42f4"
  },
  {
    "url": "blog/2020/09/private-secondary-school/index.html",
    "revision": "566a60ab2cff5f0b2c6c464203864bde"
  },
  {
    "url": "blog/2020/09/restart/index.html",
    "revision": "a75894545979e3fa3a7aa910236033d4"
  },
  {
    "url": "blog/2020/09/use-yourself-as-a-method/index.html",
    "revision": "258a3e3466e5fea4b7c303ff1cf9435b"
  },
  {
    "url": "blog/2020/10/national-day-holiday/index.html",
    "revision": "412d2495f38c538dac421457a6cf9af8"
  },
  {
    "url": "blog/2020/12/2020-end/index.html",
    "revision": "c94d295c03aad135bcc88af18e7b90ea"
  },
  {
    "url": "blog/2021/01/chromecast-with-google-tv-time-error/index.html",
    "revision": "a3dbbca38fbc5ba66734ae26912eee9e"
  },
  {
    "url": "blog/2021/01/more-Joel-on-software/index.html",
    "revision": "1495e8d60a89eb0c4ced91240871e365"
  },
  {
    "url": "blog/2021/01/XuZhiyuan-conversation-with-XiangBiao/index.html",
    "revision": "6aaabfc36a6898c33ea2c38c95ee466c"
  },
  {
    "url": "blog/category/googletv/index.html",
    "revision": "39a7f473bf643c5b92d7d8bde66afd82"
  },
  {
    "url": "blog/category/notes/index.html",
    "revision": "d0fafd24946a85ffdb077ab14a605c1b"
  },
  {
    "url": "blog/category/ux/index.html",
    "revision": "cab3ef9d548d24e9811206cf166c9cdd"
  },
  {
    "url": "blog/category/杂谈/index.html",
    "revision": "b03ed353df9df40dfb7522b4417caa63"
  },
  {
    "url": "blog/category/游戏/index.html",
    "revision": "25ffec08c14b70c7f03b20aabbb0b4db"
  },
  {
    "url": "blog/category/生活/index.html",
    "revision": "b5f6a2fcd7a44c5371bafca814130860"
  },
  {
    "url": "blog/category/科技/index.html",
    "revision": "a161e70410ec7c5e8af97a719811bcd8"
  },
  {
    "url": "blog/category/认知心理/index.html",
    "revision": "75c051056d5b57bc1ecad7c1b990ce8d"
  },
  {
    "url": "blog/category/读书笔记/index.html",
    "revision": "f31a38dde53291f5b4fca3bc9f76b906"
  },
  {
    "url": "blog/index.html",
    "revision": "f055363073af69c3d76ee9e6420b9c59"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "84fd27c213ad21811210439c6bed4b0b"
  },
  {
    "url": "guestbook/index.html",
    "revision": "6f40962a9d75dbda1597b0767137128c"
  },
  {
    "url": "index.html",
    "revision": "71ad6d7ec9bdc60249341afb7d7ff250"
  },
  {
    "url": "page/2/index.html",
    "revision": "364458eab8fa378b91e43294e4b4e0d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.typekit\.net\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
