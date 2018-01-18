import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 *
 * @disable-docs
 */
const TextWithCTA = ({ button, _body }) => (
	<Fragment>
		{ _body }

		<p>
			<a href={ button.link } className={ `au-btn au-btn--${ button.type }${ button.icon ? ` icon icon--${ button.icon }` : '' }` }>
				{ button.text }
			</a>
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
