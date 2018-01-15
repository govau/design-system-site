function AddClass( element, elementClass ) {
	return element.className += ' ' + elementClass;
}

function HasClass( element, elementClass ) {
	return element.className.match( new RegExp( '(\\s|^)' + elementClass + '(\\s|$)') );
}

function RemoveClass( element, elementClass ) {
	if ( HasClass( element, elementClass ) ) {
		var reg = new RegExp( '(\\s|^)' + elementClass + '(\\s|$)' );
		element.className = element.className.replace( reg, ' ' );
	}
}

// IE fallback for attachEvent
function AddEvent( element, event, onEvent ) {
	if ( element.attachEvent ) {
		return element.attachEvent( 'on' + event, onEvent );
	}
	else {
		return element.addEventListener( event, onEvent, false);
	}
}

function PreventEvent( event ) {
	event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
}

