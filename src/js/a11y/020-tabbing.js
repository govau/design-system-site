var tabs = document.querySelector( '.js-tabbing' );
if( tabs !== null ) {
	tabs.insertAdjacentHTML(
		'beforebegin',
		'<div class="bar">' +
		'<button type="button" class="a11y-button a11y-button--soft js-tabbing-switch">Show tabbing</button>' +
		'</div>'
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
		stopTab( interval, $this );
	}
});

AddEvent( document.querySelector( 'body' ), 'keypress', function( event, $this ) {
	stopTab( interval, document.querySelector( '.js-tabbing-switch' ) )
});

function stopTab( interval, $this ) {
	RemoveClass( $this, 'is-on' );
	$this.innerText = 'Show tabbing';
	clearInterval( interval );
}

function tab() {
	var items = document.querySelectorAll( '.js-focus-me' );
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
