import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The tab component
 */
const Code = ({ _body, example }) => (
	<Fragment>
		{ _body }
		{ example }
		<iframe src={`${ example }/`}></iframe>
	</Fragment>
);

Code.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Code.defaultProps = {};

export default Code;
