const Path = require('path');
const Fs = require('fs');
const Fetch = require("node-fetch");


/**
 * Resolve our path relative to our 404 page
 *
 * @param  {string} URL - The URL you want to link to
 *
 * @return {string}     - A relative path to URL from our 404 page
 */
const RelativeURL = ( URL ) => {
	const relative = Path.posix.relative(
		
		`http://127.0.0.1:8080/${ URL }` ,
		`http://127.0.0.1:8080/index.html`
	);

	return relative === '' ? '.' : relative;
}


// GLOBALS
// const HTML = Fs.readFileSync( Path.normalize(`${ __dirname }/../site/404/index.html`), 'utf-8' );
const HTML = Fetch("http://127.0.0.1:8080/404/index.html").then( res => res.text()).then(body => body);

/**
 * Parse relative paths into 404 page
 *
 * @param  {String} url - The current path to this page
 */
const Display404 = ( url ) => {
	return HTML.replace( /##url##/g, RelativeURL( url ) );
};


// EXPORT
module.exports = exports = Display404;
