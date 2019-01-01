var iframeContainer = document.getElementById( 'chameleon' );
var iframe = document.querySelector( '#chameleon iframe' );

var a11yInputs = document.querySelectorAll( '.a11y input' );
var paletteInputs = document.querySelectorAll( '.palette input' );
var customInputs = document.querySelectorAll( '.custom-color input' );

var shareBtn = document.getElementById( 'btn-share' );

var colors = {
	text:           '',
	action:         '',
	focus:          '',
	background:     '',
	textDark:       '',
	actionDark:     '',
	focusDark:      '',
	backgroundDark: '',
};

var paletteStyles = {
	default: colors,
	green: {
		action:         '#026540',
		focus:          '#AC1523',
		actionDark:     '#F9F9F9',
		focusDark:      '#D2E771',
		backgroundDark: '#026540',
	},
	blue: {
		action:         '#0D979B',
		actionDark:     '#F2D814',
		focusDark:      '#4569A0',
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

	ApplyQueryToIframe( queryString );
}


/**
 * ApplyQueryToIframe - Applies the current website query to the iframe src
 * @param   {string} query - The query string, usually window.location.search
 */
function ApplyQueryToIframe( query ){
	// This is hacky and should be replaced
	var inputQuery = query.replace( '&palette=on&a11y=on', '' );
	iframe.src = ( 'http://localhost:3000/chameleon' + inputQuery );
}


/**
 * ApplyPalette - Applies a palette to the iframe and form values
 *
 * @param {string} paletteId - The palette to apply
 */
function ApplyPalette( paletteId ){
	var paletteValues = {};
	var palette = paletteStyles[ paletteId ];

	// For each color
	for( var key in colors ){
		paletteValues[ key ] = palette[ key ] || colors[ key ];
	}

	// Apply the colour scheme
	if( paletteValues ){
		var queryFromInputs = ObjectToQueryString( paletteValues );

		ApplyColors( queryFromInputs );
		ApplyQueryToIframe( queryFromInputs );
	}
}


/**
 * Push the updated color state to DOM with title 'Chameleon',
 * set URL to ColorStateToString()
 */
function UpdateState() {
	var formData = GetTextInputValues( customInputs );
	var colorStateURL = ObjectToQueryString( formData );

	// Replace DOM state with current color object
	window.history.pushState( formData , "Chameleon", colorStateURL );

	// Set iframe src to mirror current DOM state
	ApplyColors( window.location.search );
}


/**
 * ------------------------------------------------------------
 * Event Handlers
 * ------------------------------------------------------------
 */
// When the share button is clicked copy the current URL
AddEvent( shareBtn, "click", function( event, $this ) {
	CopyString( window.location.href );
});


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

// Add event handler to handle key press on form inputs.
var timeout;
for( var i = 0; i < customInputs.length; i++ ) {
	AddEvent( customInputs[ i ], "keyup", function( event, $this ) {
		// Add the loading class
		if( !HasClass( iframeContainer, 'chameleon--loading' ) ) {
			AddClass( iframeContainer, 'chameleon--loading' );
		}

		if( timeout ) {
			clearTimeout( timeout );
			timeout = null;
		}

		timeout = setTimeout( function(){
			UpdateState( $this );
			RemoveClass( iframeContainer, 'chameleon--loading' );
		}, 500 );
	});
}


/**
 * ------------------------------------------------------------
 * On page load
 * ------------------------------------------------------------
 */
ApplyColors( window.location.search );
