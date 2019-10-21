import PropTypes from 'prop-types';
import React from 'react';

import AnchorTitle from '../anchor-title';


/**
 * The partial component
 */
const HeadingLeft = ({ heading, _body, headingSize }) => (
	<div className="row HeadingLeft">
		<div className="col-md-2">
			<AnchorTitle
				heading={ heading }
				headingSize={ headingSize } />
		</div>
		<div className="col-md-10">{ _body }</div>
	</div>
);

HeadingLeft.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

};

HeadingLeft.defaultProps = {
	headingSize: '3',
};

export default HeadingLeft;
