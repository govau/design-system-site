import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _body }) => (
	<Fragment>{ _body }</Fragment>
);

Partial.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
