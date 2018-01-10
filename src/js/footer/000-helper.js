function AddClass( element, elementClass ) {
	return element.className += ' ' + elementClass;
}

function HasClass( element, elementClass ) {
	return element.className.match( new RegExp( '(\\s|^)' + elementClass + '(\\s|$)') );
}

function RemoveClass(element, elementClass) {
	if ( HasClass( element, elementClass ) ) {
		var reg = new RegExp( '(\\s|^)' + elementClass + '(\\s|$)' );
		element.className = element.className.replace( reg, ' ' );
	}
}
