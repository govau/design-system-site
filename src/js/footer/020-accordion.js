var accordions = document.querySelectorAll( '.js-au-accordion' );

if( accordions.length ) {
	AddEvent( accordions, 'click', function( event ) {
		PreventEvent( event );
		AU.accordion.Toggle( this );
	});
}
