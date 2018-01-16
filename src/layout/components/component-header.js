import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
 const ComponentHeader = ({ status, navigation, _body }) => (
	<div className="componentheader au-grid">
		<div className="row">
			<div className="col-sm-12 col-md-8 au-display-lg">
					{ _body }
			</div>
			<div className="col-sm-6 col-md-4">
					{ status }
			</div>
		</div>

		{ navigation }

	</div>
 );

ComponentHeader.propTypes = {
	/**
	 * feedback: (partials)(1)
	 */
	feedback: PropTypes.node.isRequired,
};

ComponentHeader.defaultProps = {};

export default ComponentHeader;
