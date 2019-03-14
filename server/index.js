const DisplaySearch = require('./search.js');
const Display404 = require('./404.js');
const Express = require('express');
const Path = require('path');

// GLOBALS
const Server = Express();


/**
 * Check that server is requested securely middle-ware
 *
 * @param  {object}   request  - Express request object
 * @param  {object}   response - Express response object
 * @param  {function} next     - Express next function
 *
 * @return {object}            - Express object
 */
const ForwardSSL = ( request, response, next ) => {
	if( process.argv.indexOf( 'local' ) === -1 ) {
		if( request.headers['x-forwarded-proto'] === 'https' ) {
			return next();
		}

		response.redirect(`https://${ request.headers.host }${ request.originalUrl }`);
	}
	else {
		return next();
	}
};


/**
 * Adding basic auth to our staging site
 *
 * @param  {object}   request  - Express request object
 * @param  {object}   response - Express response object
 * @param  {function} next     - Express next function
 *
 * @return {object}            - Express object
 */
const AddFakePassword = ( request, response, next ) => {
	if( process.argv.indexOf( 'staging' ) !== -1 ) {
		const auth = {        // Alright don’t freak out. This is not to keep anything protected.
			login: 'ds',        // We’re using this to help Google with indexing and to keep people
			password: 'ds',     // from getting confused between staging and prod.
		};                    // By all means please share this username:password :)

		const b64auth = ( request.headers.authorization || '' ).split(' ')[ 1 ] || '';
		const [ login, password ] = new Buffer( b64auth, 'base64' ).toString().split(':');

		// Verify login and password are set and correct
		if(
			!login ||
			!password ||
			login !== auth.login ||
			password !== auth.password
		) {
			response.set('WWW-Authenticate', 'Basic realm="Please authenticate"');
			response.status( 401 ).send(`This is just the staging site. Please check out the real deal at <a href="https://designsystem.gov.au/">designsystem.gov.au</a>`);
		}
		else {
			return next();
		}
	}
	else {
		return next();
	}
};


/**
 * Start server
 */
Server
	// First we make sure all requests come through HTTPS
	.all( '*', ForwardSSL )

	// Let's make sure we had the password passed in
	.get( '*', AddFakePassword )

	// Then we add dynamic routes that overwrite static ones
	.get( '/components/search/', ( request, response ) => {
		response.send( DisplaySearch( request.query.s ) );
	})

	/**
	 * Temporarily setup endpoint specifically for serviceWorker, 
	 * this is required to resolve scope and file access issues
	 * @see	https://stackoverflow.com/questions/34147562/service-worker-is-caching-files-but-fetch-event-is-never-fired
	 */ 
	.get( '/sw.js', ( request, response ) => {
		response.sendFile( Path.normalize(`${ __dirname }/../site/sw.js`) );
	})

	// Now static assets
	.use( Express.static( Path.normalize(`${ __dirname }/../site/`) ) )

	// In the end we catch all missing requests
	.get( '*', ( request, response ) => {
		response.status( 404 );

		response.send( Display404( request.url ) );
	})

	// Now let’s start this thing!
	.listen( 8080, () => {
		console.log(`Server listening on port 8080`);
});
