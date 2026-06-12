const CACHE_NAME = 'x1997-resume-builder-v31';

// Cache the core app shell files (no query strings — match by request URL)
const urlsToCache = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: pre-cache all app shell assets
self.addEventListener('install', event => {
  self.skipWaiting(); // Activate new SW immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate: purge old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim()) // Take control of all open tabs immediately
  );
});

// Fetch: serve from cache, fall back to network
// Strip query strings when matching so versioned URLs (style.css?v=31) hit the cache
self.addEventListener('fetch', event => {
  // Only handle GET requests for our own origin
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cached => {
      if (cached) {
        return cached;
      }
      // Not in cache — fetch from network and cache for next time
      return fetch(event.request).then(networkResponse => {
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic'
        ) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // If offline and not cached, return a basic offline fallback for HTML
        if (event.request.destination === 'document') {
          return caches.match('./index.html', { ignoreSearch: true });
        }
      });
    })
  );
});
