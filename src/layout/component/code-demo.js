import CodeSnippet from '../code-snippet';

import React from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';



/**
 * The codedemo component
 */
const CodeDemo = ({ headline, example, exampleFullwidth, height = null, code, _body, _ID, _relativeURL }) => {
	const codeExampleClass = exampleFullwidth ? 'col-sm-12' : 'col-sm-6';
	const iframeSrc = _relativeURL( `/${ _ID }/${ example }/`, _ID );

	return (
		<div className="code-demo">
			<div className="row" id={ Slugify( headline ).toLowerCase() }>
				<a className="code-demo__anchor" href={`#${ Slugify( headline ).toLowerCase() }`}>#</a>

					<div className={`code-demo__text ${ codeExampleClass }` }>
						<h2 className="code-demo__headline">
							{ headline }
						</h2>
						{ _body }
					</div>

					<div className={`code-demo__example-wrapper ${ codeExampleClass }` }>
						<div className="code-demo__example">
							<h2 className='code-demo__example-title'>Example</h2>
							<iframe
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
									<div className="tabs">
										<nav className="tabs-nav">
											<ul className="au-link-list au-link-list--inline ">
												{
													code && code.map( ( section, i ) => (
														<li key={ i } className={ i === 0 ? 'tab-item--active' : '' }>
															<a
																href={`#${ Slugify( Object.keys( section )[ 0 ] ).toLowerCase() }-${ Slugify( headline ).toLowerCase() }`}
																aria-controls={`${ Slugify( Object.keys( section )[ 0 ] ).toLowerCase() }-${ Slugify( headline ).toLowerCase() }`}
																role="tab"
															>
																{ Object.keys( section )[ 0 ] }
															</a>
														</li>
													))
												}
											</ul>
										</nav>
										<div className="tab-contents">
											{
												code && code.map( ( section, i ) => (
													<div
														className={ `tab-content ${ i === 0 ? 'tab-content--active' : '' }` }
														key={ i }
														tabIndex="-1"
														role="tabpanel"
														id={ `${ Slugify( Object.keys( section )[ 0 ] ).toLowerCase() }-${ Slugify( headline ).toLowerCase() }` }
													>
														<CodeSnippet language={
															Object.keys( section )[ 0 ] === 'HTML' ? 'html' : '' +
															Object.keys( section )[ 0 ] === 'SCSS' ? 'scss' : '' +
															Object.keys( section )[ 0 ] === 'React' ? 'jsx' : ''
														}>
															{ section[ Object.keys( section )] }
														</CodeSnippet>
													</div>
												))
											}
										</div>
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
	 * headline: Primary Buttons
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * example: primary
	 */
	example: PropTypes.string.isRequired,

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
