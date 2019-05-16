var tabItems = document.querySelectorAll( '.tabs button' );

// Hide and show based on the active class
AddEvent( tabItems, 'click', function( event, $this ) {
	PreventEvent( event );

	// Add and remove active class for tab links
	var currentTabItems = $this.parentElement.children;


	for( var i = 0; i < currentTabItems.length; i++ ) {
		RemoveClass( currentTabItems[ i ], 'tab-item--active' );
		currentTabItems[ i ].removeAttribute( 'aria-selected' );
		currentTabItems[ i ].setAttribute( 'tabindex', '1' );
	}

	AddClass( $this, 'tab-item--active' );
	$this.setAttribute( 'aria-selected', 'true' );
	$this.setAttribute( 'tabindex', '0' );
	$this.focus();

	// Add and remove active class for tab content
	var contentID = $this.getAttribute( 'aria-controls' );
	var content = document.getElementById( contentID );

	var currentTabContent = content.parentElement.children;

	for( var i = 0; i < currentTabContent.length; i++ ) {
		RemoveClass( currentTabContent[ i ], 'tab-content--active' );
	}

	AddClass( content, 'tab-content--active' );
});

// Add aria roles with javascript ( nojs should be visible )
var InitialiseTabs = function( tabs ) {

	// For each tab group add the aria-selected true to the active class
	for( var i = 0; i < tabs.length; i++ ) {
		if( HasClass( tabs[ i ], 'tab-item--active' ) ){
			tabs[ i ].setAttribute( 'aria-selected', 'true' );
		}
	}
};


// Add event for left and right key arrow press on tabs
AddEvent( tabItems, 'keyup', function( event, $this ){
	switch (event.keyCode ) {
		case 39:
			if( $this.nextElementSibling ) {
				$this.nextElementSibling.click();
			}
			else {
				$this.previousElementSibling.click();
			}
			break;
		case 37:
			if( $this.previousElementSibling ) {
				$this.previousElementSibling.click();
			}
			else {
				$this.nextElementSibling.click();
			}
			break;
	}
})

InitialiseTabs( tabItems );
