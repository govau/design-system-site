// Focus trap the navigation inside the menu when it's open
var mainMenuToggle  = document.getElementById( 'mainmenu-toggle' );
var overlay         = document.getElementById( 'overlay' );


var focusTrapTop    = document.getElementById( 'focustrap-top' );
var focusTrapBottom = document.getElementById( 'focustrap-bottom' );
var mainMenuLinks   = document.querySelectorAll( '.header a' );


function ToggleMenu() {
	AU.accordion.Toggle( mainMenuToggle, undefined, {
		onOpen: function() {
			mainMenuToggle.innerHTML = 'Close menu';         // Change the text in the toggle
			focusTrapTop.setAttribute( "tabindex", 0 );      // Enable the focus trap
			focusTrapBottom.setAttribute( "tabindex", 0 );
			AddClass( document.body, 'overlay--open' );      // Stop scrolling when overlay is open
		},
		onClose: function() {
			mainMenuToggle.innerHTML = 'Open menu';
			focusTrapTop.removeAttribute( "tabindex" );
			focusTrapBottom.removeAttribute( "tabindex" );
			RemoveClass( document.body, 'overlay--open' );
		},
	});
}


// On click of the menu toggle open or close the menu
mainMenuToggle.addEventListener( 'click', function( event ) {
	event.preventDefault();
	ToggleMenu();
});


// Close the menu if the overlay is clicked
overlay.addEventListener( 'click', function( event ) {
	event.preventDefault();
	ToggleMenu();
});


// Move the focus to the correct item when it lands on a trap
focusTrapTop.addEventListener( 'focus', function( event ) {
	event.preventDefault();
	mainMenuLinks[ mainMenuLinks.length - 1 ].focus();
});

focusTrapBottom.addEventListener( 'focus', function( event ) {
	event.preventDefault();
	mainMenuLinks[ 0 ].focus();
});
