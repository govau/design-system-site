var codeComponents = document.getElementsByTagName( "pre" );

for( var i = 0; i < codeComponents.length; i++ ) {
	codeComponents[ i ].insertAdjacentHTML(
		'afterend',
		'<button type="button" class="au-btn js-copy-code">Copy</button>'
	);
}


function CopyCode( text ) {
	var input = document.createElement( 'input' );
	input.setAttribute( 'value', text );
	document.body.appendChild( input );
	input.select();
	document.execCommand( 'copy' );
	document.body.removeChild( input );
}


var copyButtons = document.querySelectorAll( '.js-copy-code' );

AddEvent( copyButtons, 'click', function( event, $this ) {
	CopyCode( $this.previousSibling.firstChild.innerHTML );
});

