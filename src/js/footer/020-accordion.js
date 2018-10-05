var accordions = document.querySelectorAll( '.js-accordion, .au-side-nav .js-au-accordion' );

AddEvent( accordions, 'click', function( event, $this ) {
	PreventEvent( event );
	AU.accordion.Toggle( $this );
});
