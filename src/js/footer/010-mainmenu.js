var overlay        = document.getElementById( 'overlay' );
var mainMenu       = document.getElementById( 'mainmenu' );
var mainMenuToggle = document.getElementById( 'mainmenu-toggle' );


// console.log(mainMenu)
function OpenMenu() {
	mainMenuToggle.innerHTML = '<span>Close menu</span>';
	RemoveClass( document.body, 'mainmenu-is-closed' );
	AddClass( document.body, 'mainmenu-is-open' );
	AU.accordion.Open( mainMenuToggle );
}


function CloseMenu() {
	mainMenuToggle.innerHTML = '<span>Open menu</span>';
	RemoveClass( document.body, 'mainmenu-is-open' );
	AddClass( document.body, 'mainmenu-is-closed' );
	AU.accordion.Close( mainMenuToggle );
}


mainMenuToggle.addEventListener( 'click', function( event ) {
	event.preventDefault();

	if( HasClass( document.body, 'mainmenu-is-closed' ) ) {
		OpenMenu();
	}
	else {
		CloseMenu();
	}
});


overlay.addEventListener( 'click', function() {
	CloseMenu();
}, false);


