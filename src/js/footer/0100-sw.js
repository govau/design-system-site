if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js');
    });
}