'use strict';

const version = 'v201809131026';
const __DEVELOPMENT__ = false;
const __DEBUG__ = true;

//需要离线加载的内容
const offlineResources = [
    '/index.html',
];

//忽略外部资源
const ignoreFetch = [
    /https?:\/\/jic.talkingdata.com\//,
    //阿里/腾讯 验证码
    /https?:\/\/g.alicdn.com\//,
    /https?:\/\/ssl.captcha.qq.com\//,
    /https?:\/\/(test1-)?www.hubox.cn\/.*.(png|jpe?g|gif|svg)/,
    /https?:\/\/(test1-)?mapi.hubox.cn\/\?.*method=market.apiIndexRank/,
];


//////////
// Install
//////////
function onInstall(event) {
    log('install event in progress.');

    event.waitUntil(updateStaticCache());
}

function updateStaticCache() {
    return caches
    .open(cacheKey('offline'))
    .then((cache) => {
        return cache.addAll(offlineResources);
    })
    .then(() => {
        log('installation complete!');
    });
}

////////
// Fetch
////////
function onFetch(event) {
    const request = event.request;

    if (shouldAlwaysFetch(request)) {
        console.log('networkedOrOffline');
        event.respondWith(networkedOrOffline(request));
        return;
    }

    if (shouldFetchAndCache(request)) {
        console.log('networkedOrCached');
        event.respondWith(networkedOrCached(request));
        return;
    }

    console.log('cachedOrNetworked');
    event.respondWith(cachedOrNetworked(request));
}

function networkedOrCached(request) {
    return networkedAndCache(request)
    .catch(() => {
        return cachedOrOffline(request);
    });
}

// Stash response in cache as side-effect of network request
function networkedAndCache(request) {
    return fetch(request)
    .then((response) => {
        var copy = response.clone();
        caches.open(cacheKey('resources'))
        .then((cache) => {
            cache.put(request, copy);
        });

        log("(network: cache write)", request.method, request.url);
        return response;
    });
}

/**
 * 读取缓存-> 读取网络-> 读取离线
 * @param request
 * @returns {Promise<Response | undefined | never>}
 */
function cachedOrNetworked(request) {
    return caches.match(request)
    .then((response) => {
        log(response ? '(cached)' : '(network: cache miss)', request.method, request.url);
        return response ||
            networkedAndCache(request)
            .catch(() => {
                return offlineResponse(request);
            });
    });
}

function networkedOrOffline(request) {
    return fetch(request)
    .then((response) => {
        log('(network)', request.method, request.url);
        return response;
    })
    .catch(() => {
        return offlineResponse(request);
    });
}

function cachedOrOffline(request) {
    return caches
    .match(request)
    .then((response) => {
        return response || offlineResponse(request);
    });
}

function offlineResponse(request) {
    log('(offline)', request.method, request.url);
    if (request.url.match(/\.(jpg|png|gif|svg|jpeg)(\?.*)?$/)) {
        return caches.match('/offline.svg');
    } else {
        return caches.match('/offline.html');
    }
}

///////////
// Activate
///////////
function onActivate(event) {
    log('activate event in progress.');
    event.waitUntil(removeOldCache());
}

function removeOldCache() {
    return caches
    .keys()
    .then((keys) => {
        return Promise.all( // We return a promise that settles when all outdated caches are deleted.
            keys
            .filter((key) => {
                return !key.startsWith(version); // Filter by keys that don't start with the latest version prefix.
            })
            .map((key) => {
                return caches.delete(key); // Return a promise that's fulfilled when each outdated cache is deleted.
            })
        );
    })
    .then(() => {
        log('removeOldCache completed.');
    });
}

function cacheKey() {
    return [version, ...arguments].join(':');
}

function log() {
    if (developmentMode()) {
        console.log("SW:", ...arguments);
    }
}

function shouldAlwaysFetch(request) {
    return __DEVELOPMENT__ ||
        request.method !== 'GET' ||
        ignoreFetch.some(regex => request.url.match(regex));
}

function shouldFetchAndCache(request) {
    return ~request.headers.get('Accept').indexOf('text/html');
}

function developmentMode() {
    return __DEVELOPMENT__ || __DEBUG__;
}

log("Hello from ServiceWorker land!", version);

self.addEventListener('install', onInstall);

self.addEventListener('fetch', onFetch);

self.addEventListener("activate", onActivate);

self.addEventListener('offline', function () {
    console.log('offline');
});

self.addEventListener('sync', function (event) {
    console.log('sync222');
    if (event.tag === 'myFirstSync') {
        //event.waitUntil(doSomething());
    }
});
