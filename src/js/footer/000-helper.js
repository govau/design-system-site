function AddClass( element, elementClass ) {
	return element.className += ' ' + elementClass;
}

function HasClass( element, elementClass ) {
	return element.className.match( new RegExp( '(\\s|^)' + elementClass + '(\\s|$)') );
}

function RemoveClass( element, elementClass ) {
	if( HasClass( element, elementClass ) ) {
		var reg = new RegExp( '(\\s|^)' + elementClass + '(\\s|$)' );
		element.className = element.className.replace( reg, ' ' );
	}
}

// IE fallback for attachEvent
function AddEvent( element, event, onEvent ) {

	if( element ) {
		// Create an array of elements if a singular or array of elements is passed in
		var elementArray = [ element ];
		if( element.constructor.name === 'NodeList' ) {
			elementArray = Array.prototype.slice.call( element );
		}

		// Check if we are using attachEvent or addEventListener
		var _isAttachEvent = false;
		if( elementArray[0].attachEvent ) {
			_isAttachEvent = true;
		}

		// For each element add the correct event listener
		for( var i = 0; i < elementArray.length; i++ ) {
			if( _isAttachEvent ) {
				elementArray[ i ].attachEvent( 'on' + event, onEvent );
			}
			else {
				elementArray[ i ].addEventListener( event, onEvent, false);
			}
		}
	}
}

function PreventEvent( event ) {
	event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
}

