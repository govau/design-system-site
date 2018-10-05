var codeComponents = document.getElementsByTagName( 'pre' );

for( var i = 0; i < codeComponents.length; i++ ) {

	if( HasClass( codeComponents[ i ], 'js-nocopy' ) === null ){
		codeComponents[ i ].insertAdjacentHTML(
			'beforeend',
			'<button type="button" class="btn-copy au-btn au-btn--tertiary icon icon--copy js-copy-btn">Copy</button>'
		);
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

	var currentComponentPage = document.querySelector( '.is-components .content .navigation .active a' );

	if( currentComponentPage !== null ){
		// If we are on the component overview page add extra analytics
		if ( currentComponentPage.innerHTML === 'Overview' ) {
			analytics[ 'component' ] = document.getElementsByClassName( "componentheader__heading" )[ 0 ].innerHTML;
			analytics[ 'version' ]   = document.getElementsByClassName( "componentheader__version" )[ 0 ].innerHTML;
			analytics[ 'language' ]  = $this.parentNode.parentNode.parentNode.id.split( '-' )[ 0 ];
			analytics[ 'variation' ] = $this.parentNode.parentNode.parentNode.id.split( '-' )[ 1 ];
		}
		// If we are on the component code page
		else if( currentComponentPage.innerHTML === 'Code' ){
			analytics[ 'component' ] = document.getElementsByClassName( "componentheader__heading" )[ 0 ].innerHTML;
			analytics[ 'version' ]   = document.getElementsByClassName( "componentheader__version" )[ 0 ].innerHTML;
			analytics[ 'section' ]   = $this.parentNode.parentNode.previousSibling.innerHTML;
		}
	}
	// If we are on the download page
	else if( analytics.page === 'Download' ){
		var selectedItems = GetSelectedFormItems( 'furnace' );
		analytics[ 'event' ]              = 'copynpm';
		analytics[ 'selectedComponents' ] = selectedItems.components.join( ' ' );
		analytics[ 'selectedCss' ]        = selectedItems.styleOutput[ 0 ];
		analytics[ 'selectedJs' ]         = selectedItems.jsOutput[ 0 ];
	}

	dataLayer.push( analytics );

	setTimeout( function() {
		$this.innerHTML = oldLabel;
		RemoveClass( $this, 'icon--success' );
		AddClass( $this, 'icon--copy' );
	}, 1000 );
});
