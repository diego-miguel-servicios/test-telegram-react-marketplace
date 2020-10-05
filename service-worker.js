/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/test-telegram-react-marketplace/1.130f0ecf36ff90c87239.worker.js","8ea2e6416284a63219ace9e7fab7557a"],["/test-telegram-react-marketplace/130f0ecf36ff90c87239.worker.js","6f2068139f116aab752b0932c4f1738e"],["/test-telegram-react-marketplace/Android_2x.jpg","eb8506aef9761972b129f60f9ac7fd70"],["/test-telegram-react-marketplace/Manytabs_2x.png","7a71629a5e4f7482b6320b103f1d543c"],["/test-telegram-react-marketplace/WP_2x.jpg","a1d37d509e6740f40c0a4729dff3100b"],["/test-telegram-react-marketplace/a848b8b40a9281225b96b8d300a07767.wasm","a848b8b40a9281225b96b8d300a07767"],["/test-telegram-react-marketplace/data/Folders_1.json","01b7f0acf52990784baca0a19b821be3"],["/test-telegram-react-marketplace/data/Folders_2.json","3f6c9400e50344c82b15a7acf5087a33"],["/test-telegram-react-marketplace/data/TwoFactorSetupMonkeyClose.json","c322e3eabf46340f12ec7f4784d4115a"],["/test-telegram-react-marketplace/data/TwoFactorSetupMonkeyIdle.json","b2c77121d458e17d18e642c51cb9821c"],["/test-telegram-react-marketplace/data/TwoFactorSetupMonkeyPeek.json","d914e5d5fdef6b5596bb409689c8332d"],["/test-telegram-react-marketplace/data/TwoFactorSetupMonkeyTracking.json","addf1beac01749387f1aea96a9bfb682"],["/test-telegram-react-marketplace/data/countries.txt","9339c68f7b29b2b2512c607ab5d05aed"],["/test-telegram-react-marketplace/emoji-mart.dark.css","cda63f0ddb31e11af14b44a003d2ef7a"],["/test-telegram-react-marketplace/emoji-mart.light.css","2ac73d5c98ad88b6e4d0f66b0a6b4a58"],["/test-telegram-react-marketplace/iOS_2x.jpg","1d95f349db03f730edb3bc35224a303e"],["/test-telegram-react-marketplace/index.html","0c7e52de05bc0c44d7a1335480fd69aa"],["/test-telegram-react-marketplace/libwebp/webp_wasm.js","3d9cf139a6fe02ffe08860ddb682de41"],["/test-telegram-react-marketplace/libwebp/webp_wasm.wasm","7923e6d27dbf3a355044bd27863ae331"],["/test-telegram-react-marketplace/libwebp/webp_wasm.worker.js","e94066e473d75366d69425584bfb9d20"],["/test-telegram-react-marketplace/rlottie/pako-inflate.min.js","d96df6d3267de8b84701993460b26e83"],["/test-telegram-react-marketplace/rlottie/rlottie-wasm.js","f8181c4c45a700482cc52b7c9d200a3f"],["/test-telegram-react-marketplace/rlottie/rlottie-wasm.wasm","e725dc036ad50ba694c90ee1f72c4b5b"],["/test-telegram-react-marketplace/rlottie/rlottie-wasm.worker.js","152367fd468cbf2fb1b11f82427294ae"],["/test-telegram-react-marketplace/sound_a.mp3","eba09b6a457792c52fc610b5f9f974b3"],["/test-telegram-react-marketplace/static/css/0.9b2f7aac.chunk.css","e60f481e6f91800323f00deedc3eb5d7"],["/test-telegram-react-marketplace/static/css/3.8eea10a1.chunk.css","96ec51e695c3e69be084eed9d69deeda"],["/test-telegram-react-marketplace/static/css/5.6ede3073.chunk.css","4528013198dc3499f198c6e8088a64a2"],["/test-telegram-react-marketplace/static/css/7.06f67155.chunk.css","5082b861fc183799db5e7ac0ae4eabea"],["/test-telegram-react-marketplace/static/css/main.3b00a337.chunk.css","525449d56539fed59e4a3b1697bf6d6e"],["/test-telegram-react-marketplace/static/js/0.f3257689.chunk.js","7182d5d2da27803eb8f60aa6512f3625"],["/test-telegram-react-marketplace/static/js/3.dd9f091a.chunk.js","efae14982f4722df495e1ec49b19c53a"],["/test-telegram-react-marketplace/static/js/4.2492ba83.chunk.js","2d8583f7602047ae40197431ad12f8ba"],["/test-telegram-react-marketplace/static/js/5.40df1c11.chunk.js","f3af0c2f7d21f1a532fac3cc64f6dc36"],["/test-telegram-react-marketplace/static/js/6.643f5437.chunk.js","cd28a8a90298c5469426437989ae771c"],["/test-telegram-react-marketplace/static/js/7.6db8f00d.chunk.js","26c121c75db844a4866f2c286d047024"],["/test-telegram-react-marketplace/static/js/main.9089289f.chunk.js","e473447546f8ca6761f7133554b2c421"],["/test-telegram-react-marketplace/static/js/runtime~main.54f8dd50.js","f4ef6e2f70a4ed9615d56e36706032de"],["/test-telegram-react-marketplace/static/media/bg.9b7ea631.jpg","9b7ea631ddb3103beee05cec006af20e"],["/test-telegram-react-marketplace/static/media/bubble-tail-left.1e4dc488.svg","1e4dc48872b0f8184bad22e809a3f7cc"],["/test-telegram-react-marketplace/static/media/bubble-tail-right.6b94009c.svg","6b94009ce33b78259659e12326de498f"],["/test-telegram-react-marketplace/static/media/check.fb38f7d6.svg","fb38f7d6fbf79f207edfa158c10f16a7"],["/test-telegram-react-marketplace/static/media/telegram-logo.8e3f975b.svg","8e3f975b0dac0d7ddc9f5ab85f24d15a"],["/test-telegram-react-marketplace/tdweb.js","29e219b420694fba8b9ed440c78b50ff"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/./];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    // console.log("[SW] fetch url " + url, shouldRespond);
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              let url = event.request.url;
                // console.log("[SW] found cached url " + url);
                /*if (url.indexOf(".wasm") > -1) {
                  console.log("[SW] wasm not modified");
                  let responseInit = {
                    status: 304,
                    statusText: 'Not Modified'
                  };
                  let notModifiedResponse = new Response('', responseInit);
                  return notModifiedResponse;
                }*/

              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("./custom-service-worker.js");
