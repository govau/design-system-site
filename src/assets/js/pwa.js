// Does the browser support service workers?
if ("serviceWorker" in navigator) {
	// Load and register this service worker configuration.
	window.addEventListener("load", function() {
		navigator.serviceWorker.register("/assets/js/serviceWorker.js").then(
			function(registration) {
				if (registration.installing) {
					console.log("Service worker installing");
				} else if (registration.waiting) {
					console.log("Service worker installed");
				} else if (registration.active) {
					console.log("Service worker active");
				}

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
}