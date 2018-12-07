var frames = document.getElementsByTagName( 'iframe' )
var a11yInputs = document.getElementsByName( 'a11y' );
var paletteInputs = document.getElementsByName( 'palette' );
var resetBtn = document.getElementsByName( 'btn-reset' );

// Reset button event handler
resetBtn[0].addEventListener("click", function() {
    ResetFilters();
});

// Add event listners to each `a11y` input
for ( var i = 0; i < a11yInputs.length; i++ ) {
	a11yInputs[ i ].addEventListener( "click", function() {
        ApplyA11yToFrames( this.id );
    });
}

for ( var i = 0; i < paletteInputs.length; i++ ) {
	paletteInputs[ i ].addEventListener( "click", function() {
        FillPaletteColors( this.id );
    });
}

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

	Object.keys( styles ).forEach( key => {			
		if ( key === elementId ) {
			FillFormColors( styles[ key ] )
		}
	})
}


/**
 * FillForm - Fills the form with the parameters in the URL
 */
function FillFormColors( paramObject = QueryToObject() ){
	Object.entries( paramObject ).map( value => {
		if ( value[0] ) {
			var input = document.getElementById( value[ 0 ]  )
			input.value = value[ 1 ];
		}
	})
}

/**
 * QueryToObject - Turns the url query into an object
 */
function QueryToObject() {
	var paramObject = {};
	
	if ( window.location.search ) {
		
		var paramString = window.location.search
		
		paramString.substr( 1 ).split( '&' ).map( value => {
			const keyValue = value.split( '=' );
			paramObject[ keyValue[ 0 ] ] = decodeURIComponent( keyValue[ 1 ] ).split( '+' ).join( '' );
		});
	}
	
	return paramObject;
}

/**
 * Prefill the form given a color palette selection ( e.g 'ato' prefills the form with ATO colors )
 */
function PrefillPalette( element ) {
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
	
	Object.keys( styles ).forEach( key => {
		if ( key === element.id ) {
			FillFormColors( styles[ key ] )
		}
	})
}

/**
 * ApplyColors - Applies the colours to the iframe
 */
function ApplyColours( paramString = window.location.search ){
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
		frames[ i ].setAttribute( 'class', ( 'js-filter--' + filterId ) ) 
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
    // Reset form inputs
    Object.entries( QueryToObject() ).map( value => {
		if ( value[0] ) {
			var inputs = document.getElementById( value[0] );
			inputs.value = '';
		}
    })
    
    // Reset a11y inputs
    a11yInputs.forEach( item => {
		item.checked = false;
	})
	
	// Reset a11y inputs
	paletteInputs.forEach( item => {
		item.checked = false;
	})
}


// On page load, apply the colours
ApplyColours();

FillFormColors();