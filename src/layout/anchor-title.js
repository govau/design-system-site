import PropTypes from 'prop-types';
import React from 'react';

import Slugify from 'slugify';



/**
 * The partial component
 */
const AnchorTitle = ({ heading, headingSize }) => {

	const HeadingTag = `h${ headingSize }`;
	const slugifiedText = Slugify( heading ).toLowerCase();

	return (
		<HeadingTag id={ slugifiedText } className="anchor">
			<a className="icon icon--link"
				aria-hidden="true"
				href={ '#' + slugifiedText }></a>{ heading }
		</HeadingTag>
	);

};

AnchorTitle.propTypes = {
	/**
	 * heading: Hello world
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * headingSize: 4
	 */
	headingSize: PropTypes.number.isRequired,

};

AnchorTitle.defaultProps = {};

export default AnchorTitle;
