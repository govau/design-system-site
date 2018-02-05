var tabs = document.querySelector( '.js-tabbing' );
if( tabs !== null ) {
	tabs.insertAdjacentHTML(
		'beforebegin',
		'<button type="button" class="a11y-button js-tabbing-switch">Show tabbing</button>'
	);
}

var interval = 0;
AddEvent( document.querySelector( '.js-tabbing-switch' ), 'click', function( event, $this ) {
	var _isOn = HasClass( $this, 'is-on' );

	if( _isOn === null ) {
		AddClass( $this, 'is-on' );
		$this.innerText = 'Stop tabbing';
		interval = tab();
	}
	else {
		RemoveClass( $this, 'is-on' );
		$this.innerText = 'Show tabbing';
		clearInterval( interval );
	}
});

function tab() {
	var items = document.querySelector( '.js-tabbing' ).children;
	var loop = 0;

	items[ loop ].focus();
	loop ++;

	return setInterval( function() {
		items[ loop ].focus();
		loop ++;

		if( loop >= items.length ) {
			loop = 0;
		}
	}, 1000 );
}
