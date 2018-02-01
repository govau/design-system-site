var tabItems = document.querySelectorAll( '.tabs .au-link-list a' );

// Hide and show based on the active class

AddEvent( tabItems, 'click', function( event, $this ) {
	PreventEvent( event );

	// Check if the menu item is NOT already active
	if( !HasClass( $this.parentElement, 'tab-item--active' ) ){

		// Add and remove active class for tab links
		var currentTabItems = $this.parentElement.parentElement.children;
		for( var i = 0; i < currentTabItems.length; i++ ) {
			RemoveClass( currentTabItems[ i ], 'tab-item--active' );
		}
		AddClass( $this.parentElement, 'tab-item--active' );

		// Add and remove active class for tab content
		var content = document.getElementById( $this.hash.substr( 1 ) );
		var currentTabContent = content.parentElement.children;
		for( var i = 0; i < currentTabContent.length; i++ ) {
			RemoveClass( currentTabContent[ i ], 'tab-content--active' );
		}
		AddClass( content, 'tab-content--active' );

	}
});

