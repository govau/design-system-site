var accordions = document.querySelectorAll( '.js-accordion' );

AddEvent( accordions, 'click', function( event, $this ) {
	PreventEvent( event );
	AU.accordion.Toggle( $this );
});
