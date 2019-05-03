import CodeSnippet from '../code-snippet';

import React from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';



/**
 * The codedemo component
 */
const CodeDemo = ({ iframe, iframeFullwidth, height = null, code, _body, _ID, _relativeURL }) => {
	const codeExampleClass = iframeFullwidth ? 'col-sm-12' : 'col-sm-6';
	const iframeSrc = _relativeURL( `/${ _ID }/${ iframe }/`, _ID );
	const componentId = _body.key.split( '/' )[ _body.key.split( '/' ).length - 1 ];
	const iframeTitle = `${ componentId.split( '-' )[ 0 ] } example`;


	return (
		<div className="code-demo">
			<div className="row">
				<div className={`code-demo__text ${ codeExampleClass }` }>
					{ _body }
				</div>

				<div className={`code-demo__example-wrapper ${ codeExampleClass }` }>
					<div className="code-demo__example">
						<h2 className='code-demo__example-title'>Example</h2>
						<iframe
							title={ iframeTitle }
							frameBorder="0"
							height={ height }
							className={ `code-demo__example__iframe ${ height === null ? 'code-demo__example__iframe--resize' : '' }` }
							scrolling="no"
							src={ iframeSrc }></iframe>
					</div>
				</div>
			</div>
			{
				code
					?
						<div className="row">
							<div className="col-sm-12">
								<div className="code-demo__example__code">
								<div className="tabs" >
								{
								code && code.map( ( section, i ) => (
									<div data-atabs-panel 
									key={ i }
									id={`demo-${ i }-${componentId}`}
									data-atabs-tab-label={Object.keys( section )[ 0 ]}>
									{<CodeSnippet language={
															Object.keys( section )[ 0 ] === 'HTML' ? 'html' : '' +
															Object.keys( section )[ 0 ] === 'SCSS' ? 'scss' : '' +
															Object.keys( section )[ 0 ] === 'React' ? 'jsx' : ''
														}>
															{ section[ Object.keys( section )] }
														</CodeSnippet>}
														
								  </div>	
													))
													
								}
								</div>
		
									</div>
								</div>
							</div>
				: null
			}
		</div>
		
	);
}


CodeDemo.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,

	/**
	 * iframe: primary
	 */
	iframe: PropTypes.string.isRequired,

	/**
	 * code:
	 *   - HTML: |
	 *       <button class="au-btn">example button</button>
	 *   - React: |
	 *       <AUbutton>Continue</AUbutton>
	 */
	code: PropTypes.arrayOf( PropTypes.object ),
};

CodeDemo.defaultProps = {};

export default CodeDemo;
