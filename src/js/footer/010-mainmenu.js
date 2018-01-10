// Mobile menu
var mainMenuToggle = document.getElementById( "mainmenu-toggle" );
var mainMenu = document.getElementById( "mainmenu" ); // change this to body


mainMenuToggle.classList.add( "js-toggle" );
mainMenu.classList.add( "is-closed" );


mainMenuToggle.addEventListener('click', function() {
	if( mainMenu.classList.contains( "is-closed" ) ) {
		mainMenu.classList.remove( "is-closed" );
		mainMenu.classList.add( "is-open" );
	}
	else {
		mainMenu.classList.remove( "is-open" );
		mainMenu.classList.add( "is-closed" );
	}
}, false);



