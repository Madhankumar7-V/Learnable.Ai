const CACHE_NAME = 'learnable-cache-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/student-dashboard.html',
  '/videos.html',
  '/styles.css',
  '/app.js',
  '/dashboard.js',
  '/student-dashboard.js',
  '/videos.js',
  '/manifest.json'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', evt => {
  // Handle video requests specially for offline support
  if (evt.request.url.includes('youtube.com') || evt.request.url.includes('youtu.be')) {
    evt.respondWith(
      fetch(evt.request).catch(() => {
        // Return a placeholder for offline video access
        return new Response(`
          <html>
            <body style="font-family: Arial; text-align: center; padding: 50px;">
              <h2>📱 Offline Mode</h2>
              <p>This video is not available offline.</p>
              <p>Connect to internet to watch videos.</p>
              <button onclick="history.back()">Go Back</button>
            </body>
          </html>
        `, {
          headers: { 'Content-Type': 'text/html' }
        });
      })
    );
  } else {
    // Try network, fall back to cache
    evt.respondWith(
      fetch(evt.request).catch(() => caches.match(evt.request))
    );
  }
});
