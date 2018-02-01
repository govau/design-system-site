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

function Includes( search, start ){
	if (typeof start !== 'number') {
		start = 0;
	}

	if (start + search.length > this.length) {
		return false;
	} else {
		return this.indexOf(search, start) !== -1;
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
					element.attachEvent( "on" + event, function(){
						onEvent( "on" + event, element );
					});
				})( elements[ i ], event );
			}
			else {
				( function( element, event ) {
					element.addEventListener( event, function(){
						onEvent( event, element );
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

