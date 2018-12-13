var chameleon = document.querySelector( '.chameleon' );

if( chameleon ){
	var frames = document.querySelectorAll( 'iframe' )
	var a11yInputs = document.getElementsByName( 'a11y' );
	var paletteInputs = document.getElementsByName( 'palette' );
	var resetBtn = document.getElementsByName( 'btn-reset' );
	var shareBtn = document.getElementsByName( 'btn-share' );

	var queryObject = QueryToObject();

	// Reset button event handler
	AddEvent(resetBtn[0], "click", function( event, $this ) {
		ResetFilters();
	});

	// // Share button event handler
	AddEvent(shareBtn[0], "click", function( event, $this ) {
		// Copy the current window URL to clipboard
		CopyString( window.location.href );
	});

	// Add event listners to each `a11y` input
	for ( var i = 0; i < a11yInputs.length; i++ ) {
		AddEvent( a11yInputs[ i ], "click", function( event, $this ) {
			ApplyA11yToFrames( $this.id )
		});
	}

	// Add event listners to each `palette` input
	for ( var i = 0; i < paletteInputs.length; i++ ) {
		AddEvent( paletteInputs[ i ], "click", function( event, $this ) {
			FillPaletteColors( $this.id )
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
				FillFormColors( styles[key] );
			}
		}
	}

	// Return an array of keys from a given object
	function getKeys(obj) {
		var keys = [];
		iterate(obj, function (oVal, oKey) { keys.push(oKey) });
		return keys;
	}

	// IE6+ compliant iterate helper
	function iterate(iterable, callback) {
		for (var key in iterable) {
			if (key === 'length' || key === 'prototype' || !Object.prototype.hasOwnProperty.call(iterable, key)) continue;
			callback(iterable[key], key, iterable);
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
		}
	}


	/**
	 * ApplyA11yToFrames - Set a filter class to all frames given a selected a11y radio input selection.
	 * @param {*} filter - A11y filter selected ( e.g greyscale, deuteranopia )
	 */
	function ApplyA11yToFrames ( filterId  ) {
		for ( var i = 0; i < frames.length; i++ ) {
			frames[ i ].setAttribute( 'class', 'js-filter--' + filterId )
			// AddClass( frames[ i ], ( 'js-filter--' + filterId ) )
		}
	}


	/**
	 * Function binding onchange a11y radio input
	 * @param {*} element
	 */
	function ApplyFilter( element ) {
		ApplyA11yToFrames( element.id );
	}


	/**
	 * Reset form input.
	 */
	function ResetFilters() {
		/**
		 * @todo This fails when QueryToObject() returns "".
		 * Cannot reset form inputs with no window query.
		 */
		var queryObject = QueryToObject();
		var queryObjectKeys = getKeys( queryObject );

		// Reset form inputs
		for ( var key in queryObjectKeys ) {
			var input = document.getElementById( queryObjectKeys[key] );
			input.value = '';
		}

		// Reset a11y inputs
		for ( var i = 0; i < a11yInputs.length; i++ ) {
			a11yInputs[i].checked = false;
		}

		// Reset a11y inputs
		for ( var i = 0; i < paletteInputs.length; i++ ) {
			paletteInputs[i].checked = false;
		}
	}


	// On page load, apply the colours
	ApplyColours();

	FillFormColors();

}
