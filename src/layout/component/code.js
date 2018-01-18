import { SETTINGS } from 'cuttlebelle/dist/settings.js';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Path from 'path';
import Fs from 'fs';


/**
 * The code component
 *
 * @disable-docs
 */
const Code = ({ _body, example, _ID }) => {
	const pathToCode = Path.normalize(`${ SETTINGS.get().folder.content }/${ _ID }/${ example }/code.md`);
	const exampleCode = Fs.readFileSync( pathToCode, 'utf8' );

	return (
		<Fragment>
			{ _body }

			<iframe src={`${ example }/`}>{ exampleCode }</iframe>
		</Fragment>
	);
}

Code.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Code.defaultProps = {};

export default Code;
