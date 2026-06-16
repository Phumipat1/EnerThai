/* ==========================================================================
   Ener Thai Service Worker - Offline Caching
   ========================================================================== */

const CACHE_NAME = 'enerthai-v6';
const ASSETS_TO_CACHE = [
  'index.html',
  'products.html',
  'product.html',
  'calculator.html',
  'story.html',
  'science.html',
  'trace.html',
  'faq.html',
  'contact.html',
  'css/style.css',
  'css/pages.css',
  'js/main.js',
  'js/calculator.js',
  'js/trace.js',
  'manifest.json',
  'assets/logo-black.png',
  'assets/logo-white.png',
  'assets/gel-sunrise.png',
  'assets/gel-strike.png',
  'assets/gel-sunset.png'
];

// Install Event - cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate Event - clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch Event - network first, cache fallback
self.addEventListener('fetch', (e) => {
  // Only handle GET requests and local scope files
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // Clone response and update cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Fallback to cache if offline
        return caches.match(e.request);
      })
  );
});
