// Add, Has and Remove class for IE8
function AddClass( element, elementClass ) {
	return element.className += " " + elementClass;
}

function HasClass( element, elementClass ) {
	return element.className.match( new RegExp( "(\\s|^)" + elementClass + "(\\s|$)") );
}

function RemoveClass( element, elementClass ) {
	if( HasClass( element, elementClass ) ) {
		var reg = new RegExp( "(\\s|^)" + elementClass + "(\\s|$)" );
		element.className = element.className.replace( reg, " " );
	}
}


// Change EventListener to attachEvent
function AddEvent( elements, event, onEvent ) {
	if( elements ) {
		// Create an array of elements if a singular or array of elements is passed in
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// For each element add the correct event listener
		for( var i = 0; i < elements.length; i++ ) {
			if( typeof Element.prototype.addEventListener === "undefined" ) {

				// Make sure that we pass this
				( function( element, event ) {
					element.attachEvent( "on" + event, function( actualEvent ) {
						onEvent( actualEvent, element );
					});
				})( elements[ i ], event );
			}
			else {
				( function( element, event ) {
					element.addEventListener( event, function( actualEvent ) {
						onEvent( actualEvent, element );
					});
				})( elements[ i ], event );
			}
		}
	}
}


// Prevent event for IE8 and modern browsers
function PreventEvent( event ) {
	event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
}


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
