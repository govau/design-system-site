//scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach( function( anchor ){
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
    });
});