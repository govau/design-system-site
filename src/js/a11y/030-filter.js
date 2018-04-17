var filters = document.querySelector( '.js-filter' );
if( filters !== null ) {
	var active = document.getElementById( 'filter-stylesheet' ).getAttribute( 'href' ).split( '/' );
	active = active[ active.length - 1 ].replace( '.css', '' );

	filters.insertAdjacentHTML(
		'afterbegin',
		'<div class="bar">' +
		'<button type="button" class="a11y-button js-filter-btn' + ( active == 'deuteranopia' ? ' is-active' : '' ) + '" data-filter="deuteranopia">' +
			'<span class="sronly">Apply </span>Deuteranopia<span class="sronly"> color filter</span>' +
		'</button>' +
		'<button type="button" class="a11y-button js-filter-btn' + ( active == 'tritanopia' ? ' is-active' : '' ) + '" data-filter="tritanopia">' +
			'<span class="sronly">Apply </span>Tritanopia<span class="sronly"> color filter</span>' +
		'</button>' +
		'</div>'
	);
}

AddEvent( document.querySelectorAll( '.js-filter-btn' ), 'click', function( event, $this ) {
	var sheet = document.getElementById( 'filter-stylesheet' );
	var filter = $this.getAttribute( 'data-filter' );
	var url = sheet.getAttribute( 'data-' + filter );

	sheet.setAttribute( 'href', url );

	var allButtons = document.querySelectorAll( '.js-filter-btn' );
	for( var i = 0; i < allButtons.length; i++ ) {
		RemoveClass( allButtons[ i ], 'is-active' );
	}

	AddClass( $this, 'is-active' );
});
