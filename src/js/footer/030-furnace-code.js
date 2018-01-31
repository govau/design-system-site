var furnaceComponents = document.querySelectorAll( '.js-furnace-selector' );
var furnaceNPM        = document.querySelectorAll( '.js-furnace-code code' )[ 0 ];
var furnaceClear      = document.querySelectorAll( '.js-furnace-clear ' )[ 0 ];


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
	furnaceNPM.innerHTML = 'npm install';
}
