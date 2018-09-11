var cacheName = 'my-app1';
var filesToCache = [
    '/index.html',
    '/index.js',
    '/style.css',
    '/popper.js',
    '/jquery.js',
    'bootstrap/css/bootstrap.min.css',
    '/'
];

self.addEventListener('install', function(e) {
    self.skipWaiting();
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
    );
  });
  
 
  self.addEventListener('fetch', function(e) {
   console.log('[ServiceWorker] Fetch', e.request.url);
   e.respondWith(
     fetch(e.request).catch(function() {
        return caches.match(e.request);
     })
   );
 });