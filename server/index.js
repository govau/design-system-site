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
	if( request.headers['x-forwarded-proto'] === 'https' ) {
		return next();
	}

	response.redirect(`https://${ request.headers.host }${ request.originalUrl }`);
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
	// if( process.argv.indexOf( 'staging' ) !== -1 ) {
		const auth = {        // Alright don’t freak out. This is not to keep anything protected.
			login: 'totallynotlive',      // We’re using this to help Google with indexing and to keep people
			password: 'totallynotlive',   // from getting confused between staging and prod.
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
			response.status( 401 ).send(`
We’ve recently placed the Design System documentation site back behind a password-protection mechanism - thanks for all of the early responses and retweets
we’ve received to date.

The internal and external feedback has been enormously useful - we’ve got some more work to do to prepare for our approach to a public launch. We look forward
to sharing the next release as publicly as possible, as soon as possible.

In the meantime, we’ll be reading and responding (when possible) to posts in this forum, and the <a href="https://github.com/govau/uikit">UI-Kit v2 GitHub
repo</a> is as active as ever.
`);
		}
		else {
			return next();
		}
	// }
	// else {
	// 	return next();
	// }
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
