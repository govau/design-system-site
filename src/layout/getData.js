import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Path from 'path';
import Fs from 'fs';


/**
 * The partial component
 *
 * @disable-docs
 */
const GetData = ({ module = '', yaml }) => {
	const COMPONENT = yaml(
		Fs.readFileSync(
			Path.normalize(`${ __dirname }/../../content/components/_all.yml`),
			{ encoding: 'utf8' }
		)
	);

	if( module.length > 0 ) {
		return COMPONENT[ module ];
	}
	else {
		return COMPONENT;
	}
};

export default GetData;
