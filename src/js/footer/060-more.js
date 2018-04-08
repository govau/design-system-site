var wrapper = document.querySelectorAll( '.js-more-wrapper' );

for( var i = 0; i < wrapper.length; i++ ) {
	var contributors = wrapper[ i ].children.length;

	if( contributors > 4 ) {
		wrapper[ i ].insertAdjacentHTML(
			'beforeend',
			'<li>' +
				'<button type="button" class="component-status__definition__list__more js-more">' +
					'<span class="sronly">View </span> +' + ( contributors - 4 ) + '<span class="sronly"> more contributors</span>' +
				'</button>' +
			'</li>'
		);
		AddClass( wrapper[ i ], 'is-small' );
	}
}

var moreButtons = document.querySelectorAll( '.js-more' );
AddEvent( moreButtons, 'click', function( event, $this ) {
	var wrapper = $this.parentNode.parentNode;

	RemoveClass( wrapper, 'is-small' );
	AddClass( $this, 'is-hidden' );
});
