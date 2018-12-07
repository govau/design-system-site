const customiseBtn    = document.getElementById( 'show-color-pallette' );
const presetsBtn      = document.getElementById( 'show-presets' );
const colorPallette   = document.querySelector( '.chameleon-toolkit__container--custom' );
const presetPallette  = document.querySelector( '.chameleon-toolkit__container--presets');

customiseBtn.addEventListener( 'click', () => {
    AddClass( presetPallette, 'hidden');
    RemoveClass( colorPallette, 'hidden' );
})

presetsBtn.addEventListener( 'click', () => {
    AddClass( colorPallette, 'hidden');
    RemoveClass( presetPallette, 'hidden' );
})



