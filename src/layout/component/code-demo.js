import { SETTINGS } from 'cuttlebelle/dist/settings.js';
import Code from '../code';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';
import Path from 'path';
import Fs from 'fs';


/**
 * The codedemo component
 */
const CodeDemo = ({ headline, example, code, _body, _ID, _parseMD }) => {
	const pathToCode = Path.normalize(`${ SETTINGS.get().folder.content }/${ _ID }/examples/example${ example }/code.md`);
	const exampleCode = Fs.readFileSync( pathToCode, 'utf8' );

	return (
		<div className="code-demo" id={ Slugify( headline ).toLowerCase() }>
			<a className="code-demo__anchor" href={`#${ Slugify( headline ).toLowerCase() }`}>#</a>

			<h2 className="code-demo__headline">{ headline }</h2>

			<div className="code-demo__example">
				<iframe className="code-demo__example__iframe" src={`examples/example${ example }/`}>{ exampleCode }</iframe>
				<div className="code-demo__example__code">
					<ul>
						{
							code.map( ( section, i ) => (
								<li key={ i }><a href={`#${ Slugify( Object.keys( section )[ 0 ] ).toLowerCase() }-${ headline.toLowerCase() }`}>{ Object.keys( section )[ 0 ] }</a></li>
							))
						}
					</ul>
					{
						code.map( ( section, i ) => (
							<div key={ i } id={ `${ Slugify( Object.keys( section )[ 0 ] ).toLowerCase() }-${ headline.toLowerCase() }` }>
								<Code language={
									Object.keys( section )[ 0 ] === 'HTML' ? 'html' : '' +
									Object.keys( section )[ 0 ] === 'React' ? 'javascript' : ''
								}>{ section[ Object.keys( section )] }</Code>
							</div>
						))
					}
				</div>
			</div>

			<div className="code-demo__text">
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
	 * example: 1
	 */
	example: PropTypes.number.isRequired,

	/**
	 * code:
	 *   - HTML: |
	 *       <button class="au-btn">example button</button>
	 *   - React: |
	 *       <AUbutton>Continue</AUbutton>
	 */
	code: PropTypes.arrayOf( PropTypes.object ).isRequired,
};

CodeDemo.defaultProps = {};

export default CodeDemo;
