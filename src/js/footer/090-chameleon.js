var customiseBtn    = document.getElementById( 'show-color-pallette' );
var presetsBtn      = document.getElementById( 'show-presets' );
var colorPallette   = document.querySelector( '.chameleon-toolkit__container--custom' );
var presetPallette  = document.querySelector( '.chameleon-toolkit__container--presets');

customiseBtn.addEventListener( 'click', function() {
    AddClass( presetPallette, 'hidden');
    RemoveClass( colorPallette, 'hidden' );
})

presetsBtn.addEventListener( 'click', function() {
    AddClass( colorPallette, 'hidden');
    RemoveClass( presetPallette, 'hidden' );
})



