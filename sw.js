importScripts('cachepolyfill.js');
var CACHE_NAME = 'biolithic-cache-v1-1';
var urlsToCache = [
  '/',
  'index.html',
  'android-chrome-36x36.png',
  'android-chrome-48x48.png',
  'android-chrome-72x72.png',
  'android-chrome-96x96.png',
  'android-chrome-144x144.png',
  'android-chrome-192x192.png',
  'apple-touch-icon-57x57.png',
  'apple-touch-icon-60x60.png',
  'apple-touch-icon-72x72.png',
  'apple-touch-icon-76x76.png',
  'apple-touch-icon-114x114.png',
  'apple-touch-icon-120x120.png',
  'apple-touch-icon-144x144.png',
  'apple-touch-icon-152x152.png',
  'apple-touch-icon-180x180.png',
  'apple-touch-icon-precomposed.png',
  'apple-touch-icon.png',
  'browserconfig.xml',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-96x96.png',
  'favicon-194x194.png',
  'favicon.ico',
  'mstile-70x70.png',
  'mstile-144x144.png',
  'mstile-150x150.png',
  'mstile-310x150.png',
  'mstile-310x310.png',
  'cachepolyfill.js',
  '/images/afterlight1.png',
  '/images/andy1.png',
  '/images/andy2.png',
  '/images/asthma1.png',
  '/images/asthma2.jpg',
  '/images/auburn1.png',
  '/images/auburn2.png',
  '/images/banp_1.png',
  '/images/blush1.png',
  '/images/blush2.png',
  '/images/cart1.png',
  '/images/cart2.png',
  '/images/cart3.png',
  '/images/cart4.png',
  '/images/cf1.png',
  '/images/chismw1.png',
  '/images/chismw2.png',
  '/images/cm1.png',
  '/images/coffee.jpg',
  '/images/dnb1.png',
  '/images/dnb3.png',
  '/images/dressedupandy.jpg',
  '/images/east1.png',
  '/images/east2.png',
  '/images/event1.png',
  '/images/freezine1.png',
  '/images/freezine2.png',
  '/images/gdi1.png',
  '/images/gradingapp1.png',
  '/images/apccmpd1.png',
  '/images/chialpha.jpg',
  '/images/dejesus4mayor.gif',
  '/images/inevitableend1.jpg',
  '/images/pcasales1.png',
  '/images/psych1.png',
  '/images/tablettuners1.png',
  '/images/materialize1.png',
  '/images/partsline2.png',
  '/images/perf1.png',
  '/images/perf2.png',
  '/images/perf3.png',
  '/images/perf4.png',
  '/images/perf5.png',
  '/images/prep1.png',
  '/images/prep2.png',
  '/images/prestart1.png',
  '/images/prestart2.png',
  '/images/qt1.png',
  '/images/qt2.png',
  '/images/ram1.png',
  '/images/react1.png',
  '/images/spacer.gif',
  '/images/uiux1.png',
  '/images/uiux2.png',
  '/images/uiux3.png',
  '/images/uiux4.png',
  '/images/unthsc1.png',
  '/images/unthsc2.png',
  '/images/w2s1.png',
  '/images/w2s2.png',
  '/images/worshipbook1.png',
  '/images/zurb6.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request);
      }
    )
  );
});

/*this.addEventListener('fetch', function(evt){
    console.log('fetching data');
    evt.respondWith(
        caches.open('images').then(function(cache){
            return cache.match(evt.request).then(function (response) {
                console.log(response);
                return response || fetch(event.request.clone());
            });
        })
    );
});*/


