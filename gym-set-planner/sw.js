const CACHE_NAME = 'set-planner-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// Installieren und Daten in den Cache laden
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Netzwerk-Anfragen abfangen (Offline-Support)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});