import React     from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 *
 * @disable-docs
 */
const Code = ({ language, copy, children }) => (
	<pre className={ `codebox language-${ language }` }>
		<code className={ `language-${ language } ${ copy ? ' js-copy' : '' }` }>
			{ children }
		</code>
	</pre>
);

Code.propTypes = {
	/**
	 * language: none
	 */
	language: PropTypes.string.isRequired,

	/**
	 * copy: true
	 */
	copy: PropTypes.bool.isRequired,

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Code.defaultProps = {
	language: 'none',
	copy: 'true'
};

export default Code;
