// Name of the cache stored in the users browser
const CACHE_NAME = "designsystem-v1";

// List of assets to cache on inital page fetch.
const CACHE = [
	"/",
	"/assets/css/style.css",
	"/assets/js/header.js",
	"/assets/js/footer.js",
	"/assets/favicons/site.webmanifest",
	"/assets/favicons/favicon.ico",
	"/assets/img/artwork-about-community.png",
	"/assets/img/artwork-about-components.png",
	"/assets/img/artwork-about-templates.png",
	"/assets/img/artwork-about.png",
	"/assets/img/header-logo-agov.png",
	"/assets/img/users-logo-dashboard.png",
	"/assets/img/users-logo-dta.png",
	"/assets/img/users-logo-dva.png",
	"/assets/img/users-logo-health.png",
	"/assets/img/users-logo-marketplace.png",
	"/assets/img/users-logo-mygov.png"
];

/**
 * Open cache, cache specified files
 */
self.addEventListener("install", function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log("Opened cache");
			return cache.addAll(CACHE);
		})
	);
});

/**
 * Find resources as found in cache on page fetch
 */
self.addEventListener("fetch", function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			console.log(`Found cache match`)
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
