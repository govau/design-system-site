import PropTypes from 'prop-types';
import React from 'react';

import AnchorTitle from '../anchor-title';


/**
 * The Rationale component
 */
const Rationale = ({ heading, _body }) => (
	<div className="row headingLeft">
		<div className="col-md-4">
			<AnchorTitle heading={ heading } headingSize={ 3 } />
		</div>
		<div className="col-md-8">{ _body }</div>
	</div>
);

Rationale.propTypes = {
	/**
	 * heading: Round corners
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Rationale.defaultProps = {
	headingSize: 3,
};

export default Rationale;
