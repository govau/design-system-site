var accordions = document.querySelectorAll( '.js-au-accordion' );

AddEvent( accordions, 'click', function( event, $this ) {
	PreventEvent( event );
	AU.accordion.Toggle( $this );
});
