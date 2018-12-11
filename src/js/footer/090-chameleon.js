var customiseBtn   = document.getElementById( 'show-color-pallette' );
var presetsBtn     = document.getElementById( 'show-presets' );
var colorPallette  = document.getElementById( 'custom-colour-pallette' );
var presetPallette = document.getElementById( 'preset-pallette');

customiseBtn.addEventListener( 'click', function() {
    AddClass( presetPallette, 'hidden');
    RemoveClass( presetPallette, 'show' );

    RemoveClass( colorPallette, 'hidden' );
    AddClass( colorPallette, 'show');
});


presetsBtn.addEventListener( 'click', function() {
    RemoveClass( colorPallette, 'show' );
    AddClass( colorPallette, 'hidden');

    RemoveClass( presetPallette, 'hidden' );
    AddClass( presetPallette, 'show');
});

//scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
    });
});