const CACHE_NAME = "lets-cook-community-food-v57";

const OFFLINE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./data/recipes.json",
  "./assets/brent-co-logo.svg",
  "./assets/us-road-trip-map.svg",
  "./assets/editorial-cajun-pasta.jpg",
  "./assets/editorial-career-support.jpg",
  "./assets/editorial-cooking-hero.jpg",
  "./assets/editorial-culture-travel.jpg",
  "./assets/editorial-kitchen-prep.jpg",
  "./assets/editorial-music-collab.jpg",
  "./assets/editorial-nightlife-culture.jpg",
  "./assets/find-the-beat-logo.svg",
  "./assets/find-the-beat-mockup.png",
  "./assets/logo.png",
  "./assets/second-chance-logo.svg",
  "./assets/second-chance-mockup.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(OFFLINE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const shouldRefreshFirst =
    request.mode === "navigate" ||
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "manifest" ||
    (isSameOrigin && requestUrl.pathname.includes("/data/"));

  if (shouldRefreshFirst) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok && isSameOrigin) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.ok && isSameOrigin) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached || caches.match("./index.html"));

      return cached || networkFetch;
    })
  );
});
