import React     from 'react';
import PropTypes from 'prop-types';


/**
 * The Code component
 */
const Code = ({ language, copy, children, className }) => (
		<pre className={ `language-${ language }${ copy === false ? ' js-no-copy' : '' } ${ className ? className : '' }` }>
			<code className={ `language-${ language }` }>
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
	 * children: (text)(4)
	 */
	children: PropTypes.node.isRequired,
};

Code.defaultProps = {
	language: 'none',
	copy: true,
};

export default Code;
