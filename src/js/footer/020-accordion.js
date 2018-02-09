var accordions = document.querySelectorAll( '.js-accordion' );

AddEvent( accordions, 'click', function( event, $this ) {
	PreventEvent( event );
	AU.accordion.Toggle( $this );
});


var fastAccordions = document.querySelectorAll( '.js-header-accordion' );

AddEvent( fastAccordions, 'click', function( event, $this ) {
	PreventEvent( event );
	AU.accordion.Toggle( $this, 150 );
});
