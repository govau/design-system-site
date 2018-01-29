var accordions = document.querySelectorAll( '.js-au-accordion' );

AddEvent( accordions, 'click', function( event ) {
	PreventEvent( event );
	AU.accordion.Toggle( this );
});
