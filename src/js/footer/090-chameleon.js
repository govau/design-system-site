const customiseBtn = document.getElementById( 'sub-btn' );
const colorPallette = document.querySelector( '.chameleon-toolkit__container--custom' );
const presetPallette = document.querySelector( '.chameleon-toolkit__container--presets');
customiseBtn.addEventListener( 'click', () => {
    AddClass( presetPallette, 'hidden');
    RemoveClass( colorPallette, 'hidden' );
} )
