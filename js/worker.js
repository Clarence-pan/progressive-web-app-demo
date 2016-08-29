console.log("Worker begin (v2016-08-11__09-45)... self=%o", self);
console.log("Caches: %o", caches);

var cacheName = 'progressive-web-app-demo-cache';
var filesToCache = [
    '../',
    '../index.html',
    '../favicon.ico',
    '../js/main.js',
    '../js/worker.js',
    '../js/rand-canvas.js',
    '../css/main.css'
];

self.addEventListener('install', function(event) {
    //self.skipWaiting();
    console.log('[worker]: Installed', event);
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log("[worker]: Cache opened!");
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('[worker]: Activated', event);
});

self.addEventListener('push', function(event) {
    console.log('[worker]: Push message received', event);
    // TODO
});

