import React     from 'react';
import PropTypes from 'prop-types';


/**
 * The CodeSnippet component
 */
const CodeSnippet = ({ language, nocopy, children, className, ...attributeOptions }) => (
	<div className="codebox">
		<pre className={ `language-${ language }${ nocopy ? ' js-nocopy' : '' } ${ className ? className : '' }` }>
			<code className={ `language-${ language }` } { ...attributeOptions } >
				{ children }
			</code>
		</pre>
	</div>
);

CodeSnippet.propTypes = {
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

CodeSnippet.defaultProps = {
	language: 'none',
	nocopy: false,
};

export default CodeSnippet;
