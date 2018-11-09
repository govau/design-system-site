var tabItems = document.querySelectorAll( '.tabs .au-link-list a' );

// Hide and show based on the active class

AddEvent( tabItems, 'click', function( event, $this ) {
	PreventEvent( event );

	// Add and remove active class for tab links
	var currentTabItems = $this.parentElement.parentElement.children;

	for( var i = 0; i < currentTabItems.length; i++ ) {
		RemoveClass( currentTabItems[ i ], 'tab-item--active' );
		currentTabItems[ i ].children[ 0 ].removeAttribute( 'aria-selected' );
	}

	AddClass( $this.parentElement, 'tab-item--active' );
	$this.setAttribute( 'aria-selected', 'true' );

	// Add and remove active class for tab content
	var content = document.getElementById( $this.hash.substr( 1 ) );
	var currentTabContent = content.parentElement.children;

	for( var i = 0; i < currentTabContent.length; i++ ) {
		RemoveClass( currentTabContent[ i ], 'tab-content--active' );
		currentTabContent[ i ].setAttribute( 'aria-hidden', 'true' );
	}

	content.removeAttribute( 'aria-hidden' );
	AddClass( content, 'tab-content--active' );
	content.focus();
});

// Add aria roles with javascript ( nojs should be visible )
InitialiseTabs = function( tabs ){

	// For each tab group
	for( var i = 0; i < tabs.length; i++ ) {

		if( HasClass( tabs[ i ].parentElement, 'tab-item--active' ) ){
			tabs[ i ].setAttribute( 'aria-selected', 'true' );
		}

		// Get the tab content
		var content = document.getElementById( tabs[ i ].hash.substr( 1 ) );
		var currentTabContent = content.parentElement.children;

		// Add the correct aria roles for tab content
		for( var j = 0; j < currentTabContent.length; j++ ) {
			if( !HasClass( currentTabContent[ j ], 'tab-content--active' ) ){
				currentTabContent[ j ].setAttribute( 'aria-hidden', 'true' );
			}
		}
	}
}

InitialiseTabs( tabItems );
