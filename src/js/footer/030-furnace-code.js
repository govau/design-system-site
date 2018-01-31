var furnaceComponents = document.querySelectorAll( '.furnace__component__label' );
var furnaceNPM        = document.querySelectorAll( '.furnace code' )[ 0 ];


AddEvent( furnaceComponents, 'mousedown', function( event, $this ) {
	ToggleNPM( $this.children[ 0 ].children[ 0 ].getAttribute( 'value' ) );
});


function ToggleNPM( component ) {
	var content = furnaceNPM.innerHTML;
	component =  " @gov.au/" + component;

	if( content.indexOf( component ) < 0 ) {
		furnaceNPM.innerHTML += component;
	}
	else {
		furnaceNPM.innerHTML = content.replace( component, '' );
	}
}


