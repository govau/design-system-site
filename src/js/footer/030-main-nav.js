var mainNavToggles = document.querySelectorAll( '.au-main-nav__toggle--open, .au-main-nav__toggle--close, .au-main-nav__overlay' );

AddEvent( mainNavToggles, 'click', function( event, $this ) {
	PreventEvent( event );
	AU.mainNav.Toggle( $this );
});
