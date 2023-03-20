var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/fontawesome-all.min.css',
        './assets/css/main.css',

        './images/icons/hk_29.png',
        './images/icons/hk_40.png',
        './images/icons/hk_48.png',
        './images/icons/hk_57.png',
        './images/icons/hk_58.png',
        './images/icons/hk_60.png',
        './images/icons/hk_72.png',
        './images/icons/hk_80.png',
        './images/icons/hk_87.png',
        './images/icons/hk_96.png',
        './images/icons/hk_114.png',
        './images/icons/hk_120.png',
        './images/icons/hk_144.png',
        './images/icons/hk_180.png',
        './images/icons/hk_192.png',
        './images/icons/hk_512.png',        

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});