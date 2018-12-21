var frames = document.getElementsByTagName( 'iframe' )
var a11yInputs = document.getElementsByName( 'a11y' );
var paletteInputs = document.getElementsByName( 'palette' );
var inputs = document.querySelectorAll('.form-item');
var resetBtn = document.getElementsByName( 'btn-reset' );
var shareBtn = document.getElementsByName( 'btn-share' );
var colors = GetColorState();

var queryObject = QueryToObject();

/**
 * ------------------------------------------------------------
 * Event Handlers
 * ------------------------------------------------------------
 */
// Add event handler to share button
AddEvent(shareBtn[0], "click", function( event, $this ) {
	// Copy the current window URL to clipboard
	CopyString( window.location.href );
});

// Add event handler to each `a11y` input
for ( var i = 0; i < a11yInputs.length; i++ ) {
	AddEvent( a11yInputs[ i ], "click", function( event, $this ) {
		ApplyA11yToFrames( "in-" + $this.id )
	});
}

// Add event handler to each `palette` input
for ( var i = 0; i < paletteInputs.length; i++ ) {
	AddEvent( paletteInputs[ i ], "click", function( event, $this ) {
		FillPaletteColors( $this.id )
	});
}

// Add event handler to handle key press on form inputs.
var timeout;
for ( var i = 0; i < inputs.length; i++ ) {
	AddEvent( inputs[i].children[0].children[0], "keyup", function( event, $this ) {
		if( timeout ){
			clearTimeout( timeout );
			timeout = null;
		}
		
		timeout = setTimeout( function(){ UpdateState( $this ) }, 250 );
	});
}


/**
 * Prefill the form given a color palette selection ( e.g 'ato' prefills the form with ATO colors )
 */
function FillPaletteColors( elementId ) {
	var styles = {
		mygov: {
				text:           '',
				action:         '#026540',
				focus:          '#ac1523',
				background:     '',
				textDark:       '#ffffff',
				actionDark:     '#f9f9f9',
				focusDark:      '#D2E771',
				backgroundDark: '#026540',
		},
		ato: {
			text:           '',
			action:         '#0D979B',
			focus:          '',
			background:     '',
			textDark:       '#ffffff',
			actionDark:     '#F2D814',
			focusDark:      '#4569a0',
			backgroundDark: '#002341',
		}
	}

	for ( key in styles ) {
		if ( key == elementId ) {
			// Fill form inputs
			FillFormColors( styles[key] );
			
			UpdateState();
		}
	}
}


/**
 * FillForm - Fills the form with the parameters in the URL
 */
function FillFormColors( colorObject ) {
	if ( colorObject ) {
		for ( var key in colorObject ){
			var input = document.getElementById( key )
			if ( input ) {
				input.value = colorObject[key];
			}
		}
	}
	else {
		for ( var key in queryObject ){
			var input = document.getElementById( key )
			if ( input ) {
				input.value = queryObject[key];
			}
		}
	}
}


/**
 * QueryToObject - Turns the url query into an object
 */
function QueryToObject() {
	var paramObject = {};

	if ( window.location.search ) {
		var paramString = window.location.search
		var query = paramString.substr( 1 ).split( '&' )

		for ( var i = 0; i < query.length; i++ ){
			var keyValue = query[i].split( '=' );
			paramObject[ keyValue[ 0 ] ] = decodeURIComponent( keyValue[ 1 ] ).split( '+' ).join( '' );
		}
	}

	return paramObject;
}


/**
 * ApplyColors - Applies the colours to the iframe
 */
function ApplyColours(){
	paramString = window.location.search;
	for ( var i = 0; i < frames.length; i++ ) {
		frames[ i ].src = ( 'http://localhost:3000/chameleon' + paramString );
		// frames[ i ].src = ( 'http://10.0.2.2:3000/chameleon' + paramString );
	}
}


/**
 * ApplyA11yToFrames - Set a filter class to all frames given a selected a11y radio input selection.
 * @param { string } filter - A11y filter selected ( e.g greyscale, deuteranopia )
 */
function ApplyA11yToFrames ( filterId  ) {
	for ( var i = 0; i < frames.length; i++ ) {
		frames[ i ].setAttribute( 'class', 'js-filter--' + filterId.split("in-")[2] )
	}
}


/**
 * Function binding onchange a11y radio input
 * @param { HTMLElement } element
 */
function ApplyFilter( element ) {
	ApplyA11yToFrames( element.id );
}


/**
 * Push the updated color state to DOM with title 'Chameleon', 
 * set URL to ColorStateToString()
 */
function UpdateState() {
	var formData = GetFormValues();
	var colorStateURL = ColorStateToString( formData );

	// Replace DOM state with current color object
	window.history.pushState( formData , "Chameleon", colorStateURL );

	// Set iframe src to mirror current DOM state
	ApplyColours();
}


/**
 * Return the color keys object as a URL param string 
 * @param {object} colorState - Object with color keys
 */
function ColorStateToString( colorState ) {
	var result = "?";

	for (var key in colorState ) {
		if ( colorState[ key ] ) {
			result += key + "=" + encodeURIComponent( colorState[ key ] ) + "&"
		}
	}
	
	return result;
}


/**
 * Return object of color keys
 */
function GetColorState() {
	return {
		text:           '',
		action:         '',
		focus:          '',
		background:     '',
		textDark:       '',
		actionDark:     '',
		focusDark:      '',
		backgroundDark: '',
	}
}


/**
 * Return the form values as object at any point in time
 */
function GetFormValues() {
	var values = GetColorState();

	for ( var i = 0; i < inputs.length; i++ ){
		var inputId = inputs[i].children[0].children[0].id;
		values[ inputId ] = inputs[i].children[0].children[0].value;
	}

	return values;
}


/**
 * ------------------------------------------------------------
 * On page load
 * ------------------------------------------------------------
 */
ApplyColours();

FillFormColors();

// Set Reset link href to window location without search query
document.getElementById("btn-reset").href = window.location.href.replace(window.location.search, "")