const CACHE_NAME = "profile-cache-v2";

const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/profile.js"
];

// Install
self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate
self.addEventListener("activate", (event) => {

  event.waitUntil(
    caches.keys().then(keys => {

      return Promise.all(
        keys.map(key => {

          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }

        })
      );

    })
  );

  self.clients.claim();

});

// Fetch (Network First)
self.addEventListener("fetch", (event) => {

  event.respondWith(

    fetch(event.request)
      .then(response => {

        const clone = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => cache.put(event.request, clone));

        return response;

      })
      .catch(() => caches.match(event.request))

  );

});

// Notification
self.addEventListener("notificationclick", (event) => {

  event.notification.close();

  event.waitUntil(
    clients.openWindow("/")
  );

});