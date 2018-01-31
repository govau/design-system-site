var furnaceComponents = document.querySelectorAll( '.js-furnace-selector' );
var furnaceNPM        = document.querySelectorAll( '.js-furnace-code code' )[ 0 ];


/**
 * Adding event handler to each furnace checkbox
 */
AddEvent( furnaceComponents, 'change', function( event, $this ) {
	ToggleNPM( $this );
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
