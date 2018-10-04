import PropTypes from 'prop-types';
import React from 'react';

import Slugify from 'slugify';



/**
 * The partial component
 */
const AnchorTitle = ({ heading, headinglevel }) => {

	const HeadingTag = `h${ headinglevel }`;
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
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

};

AnchorTitle.defaultProps = {};

export default AnchorTitle;
