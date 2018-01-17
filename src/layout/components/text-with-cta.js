import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const TextWithCTA = ({ btnclasses, btntext, btnurl, _body }) => (
	<Fragment>
		{ _body }
		<p><a href={ btnurl } className={ btnclasses }>{ btntext }</a></p>
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
