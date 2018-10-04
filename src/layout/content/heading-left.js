import PropTypes from 'prop-types';
import React from 'react';

import AnchorTitle from '../anchor-title';


/**
 * The partial component
 */
const headingLeft = ({ heading, headinglevel, _body }) => (
	<div className="row headingLeft">
		<div className="col-md-2">
			<AnchorTitle heading={ heading } headinglevel={ headinglevel } />
		</div>
		<div className="col-md-10">{ _body }</div>
	</div>
);

headingLeft.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

};

headingLeft.defaultProps = {};

export default headingLeft;
