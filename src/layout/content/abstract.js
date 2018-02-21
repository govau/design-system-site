import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 */
const Abstract = ({  _body }) => (
	<div className="abstract">
		{ _body }
	</div>
);

Abstract.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

};

Abstract.defaultProps = {};

export default Abstract;
