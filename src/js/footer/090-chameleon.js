var customiseBtn    = document.getElementById( 'show-color-pallette' );
var presetsBtn      = document.getElementById( 'show-presets' );
var colorPallette   = document.getElementById( 'custom-colour-pallette' );
var presetPallette  = document.getElementById( 'preset-pallette');


customiseBtn.addEventListener( 'click', function() {
    AddClass( presetPallette, 'hidden');
    RemoveClass( colorPallette, 'hidden' );
})

presetsBtn.addEventListener( 'click', function() {
    AddClass( colorPallette, 'hidden');
    RemoveClass( presetPallette, 'hidden' );
})



