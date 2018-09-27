var filters = document.querySelector( '.js-filter' );
if( filters !== null ) {
	filters.insertAdjacentHTML(
		'afterbegin',
		'<div class="bar">' +
		'<button type="button" class="a11y-button js-filter-btn is-active" data-filter="deuteranopia">' +
			'<span class="sronly">Apply </span>Deuteranopia<span class="sronly"> color filter</span>' +
		'</button>' +
		'<button type="button" class="a11y-button js-filter-btn" data-filter="tritanopia">' +
			'<span class="sronly">Apply </span>Tritanopia<span class="sronly"> color filter</span>' +
		'</button>' +
		'</div>'
	);
}

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
