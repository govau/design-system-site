// Mobile menu
var mainMenuToggle = document.getElementById( 'mainmenu-toggle' );
var overlay = document.getElementById( 'overlay' );

AddClass( mainMenuToggle, 'js-mainmenu-toggle' );
AddClass( document.body, 'mainmenu-is-closed' );


function OpenMenu() {
	mainMenuToggle.innerHTML = "Close menu";
	RemoveClass( document.body, 'mainmenu-is-closed' );
	AddClass( document.body, 'mainmenu-is-open' );
}

function CloseMenu() {
	mainMenuToggle.innerHTML = "Open menu";
	RemoveClass( document.body, 'mainmenu-is-open' );
	AddClass( document.body, 'mainmenu-is-closed' );
}


mainMenuToggle.addEventListener( 'click', function() {
	if( HasClass( document.body, 'mainmenu-is-closed' ) ) {
		OpenMenu();
	}
	else {
		CloseMenu();
	}
}, false);


overlay.addEventListener( 'click', function() {
	CloseMenu();
}, false);


