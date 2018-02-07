import React     from 'react';
import PropTypes from 'prop-types';


/**
 * The Code component
 */
const Code = ({ language, copy, children, className }) => (
	<div className={ `codebox${ copy ? ' js-copy' : '' }` }>
		<pre className={ `language-${ language } ${ className ? className : '' }` }>
			<code className={ `language-${ language }` }>
				{ children }
			</code>
		</pre>
	</div>
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
