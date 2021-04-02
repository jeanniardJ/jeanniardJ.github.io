const staticCacheName = "cache-v1";
const assets = ['/index.html', '/assets/css/style.css', '/assets/images/bg.jpg'];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// supprimer caches
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


self.addEventListener('fetch', evt => {

    evt.respondWith(
        caches.match(evt.request).then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                return fetch(evt.request).then(nResponse => {
                    console.log(evt.request)
                        if (nResponse) {
                            return nResponse;
                        }

                        // IMPORTANT: Même constat qu'au dessus, mais pour la mettre en cache


                        caches.open(staticCacheName).then(cache => cache.put(response.request, nResponse));

                        return nResponse.clone();
                    }
                );
            })
    );
});

