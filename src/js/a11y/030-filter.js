var filters = document.querySelector( '.js-filter' );
if( filters !== null ) {
	filters.insertAdjacentHTML(
		'beforebegin',
		'<button type="button" class="a11y-button js-filter" data-filter="protanopia">Protanopia</button>' +
		'<button type="button" class="a11y-button js-filter" data-filter="deuteranopia">Deuteranopia</button>'
	);
}

AddEvent( document.querySelector( '.js-filter' ), 'click', function( event, $this ) {
	var sheet = document.getElementById('filter-stylesheet');
	var filter = $this.getAttribute('data-filter');
	var url = sheet.getAttribute( 'data-' + filter );

	sheet.setAttribute('href', url);
});
