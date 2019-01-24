var isCloud = document.querySelector( '.chameleon-staging' );
var iframe = document.querySelector( '#chameleon iframe' );
var form = document.querySelector( '.customise__form' );

var a11yInputs = document.querySelectorAll( '.a11y input' );
var paletteInputs = document.querySelectorAll( '.palette input' );
var customInputs = document.querySelectorAll( '.custom-color input' );
var colorSquares = document.querySelectorAll( '.color-square' );

var toggleColorInputButtons = document.querySelectorAll( '.toggle-color-input' );
var shareButton = document.getElementById( 'btn-share' );
var buttonList = document.querySelector( '.customise__form .au-btn__list' );
var loadingToast = document.querySelector( '.au-toast' );


// Global variables
var templateName = window.location.pathname.split( '/' )[ 2 ];


var colors = {
	text:           '#313131',
	action:         '#00698F',
	// focus:          '#9263DE',
	background:     '#FFFFFF',
	textDark:       '#FFFFFF',
	actionDark:     '#61DAFF',
	// focusDark:      '#C390F9',
	backgroundDark: '#135E70',
};

var paletteStyles = {
	defaultPalette: colors,
	green: {
		text:           '#313131',
		action:         '#026540',
		// focus:          '#AC1523',
		background:     '#FFFFFF',
		textDark:       '#FFFFFF',
		actionDark:     '#D7EA6A',
		// focusDark:      '#D2E771',
		backgroundDark: '#026540',
	},
	blue: {
		text:           '#313131',
		action:         '#0D979B',
		// focus:          '#9263DE',
		background:     '#FFFFFF',
		textDark:       '#FFFFFF',
		actionDark:     '#F2D814',
		// focusDark:      '#4569A0',
		backgroundDark: '#002341',
	}
};



/**
 * QueryToObject - Turns the url query into an object
 *
 * @param   {string} queryString - The query string, usually window.location.search
 * @returns {object}       - The key value object from the query string
 */
function QueryToObject( queryString ) {
	var paramObject = {};
	var splitQuery = queryString.substr( 1 ).split( '&' )

	for ( var i = 0; i < splitQuery.length; i++ ) {
		var keyValue = splitQuery[ i ].split( '=' );

		// Check there is a key value pair
		if( keyValue[ 0 ] ){
			paramObject[ keyValue[ 0 ] ] = decodeURIComponent( keyValue[ 1 ] ) || '';
		}
	}

	return paramObject;
};


/**
 * ObjectToQueryString - Turns a key value object into a url query string
 *
 * @param   {object} query - The key value object from the query string
 * @returns {string}       - The query string, usually window.location.search
 */
function ObjectToQueryString( query ) {
	var queryString = '?';

	for( var key in query ) {
		queryString += '&' + key + '=' + encodeURIComponent( query[ key ] );
	}

	return queryString;
};


/**
 * GetTextInputValues - Return the values of an array of inputs as an object
 *
 * @param   {array}  inputs - The inputs to get the values from
 * @returns {object}        - The key value object from the input values
 */
function GetTextInputValues( inputs ) {
	var formValues = {};

	for ( var i = 0; i < inputs.length; i++ ){
		formValues[ inputs[ i ].id ] = inputs[ i ].value;
	}

	return formValues;
};


/**
 * FillForm - Injects values into the form from the querystring
 *
 * @param {object} queryString - The query turned into an object
 */
function ApplyColors( queryString ) {
	var query = QueryToObject( queryString );

	for( var key in query ) {
		var input = document.getElementById( key );

		if( input ) {
			input.value = query[ key ];
		}
	}
}


/**
 * ApplyQueryToIframe - Applies the current website query to the iframe src
 * @param   {string} query - The query string, usually window.location.search
 */
function ApplyQueryToIframe( query ){
	// These two lines are hacky and should be replaced
	var template = templateName === 'home' ? '' : '/' + templateName;
	var iframeQuery = template + query.replace( '&palette=on&a11y=on', '' );

	// Need to fix this up
	var iframeSrc = isCloud ? "http://localhost:3000/chameleon" : "/chameleon";
	iframe.src = iframeSrc + iframeQuery;
}


/**
 * ApplyPalette - Applies a palette to the iframe and form values
 *
 * @param {string} paletteId - The palette to apply
 */
function ApplyPalette( paletteId ){
	var paletteValues = {};
	var palette = paletteStyles[ paletteId ];

	// Add the values to the palette, no blank values
	for( var key in colors ) {
		paletteValues[ key ] = palette[ key ] || '';
	}

	// Apply the colour scheme
	if( paletteValues ) {
		var queryFromInputs = ObjectToQueryString( paletteValues );

		ShowToast( loadingToast );
		ApplyColors( queryFromInputs );
		ApplyQueryToIframe( queryFromInputs );
		PushValuesToURL( customInputs );
		ApplyColorsToColorSquare( customInputs );
	}
}


/**
 * PushValuesToURL - Push the value of inputs to the URL
 *
 * @param {array}  inputs - The inputs to push the state from
 */
function PushValuesToURL( inputs ) {
	if( window.history.pushState ) {
		var inputsState = GetTextInputValues( inputs );
		var queryString = ObjectToQueryString( inputsState );

		// Replace DOM state with current color object
		window.history.pushState( inputsState , "Chameleon", queryString );
	}
}

/**
 * ApplyColorsToColorSquare - Adds background color to color square inside the color text inputs
 *
 * @param {array}  customInputs - The text inputs to select the color values from
 */
function ApplyColorsToColorSquare( customInputs ) {
	for ( var i = 0; i < customInputs.length; i++ ) {
		var color = customInputs[ i ].value;
		var colorSquare = document.getElementById( 'color-square--' + customInputs[ i ].id );

		colorSquare.removeAttribute( 'style' );
		RemoveClass( customInputs[ i ], 'au-text-input--invalid' );
		// assign color from text input to color square
		colorSquare.style.background = color;

		if( !colorSquare.style.background && customInputs[ i ].value !== "") {
			AddClass( customInputs[ i ], 'au-text-input--invalid' );
		}
	}
}


/**
 * ------------------------------------------------------------
 * Event Handlers
 * ------------------------------------------------------------
 */
// When the share button is clicked copy the current URL
AddEvent( shareButton, "click", function( event, $this ) {
	CopyString( window.location.href );
	var oldLabel = $this.innerHTML;
	$this.innerHTML = 'Copied';
	RemoveClass( $this, 'icon--copy' );
	AddClass( $this, 'icon--success' );

	setTimeout( function() {
		$this.innerHTML = oldLabel;
		RemoveClass( $this, 'icon--success' );
		AddClass( $this, 'icon--copy' );
	}, 1000 );
});


// Hide and show the customise color/palette when the button is pressed
for( var i = 0; i < toggleColorInputButtons.length; i++ ){
	AddEvent( toggleColorInputButtons[ i ], "click", function( event, $this ) {
		if( HasClass( form, 'show--palette ' )){
			RemoveClass( form, 'show--palette ' );
		}
		else {
			AddClass( form, 'show--palette ' );
		}
	});
}


// Toggle the color blindness filter on the iframe
for( var i = 0; i < a11yInputs.length; i++ ) {
	AddEvent( a11yInputs[ i ], "click", function( event, $this ) {
		iframe.setAttribute( 'class', 'js-filter--' + $this.id );
	});
}


// Add event handler to each `palette` input
for( var i = 0; i < paletteInputs.length; i++ ) {
	AddEvent( paletteInputs[ i ], "click", function( event, $this ) {
		ApplyPalette( $this.id );
	});
}


// Magical URL update as typing
if( window.history.pushState ) {
	// Add event handler to handle key press on form inputs.
	var timeout;
	for( var i = 0; i < customInputs.length; i++ ) {
		AddEvent( customInputs[ i ], "input", function( event, $this ) {

			// If the user presses the key before the timeout fires
			// clear the timeout and reset it
			if( timeout ) {
				clearTimeout( timeout );
				timeout = null;
			}

			// Create a new timeout that runs the functions after the time has ended
			timeout = setTimeout( function(){
				ShowToast( loadingToast );
				PushValuesToURL( customInputs );
				ApplyColors( window.location.search );
				ApplyQueryToIframe( window.location.search );
				ApplyColorsToColorSquare( [ $this ] );
			}, 100 );
		});
	}
}
// Show customise button when push state does not work
else {
	RemoveClass( buttonList, 'customise-btn--hide');
}

// Change focus to the input of the color square that was clicked
for( var i = 0; i < colorSquares.length; i++ ) {
	AddEvent( colorSquares[i], "click", function( event, $this ){
		var textInputId = $this.id.replace( 'color-square--', '' );
		document.getElementById( textInputId ).focus();
	})
}


// When the page is loaded, check for additional iframe loads
window.onload = function(){
	AddEvent( iframe, 'load', function( event, $this ) {
		HideToast( loadingToast );
	});
}



/**
 * ------------------------------------------------------------
 * On page load
 * ------------------------------------------------------------
 */
if( window.location.search ){
	ApplyColors( window.location.search );
}
else {
	var defaultColors = ObjectToQueryString( colors );
	ApplyColors( defaultColors );
}

ApplyColorsToColorSquare( customInputs );
