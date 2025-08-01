const cacheName = "meloniemaccroftygoals-v6";
const coreAssets = [

"/crofty_goals/",
"/crofty_goals/index.html",
"/crofty_goals/manifest.json",
  
"/crofty_goals/android-chrome-192x192.png",
"/crofty_goals/android-chrome-512x512.png",
"/crofty_goals/apple-touch-icon-57x57-precomposed.png",
"/crofty_goals/apple-touch-icon-57x57.png",
"/crofty_goals/apple-touch-icon-60x60-precomposed.png",
"/crofty_goals/apple-touch-icon-60x60.png",
"/crofty_goals/apple-touch-icon-72x72-precomposed.png",
"/crofty_goals/apple-touch-icon-72x72.png",
"/crofty_goals/apple-touch-icon-76x76-precomposed.png",
"/crofty_goals/apple-touch-icon-76x76.png",
"/crofty_goals/apple-touch-icon-114x114-precomposed.png",
"/crofty_goals/apple-touch-icon-114x114.png",
"/crofty_goals/apple-touch-icon-120x120-precomposed.png",
"/crofty_goals/apple-touch-icon-120x120.png",
"/crofty_goals/apple-touch-icon-144x144-precomposed.png",
"/crofty_goals/apple-touch-icon-144x144.png",
"/crofty_goals/apple-touch-icon-152x152-precomposed.png",
"/crofty_goals/apple-touch-icon-152x152.png",
"/crofty_goals/apple-touch-icon-180x180-precomposed.png",
"/crofty_goals/apple-touch-icon-180x180.png",
"/crofty_goals/apple-touch-icon-precomposed.png",
"/crofty_goals/apple-touch-icon.png",
"/crofty_goals/browserconfig.xml",
"/crofty_goals/favicon-16x16.png",
"/crofty_goals/favicon-32x32.png",
"/crofty_goals/favicon.ico",
"/crofty_goals/icon.png",
"/crofty_goals/icon.svg",
"/crofty_goals/mstile-150x150.png",
"/crofty_goals/safari-pinned-tab.svg",

"/crofty_goals/1.jpg",
"/crofty_goals/2.jpg",
"/crofty_goals/3.jpg",
"/crofty_goals/4.jpg",
"/crofty_goals/Tomb_Raider.ttf"
];


// On install, cache core assets
self.addEventListener('install', function (event) {

  // Cache core assets
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    for (let asset of coreAssets) {
      cache.add(new Request(asset));
    }
    return cache;
  }));

});

// Listen for request events
self.addEventListener('fetch', function (event) {

  // Get the request
  let request = event.request;

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

  // HTML files
  // Network-first
  if (request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request).then(function (response) {

        // Create a copy of the response and save it to the cache
        let copy = response.clone();
        event.waitUntil(caches.open(cacheName).then(function (cache) {
          return cache.put(request, copy);
        }));

        // Return the response
        return response;

      }).catch(function (error) {

        // If there's no item in cache, respond with a fallback
        return caches.match(request).then(function (response) {
          return response || caches.match('/index.html');
        });

      })
    );
  }

  // CSS & JavaScript
  // Offline-first
  if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return response || fetch(request).then(function (response) {

          // Return the response
          return response;

        });
      })
    );
    return;
  }

  // Images
  // Offline-first
  if (request.headers.get('Accept').includes('image')) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return response || fetch(request).then(function (response) {

          // Save a copy of it in cache
          let copy = response.clone();
          event.waitUntil(caches.open(cacheName).then(function (cache) {
            return cache.put(request, copy);
          }));

          // Return the response
          return response;

        });
      })
    );
  }

});