const staticCacheName = "cache-v2";
const assets = ['/index.html'];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// supprimer les caches presedent
self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter((key) => key !== staticCacheName)
                    .map((key) => caches.delete(key))
            )
        })
    );
});


self.addEventListener('fetch', (evt) => {
    console.debug(evt);
    let match = caches.match(evt.request).then(response => {
        // Cache hit - return response
        if (response) {
            return response;
        }

        return fetch(evt.request)
            .then(nResponse => {
                caches.open(staticCacheName).then(cache => {
                    cache.put(evt.request, nResponse)
                });
                return nResponse.clone();
            }
            );
    });

    evt.respondWith(match);
});

