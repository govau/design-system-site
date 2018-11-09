const Fuse = require('./static/fuse.min.js');
const Crypto = require('crypto');
const YAML = require('js-yaml');
const Path = require('path');
const Fs = require('fs');
const Fetch = require("node-fetch");

/**
 * Parsing yaml into an object using https://github.com/jeremyfa/yaml.js
 *
 * @param  {string} yaml - A yaml string
 * @param  {string} file - The file where this yaml comes from for error handling
 *
 * @return {object}      - The parsed yaml
 */
const ParseYaml = ( yaml ) => {
	if( typeof yaml === 'string' ) {
		try {
			return YAML.safeLoad( yaml, warning => Log.error( warning ) ) || {};
		}
		catch( error ) {
			console.error(`Rendering yaml caused an error`);
			console.error( error );
		}
	}
	else {
		return yaml;
	}
}


/**
 * Make an index array from our components/_all.yml
 *
 * @param  {object} yaml - Our components/_all.yml object
 *
 * @return {array}       - A new array with tags and content, path and all the goodness
 */
const MakeIndex = ( yaml ) => {
	const index = [];

	Object.keys( yaml ).map( module => {
		index.push({
			ID: yaml[ module ].ID,
			name: yaml[ module ].name,
			version: yaml[ module ].version,
			contributors: yaml[ module ].contributors,
			tags: yaml[ module ].tags,
			metatags: yaml[ module ].metatags,
			description: yaml[ module ].description,
			state: yaml[ module ].state,
			url: `../${ yaml[ module ].ID }/`,
		});
	});

	return index;
};


/**
 * Parse HTML out of our static page
 *
 * @param  {string} SEARCH       - The content of our static html page
 * @param  {string} searchString - The search string
 *
 * @return {object]}             - An object with all parsed bits
 */
const GetHTML = ( SEARCH, searchString ) => {
	const pageBits = SEARCH.replace( /##searchstring##/g, searchString ).split( '*************' );
	const searchTemplate = JSON.parse( pageBits[ 1 ] );

	return {
		start: pageBits[ 0 ],
		end: pageBits[ 2 ],
		...searchTemplate,
	};
};


/**
 * Make avatar HTML from template and an object
 *
 * @param  {array}  contributors - An array of all contributors
 * @param  {object} HTML         - The HTML template object
 *
 * @return {string}              - The rendered HTML
 */
const MakeAvatar = ( contributors, HTML ) => {
	let html = HTML.avatarStart;

	if( typeof contributors === 'object' ) {
		contributors.map( contributor => {
			html += HTML.avatarMiddle
				.replace( /##avatarurl##/g, contributor.url )
				.replace( /##avatarimg##/g, `https://www.gravatar.com/avatar/${ Crypto.createHash('md5').update( contributor.email ).digest('hex') }` )
				.replace( /##avatarname##/g, contributor.name );
		});
	}

	return html + HTML.avatarEnd;
};


/**
 * Create result HTML from template and search result
 *
 * @param  {array}  result - The result array with all cards
 * @param  {object} HTML   - Our template object
 *
 * @return {string}        - The HTML for the search
 */
const MakeResultHTML = ( result, HTML ) => {
	const html = {
		published: HTML[`publishedStart`],
		publishedfound : 0,
		inprogress: HTML[`inprogressStart`],
		inprogressfound: 0,
		suggestion: HTML[`suggestionStart`],
		suggestionfound: 0,
	};
	const _has = {
		published: false,
		inprogress: false,
		suggestion: false,
	};
	let state = '';

	result
		.map( item => {
			let thisBit = '';

			thisBit += HTML[`${ item.state }Middle`];

			thisBit = thisBit
				.replace( /##url##/g, item.url )
				.replace( /##name##/g, item.name )
				.replace( /##version##/g, item.version )
				// .replace( /##contributors##/g, MakeAvatar( item.contributors, HTML ) )
				.replace( /##svg##/g, `/assets/svg/map.svg#${ item.ID }` )
				.replace( /##description##/g, item.description );

			html[`${ item.state }found`] ++;
			_has[ item.state ] = true;
			state = item.state;
			html[ item.state ] += thisBit;
	});

	html['published'] = html['published'].replace( /##found##/g, html[`publishedfound`] ) + HTML[`publishedEnd`];
	html['inprogress'] = html['inprogress'].replace( /##found##/g, html[`inprogressfound`] ) + HTML[`inprogressEnd`];
	html['suggestion'] = html['suggestion'].replace( /##found##/g, html[`suggestionfound`] ) + HTML[`suggestionEnd`];

	return ( _has['published'] ? html.published : '' ) +
		( _has['inprogress'] ? html.inprogress : '' ) +
		( _has['suggestion'] ? html.suggestion : '' );
};


// GLOBALS
// const SEARCH = Fs.readFileSync( Path.normalize(`${ __dirname }/../site/components/search/index.html`), 'utf-8' );
const SEARCH = Fetch("http://127.0.0.1:8080/components/search/index.html").then( res => res.text()).then(body => body);
// const COMPONENTS = ParseYaml( Fs.readFileSync( Path.normalize(`${ __dirname }/../content/components/_all.yml`), 'utf-8' ) );
const COMPONENTS = Fetch("http://127.0.0.1:8080/content/components/_all.yml").then( res => res.text()).then(body => body);
const INDEX = MakeIndex( COMPONENTS );


/**
 * Search function
 *
 * @return {string} - The complete HTML for the search page
 */
const DisplaySearch = async ( search = '' ) => {
	const HTML = GetHTML( await SEARCH, search );
	const FuseSearch = new Fuse( INDEX, {
		threshold: 0.2,
		keys: [
			{
				name: 'ID',
				weight: 0.5,
			},
			{
				name: 'tags',
				weight: 0.2,
			},
			{
				name: 'metatags',
				weight: 0.2,
			},
			{
				name: 'description',
				weight: 0.1,
			},
		],
	});

	const result = FuseSearch.search( search );

	let searchResult = `<section class="searchpage__section released">
			No results found for "${ search }"
		</section>`;

	if ( result.length ){
		searchResult = MakeResultHTML( result, HTML );
	}

	return HTML.start + searchResult + HTML.end;
};


// EXPORT
module.exports = exports = DisplaySearch;
