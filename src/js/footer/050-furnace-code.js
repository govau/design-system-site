var furnaceComponents = document.querySelectorAll( '.js-furnace-selector' );
var furnaceNPM        = document.querySelectorAll( '.js-furnace-code code' )[ 0 ];
var furnaceClear      = document.querySelectorAll( '.js-furnace-clear ' )[ 0 ];
var furnaceDownload   = document.querySelectorAll( '.furnace__buildbox__download' )[ 0 ];
var furnaceSelectBtn  = document.querySelector( '.furnace__selectall' );

/**
 * Adding event handler to each furnace checkbox
 */
AddEvent( furnaceComponents, 'change', function( event, $this ) {
	ToggleNPM( $this );
});


/**
 * Adding event handler to clear button
 */
AddEvent( furnaceClear, 'click', function( event ){
	ClearNPM();
});


/**
 * Send data about selected form items on download
 */
AddEvent( furnaceDownload, 'click', function( event ){
	var selectedItems = GetSelectedFormItems( 'furnace' );
	var analytics  = {
		'event': 'download',
		'selectedComponents' : selectedItems.components.join( ' ' ),
		'selectedCss' : selectedItems.styleOutput[ 0 ],
		'selectedJs' : selectedItems.jsOutput[ 0 ]
	}

	dataLayer.push( analytics );
});



/**
 * Checkbox click add or remove to code div
 *
 * @param {DOM element} $this - The checkbox input field that has changed
 */
function ToggleNPM( $this ) {
	var input = $this;
	var component = input.getAttribute( 'value' );

	var content = furnaceNPM.innerHTML;
	component =  " @gov.au/" + component;

	if( content.indexOf( component ) < 0 ) {
		furnaceNPM.innerHTML += component;
	}
	else {
		furnaceNPM.innerHTML = content.replace( component, '' );
	}
}


/**
 * Clear button resets the npm install box
 */
function ClearNPM() {
	furnaceNPM.innerHTML = 'npm install --save @gov.au/core';
}


/**
 * Select all button selects all checkbox elements on page
 */ 
AddEvent( selectAll, 'click', function( event ){
	furnaceComponents.forEach( function( furnaceComponents ) {
		furnaceComponents.checked = true;
	});
});
