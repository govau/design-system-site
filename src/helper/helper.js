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
const CFonts = require('cfonts');
const YAML = require('js-yaml');
const Chalk = require('chalk');
const Path = require('path');
const Fs = require(`fs`);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * Display headline
 *
 * @param  {string} text - The text to be displayed
 */
const Headline = ( text ) => {
	CFonts.say( text, {
		font: 'chrome',
		space: false,
		align: 'center',
		colors: ['yellow', 'white', 'yellow'],
	});
	console.log(`\n`);
};


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
 * Merge the data from uikit.json file into our component/_all.yml
 *
 * @param  {object} uikit      - The uikit object
 * @param  {object} components - The components object
 */
const CheckComponents = ( uikit, components ) => {
	const failed = [];

	for( module of Object.keys( uikit ) ) {
		const name = CleanName( uikit[ module ].name );

		if( typeof components[ name ] === 'undefined' ) {
			failed.push({ name, reason: 'Missing entirely' });
		}
		else {
			const keys = [
				'name',
				'description',
				'tags',
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
 * Merge the data from uikit.json file into our component/_all.yml
 *
 * @param  {object} uikit      - The uikit object
 * @param  {object} components - The components object
 */
const GenerateComponents = ( uikit, components ) => {
	for( module of Object.keys( UIKIT ) ) {
		const pathToPgk = Path.normalize(`${ UIKIT[ module ].path }/package.json`);
		const PGK = JSON.parse( Fs.readFileSync( pathToPgk, 'utf-8') );
		const name = CleanName( UIKIT[ module ].name );

		if( typeof components[ name ] === 'undefined' ) {
			components[ name ] = {};
		}

		components[ name ].ID = CleanName( UIKIT[ module ].name );
		components[ name ].version = UIKIT[ module ].version;
		components[ name ].dependencies = Object.keys( UIKIT[ module ].dependencies ).map( dep => CleanName( dep ) );
		components[ name ].hasSass = UIKIT[ module ].settings.plugins.includes('@gov.au/pancake-sass');
		components[ name ].hasJs = UIKIT[ module ].settings.plugins.includes('@gov.au/pancake-js');
		components[ name ].hasReact = UIKIT[ module ].settings.plugins.includes('@gov.au/pancake-react');
		components[ name ].contributors = PGK.contributors;
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


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// FILES
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const UIKIT = JSON.parse( Fs.readFileSync( Path.normalize(`${ __dirname }/../_uikit/uikit.json`), 'utf-8') );
const COMPONENTS = EncodeYAML( Fs.readFileSync( Path.normalize(`${ __dirname }/../../content/components/_all.yml`), 'utf-8') );


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// CLI
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
CFonts.say( 'GOLD', {
	align: 'center',
	colors: [ 'yellow', 'white', 'yellow' ],
});

if( process.argv.indexOf( 'components' ) !== -1 ) {
	Headline( 'Generating components YAML file' );

	GenerateComponents( UIKIT, COMPONENTS );
	CheckComponents( UIKIT, COMPONENTS );

	console.log();
}
