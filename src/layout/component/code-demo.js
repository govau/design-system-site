import { SETTINGS } from 'cuttlebelle/dist/settings';
import Code from '../code';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';
import Path from 'path';
import Fs from 'fs';


/**
 * The codedemo component
 */
const CodeDemo = ({ headline, example, exampleFullwidth, iframe, code, _body, _ID, _parseMD, _relativeURL }) => {
	const pathToCode = Path.normalize(`${ SETTINGS.get().folder.content }/${ _ID }/${ example }/code.md`);
	const exampleCode = Fs.readFileSync( pathToCode, 'utf8' );

	return (
		<div className="code-demo">
			<div className="row" id={ Slugify( headline ).toLowerCase() }>
				<a className="code-demo__anchor" href={`#${ Slugify( headline ).toLowerCase() }`}>#</a>

				<div className="col-sm-6 code-demo__text">
					<h2 className="code-demo__headline">
						{ headline }
					</h2>
					{ _body }
				</div>

				<div className={`code-demo__example-wrapper ${exampleFullwidth
							? ' col-sm-12'
							: ' col-sm-6'
						}`}>
					<div className="code-demo__example">
						<iframe
							frameBorder="0"
							className="code-demo__example__iframe"
							scrolling="no"
							src={ iframe ? _relativeURL( `/${ _ID }/${ iframe }/`, _ID ) : _relativeURL( `/${ _ID }/${ example }/`, _ID ) }>
								{ exampleCode }
						</iframe>
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
														<Code language={
															Object.keys( section )[ 0 ] === 'HTML' ? 'html' : '' +
															Object.keys( section )[ 0 ] === 'SCSS' ? 'scss' : '' +
															Object.keys( section )[ 0 ] === 'React' ? 'jsx' : ''
														}>
															{ section[ Object.keys( section )] }
														</Code>
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
