var frames = document.querySelectorAll( 'iframe' )
var a11yInputs = document.querySelectorAll( 'input[name="a11y"]' );

// Add event listners to each `a11y` input
a11yInputs.forEach( item => {
    item.addEventListener("click", function(){
        AddA11yClass( item.id );

    });
});

// Add class to all iframes
function AddA11yClass( a11yProfile ){
    frames.forEach( item => {
		item.setAttribute( 'class', `js-filter--${ a11yProfile }` )
	})
}