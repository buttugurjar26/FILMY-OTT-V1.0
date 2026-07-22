const CACHE_NAME = "filmy-ott-v1";

const urlsToCache = [
    "/",
    "/index.html",
    "/home.html",
    "/home.css",
    "/home.js",
    "/login.html",
    "/login.css",
    "/login.js",
    "/logo.png"
];

self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME).then((cache) => {

            return cache.addAll(urlsToCache);

        })

    );

});

self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request).then((response) => {

            return response || fetch(event.request);

        })

    );

});