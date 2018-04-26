var codeComponents = document.getElementsByTagName( 'pre' );

for( var i = 0; i < codeComponents.length; i++ ) {

	if( HasClass( codeComponents[ i ], 'js-nocopy' ) === null ){
		codeComponents[ i ].insertAdjacentHTML(
			'beforeend',
			'<button type="button" class="btn-copy au-btn icon icon--copy js-copy-btn">Copy</button>'
		);

		codeComponents[ i ].outerHTML = '<div class="codebox">' + codeComponents[ i ].outerHTML + '</div>';
	}
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
	CopyString( $this.previousSibling.innerText );
	var oldLabel = $this.innerHTML;
	$this.innerHTML = 'Copied';
	RemoveClass( $this, 'icon--copy' );
	AddClass( $this, 'icon--success' );

	var analytics  = {
		'event': 'copy',
		'page': document.getElementsByTagName( "title" )[ 0 ].innerHTML.split(' - ')[ 0 ],
	}

	// If we are on the component overview page add extra analytics
	if ( analytics.page !== 'Download' && analytics.page.indexOf( 'code' ) !== analytics.page.length - 4 ) {
		analytics[ 'component' ] = document.getElementsByClassName( "componentheader__headling" )[ 0 ].innerHTML;
		analytics[ 'version' ]   = document.getElementsByClassName( "componentheader__version" )[ 0 ].innerHTML;
		analytics[ 'language' ]  = $this.parentNode.parentNode.parentNode.id.split( '-' )[ 0 ];
		analytics[ 'variation' ] = $this.parentNode.parentNode.parentNode.id.split( '-' )[ 1 ];
	}
	else if( analytics.page.indexOf( 'code' ) === analytics.page.length - 4 ){
		analytics[ 'component' ] = document.getElementsByClassName( "componentheader__headling" )[ 0 ].innerHTML;
		analytics[ 'version' ]   = document.getElementsByClassName( "componentheader__version" )[ 0 ].innerHTML;
		analytics[ 'section' ]   = $this.parentNode.parentNode.previousSibling.innerHTML;
	}
	else if( analytics.page === 'Download' ){
		var selectedItems = GetSelectedFormItems( 'furnace' );
		analytics[ 'event' ]              = 'copynpm';
		analytics[ 'selectedComponents' ] = selectedItems.components.join( ' ' );
		analytics[ 'selectedCss' ]        = selectedItems.styleOutput[ 0 ];
		analytics[ 'selectedJs' ]         = selectedItems.jsOutput[ 0 ];
	}

	console.log( analytics );

	dataLayer.push( analytics );

	setTimeout( function() {
		$this.innerHTML = oldLabel;
		RemoveClass( $this, 'icon--success' );
		AddClass( $this, 'icon--copy' );
	}, 1000 );
});
