// Lock the navigation inside the menu when it's open
var lockTop       = document.getElementById( 'lockTop' );
var lockBottom    = document.getElementById( 'lockBottom' );
var mainMenuLinks = document.querySelectorAll( '.header a' );


// Check for loss of focus on the last link in the menu
lockTop.addEventListener( 'focus', function( event ) {
	event.preventDefault();
	mainMenuLinks[ mainMenuLinks.length - 1 ].focus();
});

lockBottom.addEventListener( 'focus', function( event ) {
	event.preventDefault();
	mainMenuLinks[ 0 ].focus();
});


// The menu and the link to toggle the menu
var mainMenu       = document.getElementById( 'mainmenu' );
var mainMenuToggle = document.getElementById( 'mainmenu-toggle' );


// Open and close the menu
function ToggleMenu() {

	AU.accordion.Toggle( mainMenuToggle, undefined,  {
		afterOpen: function() {
			return;
		},
		afterClose: function() {
			mainmenu.removeAttribute( "style" );
		},
	});

	if( HasClass( document.body, 'mainmenu-is-closed' ) ) {
		mainMenuToggle.innerHTML = '<span>Close menu</span>';
		RemoveClass( document.body, 'mainmenu-is-closed' );
		AddClass( document.body, 'mainmenu-is-open' );
		lockTop.setAttribute( "tabindex", 0 );
		lockBottom.setAttribute( "tabindex", 0 );
	}
	else {
		mainMenuToggle.innerHTML = '<span>Open menu</span>';
		RemoveClass( document.body, 'mainmenu-is-open' );
		AddClass( document.body, 'mainmenu-is-closed' );
		lockTop.removeAttribute( "tabindex" );
		lockBottom.removeAttribute( "tabindex" );
	}
}


// On click of the menu toggle open or close the menu
mainMenuToggle.addEventListener( 'click', function( event ) {
	event.preventDefault();
	ToggleMenu();
});


// Close the menu if the overlay is clicked
var overlay = document.getElementById( 'overlay' );
overlay.addEventListener( 'click', function( event ) {
	event.preventDefault();
	ToggleMenu();
});
