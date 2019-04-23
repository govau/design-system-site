// var tabItems = document.querySelectorAll( '.tabs .au-link-list button' );

// // Hide and show based on the active class
// AddEvent( tabItems, 'click', function( event, $this ) {
// 	PreventEvent( event );

// 	// Add and remove active class for tab links
// 	var currentTabItems = $this.parentElement.children;

// 	for( var i = 0; i < currentTabItems.length; i++ ) {
// 		RemoveClass( currentTabItems[ i ], 'tab-item--active' );
// 		currentTabItems[ i ].removeAttribute( 'aria-selected' );
// 	}

// 	AddClass( $this, 'tab-item--active' );
// 	$this.setAttribute( 'aria-selected', 'true' );

// 	// Add and remove active class for tab content
// 	var contentID = $this.getAttribute( 'aria-controls' );
// 	var content = document.getElementById( contentID );

// 	var currentTabContent = content.parentElement.children;

// 	for( var i = 0; i < currentTabContent.length; i++ ) {
// 		RemoveClass( currentTabContent[ i ], 'tab-content--active' );
// 	}

// 	AddClass( content, 'tab-content--active' );
// 	content.focus();
// });

// // Add aria roles with javascript ( nojs should be visible )
// var InitialiseTabs = function( tabs ) {

// 	// For each tab group add the aria-selected true to the active class
// 	for( var i = 0; i < tabs.length; i++ ) {
// 		if( HasClass( tabs[ i ], 'tab-item--active' ) ){
// 			tabs[ i ].setAttribute( 'aria-selected', 'true' );
// 		}
// 	}
// }

// InitialiseTabs( tabItems );