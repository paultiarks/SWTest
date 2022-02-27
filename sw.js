var APP_PREFIX = 'ApplicationName_'     // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = 'version_01'              // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [                            // Add URL you want to cache in this list.
  '/SWTest/',                     // If you have separate JS/CSS files,
  '/SWTest/index.html'            // add path to those files here
]

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url);
  var newRequest = e.request.clone();
  newRequest.url = "nativeimage://testImage.jpg"
  e.respondWith(async function () {
    return fetch(newRequest);
  })
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  console.log("activate");
})