window.addEventListener( 'load', function() {

	var mainmenu        = document.getElementById( 'mainmenu' );
	var mainmenuToggle  = document.getElementById( 'mainmenu-toggle' );
	var overlay         = document.getElementById( 'overlay' );

	var focustrapTop    = document.getElementById( 'focustrap-top' );
	var focustrapBottom = document.getElementById( 'focustrap-bottom' );
	var mainmenuLinks   = document.querySelectorAll( '.header a' );


	function ToggleMenu() {
		AU.accordion.Toggle( mainmenuToggle, undefined, {
			onOpen: function() {
				mainmenuToggle.innerHTML = 'Close menu';         // Change the text in the toggle
				focustrapTop.setAttribute( "tabindex", 0 );      // Enable the focus trap
				focustrapBottom.setAttribute( "tabindex", 0 );
				AddClass( document.body, 'overlay--open' );      // Stop scrolling when overlay is open
			},
			onClose: function() {
				mainmenuToggle.innerHTML = 'Open menu';
				focustrapTop.removeAttribute( "tabindex" );
				focustrapBottom.removeAttribute( "tabindex" );
				RemoveClass( document.body, 'overlay--open' );
			},
		});
	}


	// Enable accordion
	AddClass( mainmenu, 'au-accordion__body au-accordion--closed' );


	// On click of the menu toggle open or close the menu
	mainmenuToggle.addEventListener( 'click', function( event ) {
		event.preventDefault();
		ToggleMenu();
	});


	// Close the menu if the overlay is clicked
	overlay.addEventListener( 'click', function( event ) {
		event.preventDefault();
		ToggleMenu();
	});


	// Move the focus to the correct item when it lands on a trap
	focustrapTop.addEventListener( 'focus', function( event ) {
		event.preventDefault();
		mainmenuLinks[ mainmenuLinks.length - 1 ].focus();
	});

	focustrapBottom.addEventListener( 'focus', function( event ) {
		event.preventDefault();
		mainmenuLinks[ 0 ].focus();
	});

});

