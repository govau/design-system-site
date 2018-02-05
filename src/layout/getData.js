import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Path from 'path';
import Fs from 'fs';


/**
 * The partial component
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

/**
 * GetComponentValue get a value from the component based on the ID
 *
 * @param {string}  componentID - The component ID to match for the name
 * @param {value}   value       - The string of the value to match in the object
 *
 * @return {string}             - The data that matches the value and string
 */
export const GetComponentValue = ( componentID, value, yaml ) =>  {
	return GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].ID === componentID,
		yaml: yaml,
	})[ 0 ][ value ]
};


export default GetData;
