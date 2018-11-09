const DisplaySearch = require('./search.js');
const Display404 = require('./404.js');
const Express = require('express');
const Path = require('path');
const Helmet = require("helmet");

// GLOBALS
const Server = Express();
const _PORT = 3500;

// MIDDLEWARE
Server.use(Helmet());

/**
 * Start server
 */
Server
	// Then we add dynamic routes that overwrite static ones
	.get( '/components/search/', ( request, response ) => {
		response.send( DisplaySearch( request.query.s ) );
	})

	// In the end we catch all missing requests
	.get( '*', ( request, response ) => {
		response.status( 404 );

		response.send( Display404( request.url ) );
	})

	// Now let’s start this thing!
	.listen( _PORT, () => {
		console.log(`Server listening on port ${_PORT} ...`);
});
