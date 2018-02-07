import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Path from 'path';
import Fs from 'fs';


/**
 * Get data from _all.yml
 *
 * @param  {Function} yaml   - The _parseYaml function
 * @param  {Function} filter - A filter function
 * @param  {Boolean}  object - Whether this is a single object
 *
 * @return {object|Array}    - The data from the _all/yml
 *
 * @disable-docs
 */
const GetData = ({ yaml, filter = () => true, object = false }) => {
	const COMPONENTS = yaml(
		Fs.readFileSync(
			Path.normalize(`${ __dirname }/../../content/components/_all.yml`),
			{ encoding: 'utf8' }
		)
	);

	if( object ) {
		return COMPONENTS;
	}
	else {
		return Object.keys( COMPONENTS )
			.filter( ( key ) => filter( key, COMPONENTS ) )
			.sort( ( keyA, keyB ) => COMPONENTS[ keyA ].order - COMPONENTS[ keyB ].order )
			.map( ( key ) => COMPONENTS[ key ] );
	}
};

export default GetData;


/**
 * GetComponentValue get a value from the component based on the ID
 *
 * @param {string}  componentID - The component ID to match for the name
 * @param {value}   value       - The string of the value to match in the object
 *
 * @return {string}             - The data that matches the value and string
 */
export const GetComponentValue = ( componentID, value, yaml ) => {
	const data = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].ID === componentID,
		yaml: yaml,
	})[ 0 ];

	if ( data ) {
		return data[ value ];
	}
};


/**
 * GetState - Gets the relevant title based on state
 *
 * @param  {string} state - The state of the component
 *
 * @return {string}       - The component state title
 */
export const GetState = ( state ) => {
	if( state === 'published' ) {
		return 'Released';
	}
	else if( state === 'unpublished') {
		return 'In progress';
	}
	else if( state === 'suggestion' ) {
		return 'Suggestions';
	}
}
