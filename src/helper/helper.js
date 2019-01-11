/***************************************************************************************************************************************************************
 *
 * HELPER
 *
 * A helper file performing below tasks:
 * - generating components/_all.yml file
 * - checking integrity
 *
 **************************************************************************************************************************************************************/

'use strict';


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// DEPENDENCIES
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Fetch = require('node-fetch');
const CFonts = require('cfonts');
const YAML = require('js-yaml');
const Chalk = require('chalk');
const Path = require('path');
const Fs = require(`fs`);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Tick = ( text ) => {
	console.log( Chalk.green(`    ✔ ︎ ${ text }`) );
};


const Error = ( text ) => {
	console.error( Chalk.red(`    ✖ ︎ ${ text }`) );
};


/**
 * Decode YAML from a string
 *
 * @param  {string} yaml - The YAML string to be parsed
 *
 * @return {object}      - Parsed YAML object
 */
const DecodeYAML = ( yaml ) => YAML.safeDump( yaml, warning => console.error( warning ) ) || {};


/**
 * Encode YAML from an object
 *
 * @param  {object} yaml - The YAML object to be parsed
 *
 * @return {string}      - Parsed YAML string
 */
const EncodeYAML = ( yaml ) => YAML.safeLoad( yaml, warning => console.error( warning ) ) || {};


/**
 * Remove org prefix from module name
 *
 * @param  {string} name - The name of the npm module
 *
 * @return {string}      - The cleaned name
 */
const CleanName = ( name ) => name.replace( '@gov.au/', '' );


/**
 * Merge the data from auds.json file into our component/_all.yml
 *
 * @param  {object} auds      - The auds object
 * @param  {object} components - The components object
 */
const CheckComponents = ( auds, components ) => {
	const failed = [];

	for( module of Object.keys( auds ) ) {
		const name = CleanName( auds[ module ].name );

		if( typeof components[ name ] === 'undefined' ) {
			failed.push({ name, reason: 'Missing entirely' });
		}
		else {
			const keys = [
				'name',
				'description',
				'tags',
				'related',
				'related-articles',
				'used-in',
				'required',
				'version',
				'dependencies',
				'contributors',
				'state',
				'discussions',
				'hasSass',
				'hasJs',
				'hasReact',
				'ID'
			];

			keys.map( key => {
				if( typeof components[ name ][ key ] === 'undefined' ) {
					failed.push({ name, reason: `The key "${ Chalk.yellow( key ) }" is missing` })
				}
			});
		}
	}

	if( failed.length > 0 ) {
		Error(`The following modules are missing in your components/_all.yml:\n       ${
			failed
				.map( fail => `${ Chalk.bold( fail.name ) } - ${ fail.reason }\n       `)
				.join('')
		}`);

		process.exit( 1 );
	}
	else {
		Tick(`All modules are accounted for`);
	}
};


/**
 * Merge the data from auds.json file into our component/_all.yml
 *
 * @param  {object} auds      - The auds object
 * @param  {object} components - The components object
 */
const GenerateComponents = ( auds, components ) => {
	for( module of Object.keys( AUDS ) ) {
		const pathToPgk = Path.normalize(`${ AUDS[ module ].path }/package.json`);
		const PGK = JSON.parse( Fs.readFileSync( pathToPgk, 'utf-8' ) );
		const name = CleanName( AUDS[ module ].name );

		if( typeof components[ name ] === 'undefined' ) {
			components[ name ] = {};
		}

		components[ name ].ID = CleanName( AUDS[ module ].name );
		components[ name ].version = AUDS[ module ].version;
		components[ name ].dependencies = Object.keys( AUDS[ module ].dependencies ).map( dep => CleanName( dep ) );
		components[ name ].hasSass = AUDS[ module ].settings.plugins.includes('@gov.au/pancake-sass');
		components[ name ].hasJs = AUDS[ module ].settings.plugins.includes('@gov.au/pancake-js');
		components[ name ].hasReact = AUDS[ module ].settings.plugins.includes('@gov.au/pancake-react');
		// components[ name ].contributors = PGK.contributors;
	}

	const componentsString = DecodeYAML( components )
		.split('\n')
		.map( line => {
			if(
				line.startsWith('  ID: ') ||
				line.startsWith('  version: ') ||
				line.startsWith('  dependencies:') ||
				line.startsWith('  hasSass: ') ||
				line.startsWith('  hasJs: ') ||
				line.startsWith('  hasReact: ')
				// || line.startsWith('  contributors:')
			) {
				return `${ line }    # <-- auto generated, don't change`;
			}
			else {
				return line;
			}
		})
		.join('\n');

	Fs.writeFileSync( Path.normalize(`${ __dirname }/../../content/components/_all.yml`), componentsString, `utf-8` );

	Tick('Generated components/_all.yml file');
};


/**
 * Sum all downloads up from the returning json format
 *
 * @param  {array} downloads - The downloads object coming from npms stats api
 *
 * @return {integer}         - All downloads summed together
 */
const GetStats = ( downloads ) => {
	let count = 0;

	if( downloads !== undefined ) {
		for( const download of downloads ) {
			count += download.downloads;
		}
	}

	return count;
};


/**
 * Get the stats for a specified bunch of packages from the npm api
 *
 * @param  {array} modules - An array of package names
 *
 * @return {array}         - An array of objects with the shape { name: STRING, download: INTEGER }
 */
const FetchDownloads = ( modules ) => {
	const data = [];
	const promises = [];

	return new Promise( ( resolve, reject ) => {
		for( const module of modules ) {
			promises.push(
				Fetch(`https://api.npmjs.org/downloads/range/last-year/${ module }?${ Math.floor( new Date().getTime() / 1000 ) }`, { method: 'get' })
					.catch( error => reject( error ) )
					.then( response => response.json() )
					.then( thisData => data.push({
						name: module,
						downloads: GetStats( thisData.downloads ),
					})
				)
			);
		}


		Promise.all( promises )
			.catch( error => reject( error ) )
			.then( unsortedDownloads => {
				// Sort the downloads before returning
				const sortedDownloads = data.sort( ( a, b ) => {
					if( a.name < b.name ) return -1;
					if( a.name > b.name ) return 1;
					return 0;
				});

				resolve( sortedDownloads )
			});
	});
};


/**
 * Get all modules from the auds that is currently published
 *
 * @return {Promise object} - All module names in an array
 */
const FetchModules = () => {
	return new Promise( ( resolve, reject ) => {
		Fetch(`https://raw.githubusercontent.com/govau/design-system-components/master/auds.json?${ Math.floor( new Date().getTime() / 1000 ) }`, { method: 'get' })
			.catch( error => reject( error ) )
			.then( response => response.json() )
			.then( thisData => {
				resolve( Object.keys( thisData ) );
		});
	});
};


/**
 * Fetch stars from a specific repo inside the govau GitHub org
 *
 * @param  {string} repo         - The name of the repo
 *
 * @return {Promise object}      - The number of stars for that repo
 */
const FetchStars = repo => {
	return new Promise( ( resolve, reject ) => {
		Fetch(`https://api.github.com/repos/govau/${ repo }?${ Math.floor( new Date().getTime() / 1000 ) }`, { method: 'get' })
			.catch( error => reject( error ) )
			.then( response => response.json() )
			.then( response => {
				if( response.stargazers_count ) {
					resolve( response.stargazers_count );
				}
				else {
					resolve( 0 );
				}
		});
	});
};


/**
 * Write all stats from the GitHub API to out _data.yml file
 */
const WriteStats = async ( ) => {
	const DATA = {};
	try {
		DATA.pancake = {
			downloads: 0,
			modules: {},
			stars: 0,
		};

		const downloadPancakes = await FetchDownloads([
			'@gov.au/pancake',
			'@gov.au/pancake-js',
			'@gov.au/pancake-json',
			'@gov.au/pancake-react',
			'@gov.au/pancake-sass',
			'@gov.au/syrup',
		]);

		Tick('Got pancake downloads data');

		let downloadAllPancake = 0;
		downloadPancakes.map( module => {
			DATA.pancake.modules[ module.name ] = module.downloads;
			downloadAllPancake += module.downloads;
		});

		DATA.pancake.downloads = downloadAllPancake;

		DATA.auds = {
			downloads: 0,
			modules: {},
			stars: 0,
		};

		const audsModules = await FetchModules();
		const downloadAuds = await FetchDownloads( audsModules );

		Tick( 'Got auds downloads data' );

		let downloadAllAuds = 0;
		downloadAuds.map( module => {
			DATA.auds.modules[ module.name ] = module.downloads;
			downloadAllAuds += module.downloads;
		});

		DATA.auds.downloads = downloadAllAuds;


		const pancakeStars = await FetchStars('pancake');
		Tick( 'Got pancake stars data' );

		const audsStars = await FetchStars('design-system-components');
		Tick( 'Got auds stars data' );

		DATA.pancake.stars = pancakeStars;
		DATA.auds.stars = audsStars;


		const DATAstring = '# THIS FILE IS AUTOGENERATED!\n# THE `pancake` and `auds` FIELDS WILL BE OVERWRITTEN\n\n' + DecodeYAML( DATA )

		Fs.writeFileSync( Path.normalize(`${ __dirname }/../../content/_data.yml`), DATAstring, `utf-8` );

		Tick( 'Generated /content/_data.yml file' );
	}
	catch( error ) {
		Error( error );
	}
};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// FILES
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const AUDS = JSON.parse( Fs.readFileSync( Path.normalize(`${ __dirname }/../_auds/auds.json`), 'utf-8') );
const COMPONENTS = EncodeYAML( Fs.readFileSync( Path.normalize(`${ __dirname }/../../content/components/_all.yml`), 'utf-8') );


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// CLI
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
CFonts.say( 'AU : DS', {
	align: 'center',
	colors: [ 'cyan', 'yellow' ],
});
CFonts.say( 'Australian Government Design System', {
	font: 'console',
	align: 'center',
	colors: [ 'cyan' ],
});

if( process.argv.indexOf( 'components' ) !== -1 ) {
	GenerateComponents( AUDS, COMPONENTS );
	CheckComponents( AUDS, COMPONENTS );
	WriteStats();
}
