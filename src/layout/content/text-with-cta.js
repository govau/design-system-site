import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 */
const TextWithCTA = ({ button, _body }) => (
	<Fragment>
		{ _body }

		{	button
			?
				<p>
					<a href={ button.link } className={ `au-btn au-btn--${ button.type }${ button.icon ? ` icon icon--${ button.icon }` : '' }` }>
						{ button.text }
					</a>
				</p>
			: ''
		}
	</Fragment>
);

TextWithCTA.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

	/**
	 * button:
	 *   link: #
	 *   text: Button text
	 *   type: secondary
	 *   icon: github
	 */
	button: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string,
		type: PropTypes.string,
		icon: PropTypes.string,
	})
};

TextWithCTA.defaultProps = {};

export default TextWithCTA;
