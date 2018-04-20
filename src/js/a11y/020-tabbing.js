/**
 * Add the tab button to each tab section
 */
var tabs = document.querySelector( '.js-tabbing' );
if( tabs !== null ) {
	tabs.insertAdjacentHTML(
		'afterbegin',
		'<div class="bar">' +
		'<button type="button" class="a11y-button a11y-button--soft js-tabbing-switch">Show tabbing</button>' +
		'</div>'
	);
}


/**
 * Toggle the tabs on the button click
 */
var interval = 0;
AddEvent( document.querySelector( '.js-tabbing-switch' ), 'click', function( event, $this ) {
	var _isOn = HasClass( $this, 'is-on' );

	if( _isOn === null ) {
		AddClass( $this, 'is-on' );
		$this.innerText = 'Stop tabbing';
		interval = Tab();
	}
	else {
		StopTab( interval, $this );
	}
});


/**
 * Event listener for when the user scrolls or uses the tab key to stop Tab() function
 */
AddEvent( document.querySelector( 'body' ), 'keydown', function( event, $this ) {
	StopTab( interval, document.querySelector( '.js-tabbing-switch' ) )
});


/**
 * Move the tab through each element with the .js-focus-me class
 */
function Tab() {
	var items = document.querySelectorAll( '.js-focus-me' );
	var loop = 0;

	return setInterval( function() {
		if( loop >= items.length ) {
			StopTab( interval, document.querySelector( '.js-tabbing-switch' ) );
		}

		items[ loop ].focus();

		loop ++;
	}, 500 );
}


/**
 * Stop the Tab() function
 */
function StopTab( interval, $this ) {
	RemoveClass( $this, 'is-on' );
	$this.innerText = 'Show tabbing';
	clearInterval( interval );
	$this.focus();
}
