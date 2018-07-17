import React     from 'react';
import PropTypes from 'prop-types';


/**
 * The Code component
 */
const Code = ({ language, nocopy, children, className, ...attributeOptions }) => (
	<div className="codebox">
		<pre className={ `language-${ language }${ nocopy ? ' js-nocopy' : '' } ${ className ? className : '' }` }>
			<code className={ `language-${ language }` } { ...attributeOptions } >
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
	nocopy: PropTypes.bool.isRequired,

	/**
	 * children: (text)(4)
	 */
	children: PropTypes.node.isRequired,
};

Code.defaultProps = {
	language: 'none',
	nocopy: false,
};

export default Code;
