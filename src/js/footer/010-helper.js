// Add, Has and Remove class for IE8
function AddClass( element, elementClass ) {
	return element.className += " " + elementClass;
}

function HasClass( element, elementClass ) {
	return element.className.match( new RegExp( "(\\s|^)" + elementClass + "(\\s|$)") );
}

function RemoveClass( element, elementClass ) {
	if( HasClass( element, elementClass ) ) {
		// This adds a space every time a class is removed, we should fix this
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


// A simple debounce function to run a function after it has stopped being called for a certain amount of time
function Debounce( runThisFunction, wait, immediate ) {
	var timeout;

	return function() {
		var context = this;
		var args    = arguments;

		var later = function() {
			timeout = null;
			if (!immediate) runThisFunction.apply( context, args );
		};

		var callNow = immediate && !timeout;

		clearTimeout( timeout );
		timeout = setTimeout( later, wait );

		if ( callNow ) {
			runThisFunction.apply( context, args );
		};
	};
};



// Prevent event for IE8 and modern browsers
function PreventEvent( event ) {
	event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
}


// Get elements style
function GetStyle( element, property ) {
	return (
		typeof getComputedStyle !== 'undefined'
			? getComputedStyle( element, null)
			: element.currentStyle
	)[ property ]; // avoid getPropertyValue altogether
}


// Get all the selected items in a form
function GetSelectedFormItems( id ){
	var formInputs = document.getElementById( id ).getElementsByTagName( 'input' );
	var selected = {};

	// For each form element
	for( var i = 0; i < formInputs.length; i++ ){

		// If they are checked create a key and array of values
		if ( formInputs[ i ].checked ){
			if( selected[ formInputs[ i ].name ] ){
				selected[ formInputs[ i ].name ].push( formInputs[ i ].defaultValue );
			}
			else{
				selected[ formInputs[ i ].name ] = [ formInputs[ i ].defaultValue ]
			}
		}
	}

	return selected;
}


// IE8+ complaint polyfill for String.trim();
if(typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
	  return this.replace(/^\s+|\s+$/g, '');
	};
}

//IE8 compliant polyfill for next element sibling
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("nextElementSibling" in document.documentElement)){
    Object.defineProperty(Element.prototype, "nextElementSibling", {
        get: function(){
            var e = this.nextSibling;
            while(e && 1 !== e.nodeType)
                e = e.nextSibling;
            return e;
        }
    });
}

//IE8 compliant polyfill for previous element sibling
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("previousElementSibling" in document.documentElement)){
	Object.defineProperty(Element.prototype, "previousElementSibling", {
	  get: function(){
		var e = this.previousSibling;
		while(e && 1 !== e.nodeType)
		  e = e.previousSibling;
		return e;
	  }
	});
  }
