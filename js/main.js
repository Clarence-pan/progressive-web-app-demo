(function () {
    if (!window.navigator) {
        alert("No window.navigator!");
        return;
    }

    if (!navigator.serviceWorker){
        alert("No navigator.serviceWorker!");
        return;
    }

    if (!window.caches){
        alert("No window.caches!");
        return;
    }

    if ('serviceWorker' in navigator) {
        console.log('Service Worker is supported');
        navigator.serviceWorker.register('js/worker.js').then(function (reg) {
            console.log(':^)', reg);
            // TODO
        }).catch(function (err) {
            console.log(':^(', err);
        });
    }
})();