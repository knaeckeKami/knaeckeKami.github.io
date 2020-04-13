'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "fc995dd62f1968fddc4ecb47c5f91977",
"/main.dart.js": "62b3398d8e5a0731e023ae45908d15fb",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "828de383aff29f2d8027339418d7bd9d",
"/.git/config": "3a47a5e9121d38a50b396422ea95a4dc",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/6a/9fbba8f8a8810ae389fddb09076391e10b64e7": "b46e9f6b4c07cf7a94a9bc221eb87888",
"/.git/objects/58/03dd849b05531e1ad46e7a5b22a894c89049e7": "99fbf8e48dcd78ad3a50ac729b565614",
"/.git/objects/34/e3d6b72276b475f2fa2a54a7b251ca038b5b42": "b95ded5902287131b3f95a29abbf33f7",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/11/85e13fa8d57b18dac3065457b3b8dbb94770c0": "181a5a777de20a5700c622a2cd8934f3",
"/.git/objects/7b/6d1eeffb6c578a9e9bd5b31547b935006a89b5": "e4536f59f3a356f13f763854a60da828",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/0f/3851072e216c9652eb24a0ee62ffd7864298dc": "d65dbdd8e5a3fd3a4f41057e57018828",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/c3/a0ed86d031818a803ff2f4104918720ff40089": "004d4d736b8b11b139909d6ce50f5226",
"/.git/objects/1e/9abeba45bf23c646f4e057c0e73ec4416ab16c": "81c33760ddcf1688edc75ec3713dfc61",
"/.git/objects/4f/d6f7c7863f0563b12a34084fa6b215779e3830": "d0c5656569171d950d9646b0731e6dfd",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "a3d0181514bb7cfce659d7c3bbb59d47",
"/.git/logs/refs/heads/master": "a3d0181514bb7cfce659d7c3bbb59d47",
"/.git/logs/refs/remotes/origin/master": "f5dc5029bae24134f0da9bec3ca5c687",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "507b142093d01c13226fdfbd2a5e8b2b",
"/.git/refs/remotes/origin/master": "507b142093d01c13226fdfbd2a5e8b2b",
"/.git/index": "6c1355b71d33f8f6578035debfa2be3d",
"/.git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"/assets/LICENSE": "147d740e51bd39255ab835591857b666",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
