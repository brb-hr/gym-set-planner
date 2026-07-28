const CACHE_NAME = 'set-planner-v2';
const ASSETS = [
  './index.html',
  './manifest.json',
  './images/ausfall.png',
  './images/beinheben.png',
  './images/birddog.png',
  './images/bizeps.png',
  './images/deadbug.png',
  './images/klimmzug.png',
  './images/liegestuetz.png',
  './images/rudern.png',
  './images/sideplank.png',
  './images/trizeps.png',
  './images/zehenstand.png',
  './images/unterarm.png'
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