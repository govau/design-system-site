import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 *
 * @disable-docs
 */
const TextWithCTA = ({ buttonType, buttonText, buttonUrl, buttonIcon, _body }) => (
	<Fragment>
		{ _body }

		<p>
			<a href={ buttonUrl } className={`au-btn au-btn--${ buttonType }${ buttonIcon ? ` icon icon--${ buttonIcon }` : '' }`}>{ buttonText }</a>
		</p>
	</Fragment>
);

TextWithCTA.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

TextWithCTA.defaultProps = {};

export default TextWithCTA;
