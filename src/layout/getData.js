import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Path from 'path';
import Fs from 'fs';


/**
 * The partial component
 *
 * @disable-docs
 */
const GetData = ( module, _parseYaml ) => {
	const COMPONENT = _parseYaml(
		Fs.readFileSync(
			Path.normalize(`${ __dirname }/../../content/components/_all.yml`),
			{ encoding: 'utf8' }
		)
	);

	return COMPONENT[ module ];
};

export default GetData;
