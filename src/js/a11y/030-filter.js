var filters = document.querySelector( '.js-filter' );
if( filters !== null ) {
	var active = document.getElementById('filter-stylesheet').getAttribute('href').split('/');
	active = active[ active.length - 1 ].replace('.css', '');

	filters.insertAdjacentHTML(
		'beforebegin',
		'<button type="button" class="a11y-button js-filter' + ( active == 'deuteranopia' ? ' is-active' : '' ) + '" data-filter="deuteranopia">Deuteranopia</button>' +
		'<button type="button" class="a11y-button js-filter' + ( active == 'tritanopia' ? ' is-active' : '' ) + '" data-filter="tritanopia">Tritanopia</button>'
	);
}

AddEvent( document.querySelectorAll( '.js-filter' ), 'click', function( event, $this ) {
	var sheet = document.getElementById('filter-stylesheet');
	var filter = $this.getAttribute('data-filter');
	var url = sheet.getAttribute( 'data-' + filter );

	sheet.setAttribute('href', url);

	var allButtons = document.querySelectorAll( '.js-filter' );
	for( var i = 0; i < allButtons.length; i++ ) {
		RemoveClass( allButtons[ i ], 'is-active' );
	}

	AddClass( $this, 'is-active' );
});
