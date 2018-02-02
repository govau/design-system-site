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

export default GetData;
