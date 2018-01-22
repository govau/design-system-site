import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 */
const headingLeft = ({ heading, headinglevel, _body }) => {

	const HeadingTag = `h${ headinglevel }`;

	return (
		<div className="row headingLeft">
			<div className="col-md-3">
				<HeadingTag>{ heading }</HeadingTag>
			</div>
			<div className="col-md-9">{ _body }</div>
		</div>
	);

};

headingLeft.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

};

headingLeft.defaultProps = {};

export default headingLeft;
