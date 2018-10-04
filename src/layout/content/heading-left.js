import PropTypes from 'prop-types';
import React from 'react';

import AnchorTitle from '../anchor-title';


/**
 * The partial component
 */
const headingLeft = ({ heading, headingSize, _body }) => (
	<div className="row headingLeft">
		<div className="col-md-2">
			<AnchorTitle
				heading={ heading }
				headingSize={ headingSize } />
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

headingLeft.defaultProps = {
	headingSize: '3',
};

export default headingLeft;
