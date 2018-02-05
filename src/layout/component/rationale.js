import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 */
const Rationale = ({ heading, headinglevel, _body }) => {

	const HeadingTag = `h${ headinglevel }`;

	return (
		<div className="row headingLeft">
			<div className="col-md-4">
				<HeadingTag>{ heading }</HeadingTag>
			</div>
			<div className="col-md-8">{ _body }</div>
		</div>
	);

};

Rationale.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

};

Rationale.defaultProps = {};

export default Rationale;
