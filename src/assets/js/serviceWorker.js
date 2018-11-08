// Name of the cache stored in the users browser
const CACHE_NAME = "designsystem";

// List of assets to cache on inital page fetch.
const CACHE = [
	"/",
	"/assets/css/style.css",
	"/assets/js/header.js",
	"/assets/js/footer.js",
	"/assets/favicons/site.webmanifest",
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

// Does the browser support service workers?
if ("serviceWorker" in navigator) {
	// Load and register this service worker configuration.
	window.addEventListener("load", function() {
		navigator.serviceWorker.register("/assets/js/serviceWorker.js").then(
			function(registration) {
				console.log(
					"ServiceWorker registration successful with scope: ",
					registration.scope
				);
			},
			function(err) {
				console.log("ServiceWorker registration failed: ", err);
			}
		);
	});

	/**
	 * Open cache, cache specified files
	 */
	window.addEventListener("install", function(event) {
		event.waitUntil(
			caches.open(CACHE_NAME).then(function(cache) {
				console.log("Opened cache");
				return cache.addAll(urlsToCache);
			})
		);
	});

	/**
	 * Find resources as found in cache on page fetch
	 */
	window.addEventListener("fetch", function(event) {
		event.respondWith(
			caches.match(event.request).then(function(response) {
				if (response) {
					return response;
				}
				return fetch(event.request);
			})
		);
	});
}
