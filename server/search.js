const Path = require('path');
const Fs = require('fs');


// GLOBALS
const SEARCH = Fs.readFileSync( Path.normalize(`${ __dirname }/../site/components/search/index.html`), 'utf-8' )

/**
 * Search function
 *
 * @return {string} - The complete HTML for the search page
 */
const DisplaySearch = ( search = '' ) => {
	const pageBits = SEARCH.replace( /##searchstring##/g, search ).split( '*************' );
	const searchTemplate = JSON.parse( pageBits[ 1 ] );

	const searchResult = searchTemplate.moduleStart + searchTemplate.moduleMiddle + searchTemplate.moduleEnd;

	const searchResponse = pageBits[ 0 ] + searchResult + pageBits[ 2 ];

	return searchResponse;
};


// EXPORT
module.exports = exports = DisplaySearch;
