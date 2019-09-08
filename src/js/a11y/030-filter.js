var filters = document.querySelector( '.js-filter' );
// if( filters !== null ) {
// 	filters.insertAdjacentHTML(
// 		'afterbegin',
		
// 	);
// }

AddEvent( document.querySelectorAll( '.js-filter-btn' ), 'click', function( event, $this ) {
	var newFilter = 'js-filter--' + $this.getAttribute( 'data-filter' );

	var allButtons = document.querySelectorAll( '.js-filter-btn' );
	for( var i = 0; i < allButtons.length; i++ ) {
		var oldFilter = 'js-filter--' + allButtons[ i ].getAttribute( 'data-filter' );
		RemoveClass( filters, oldFilter );
		RemoveClass( allButtons[ i ], 'is-active' );
	}

	AddClass( filters, newFilter );
	AddClass( $this, 'is-active' );
});
