import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The section component
 */
const Section = ({ _body }) => (
	<section className="section">{ _body }</section>
);

Section.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
