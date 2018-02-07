var codeComponents = document.querySelectorAll( '.js-copy' );


for( var i = 0; i < codeComponents.length; i++ ) {
	var button = document.createElement( 'button' );
	button.setAttribute( 'type', 'button' );
	button.setAttribute( 'class', 'btn-copy au-btn icon icon--copy js-copy-btn' );
	button.innerHTML = 'Copy';
	codeComponents[ i ].appendChild( button );
}

/**
 * Copy a string to the clipboard
 *
 * @param {string} text - The string to be copied
 */
function CopyString( text ) {
	var textarea = document.createElement( 'textarea' );
	textarea.value = text;
	document.body.appendChild( textarea );
	textarea.select();
	document.execCommand( 'copy' );
	document.body.removeChild( textarea );
}


/**
 * On click of any of the copy code buttons
 */
var copyButtons = document.querySelectorAll( '.js-copy-btn' );
AddEvent( copyButtons, 'click', function( event, $this ) {
	CopyString( $this.previousSibling.firstChild.innerText );
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
