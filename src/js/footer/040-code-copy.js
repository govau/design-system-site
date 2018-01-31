var codeComponents = document.querySelectorAll( '.js-copy' );

for( var i = 0; i < codeComponents.length; i++ ) {
	codeComponents[ i ].insertAdjacentHTML(
		'afterend',
		'<button type="button" class="btn-copy au-btn icon icon--copy js-copy-btn">Copy</button>'
	);
}

/**
 * Copy a string to the clipboard
 *
 * @param {string} text - The string to be copied
 */
function CopyString( text ) {
	var input = document.createElement( 'input' );
	input.setAttribute( 'value', text );
	document.body.appendChild( input );
	input.select();
	document.execCommand( 'copy' );
	document.body.removeChild( input );
}

// On click of any of the copy code buttons
var copyButtons = document.querySelectorAll( '.js-copy-btn' );
AddEvent( copyButtons, 'click', function( event, $this ) {
	CopyString( $this.previousSibling.innerHTML );
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

