var items = document.querySelector( '.js-tabbing' ).children;
var loop = 0;

items[ loop ].focus();
loop ++;

setInterval( function() {
	items[ loop ].focus();
	loop ++;

	if( loop >= items.length ) {
		loop = 0;
	}
}, 2000 );
