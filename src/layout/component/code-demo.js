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
const CodeDemo = ({ headline, example, iframe, code, _body, _ID, _parseMD, _relativeURL }) => {
	const pathToCode = Path.normalize(`${ SETTINGS.get().folder.content }/${ _ID }/${ example }/code.md`);
	const exampleCode = Fs.readFileSync( pathToCode, 'utf8' );

	return (
		<div className="code-demo row" id={ Slugify( headline ).toLowerCase() }>
			<a className="code-demo__anchor" href={`#${ Slugify( headline ).toLowerCase() }`}>#</a>

			<h2 className="col-sm-6 code-demo__headline">
				{ headline }
			</h2>

			<div className="col-sm-6 code-demo__example-wrapper">
				<div className="code-demo__example">
					<iframe
						className="code-demo__example__iframe"
						scrolling="no"
						src={ iframe ? _relativeURL( `/${ _ID }/${ iframe }/`, _ID ) : _relativeURL( `/${ _ID }/${ example }/`, _ID ) }>
							{ exampleCode }
					</iframe>
					{
						code
							?
								<div className="code-demo__example__code">
									<div className="tabs">
										<nav className="tabs-nav">
											<ul className="au-link-list au-link-list--inline ">
												{
													code && code.map( ( section, i ) => (
														<li key={ i } className={ i === 0 ? 'tab-item--active' : '' }>
															<a
																data={ 'boop' }
																href={`#${ Slugify( Object.keys( section )[ 0 ] ).toLowerCase() }-${ Slugify( headline ).toLowerCase() }`}
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
														id={ `${ Slugify( Object.keys( section )[ 0 ] ).toLowerCase() }-${ Slugify( headline ).toLowerCase() }` }
													>
														<Code language={
															Object.keys( section )[ 0 ] === 'HTML' ? 'html' : '' +
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
							: null
						}
				</div>
			</div>

			<div className="col-sm-6 code-demo__text">
				{ _body }
			</div>
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
