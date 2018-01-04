import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _body }) => (
	<div className="content">{ _body }</div>
);

Partial.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
