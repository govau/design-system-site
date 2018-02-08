import AUheading from '../../_uikit/layout/headings';
import React, { Fragment } from 'react';
import AUcardList from '../card-list';
import PropTypes from 'prop-types';


/**
 * The search component
 *
 * @disable-docs
 */
const Search = ({ headline, link, _parseReact }) => {
	const output = {};
	output.moduleStart = `
		<section class="searchpage__section">
			<h2 class="searchpage__section__headline au-display-md">Released</h2>
			<ul class="searchpage__section__listing">
	`;
	output.moduleMiddle = `
		<li>
		${ _parseReact(
			<AUcardList cards={ [{
				link: '##url##',
				rows: [{
					type: 'svg',
					title: '##name##',
					svg: '##svg##',
					description: '##description##',
					fullwidth: true,
				},
				{
					type: 'heading',
					headingSize: '3',
					text: '##name##',
				}]
			}] } appearance="shadow" columnSize="col-xs-6 col-sm-3" matchHeight={ true } />
		) }
		</li>`;
	output.moduleEnd = `
			</ul>
		</section>
	`;

	output.progressStart = `
		<section class="searchpage__section">
			<h2 class="searchpage__section__headline au-display-md">In progress</h2>
			<ul class="searchpage__section__listing">
	`;
	output.progressMiddle = ``;
	output.progressEnd = `
			</ul>
		</section>
	`;

	output.suggestionStart = `
		<section class="searchpage__section">
			<h2 class="searchpage__section__headline au-display-md">Suggestion</h2>
			<ul class="searchpage__section__listing">
	`;
	output.suggestionMiddle = ``;
	output.suggestionEnd = `
			</ul>
		</section>
	`;

	return (
		<div className="searchpage">
			<div className="searchpage__headline">
				<AUheading className="searchpage__headline__heading" size="lg" level="1">{ headline } ##searchstring##</AUheading>
				<a className="searchpage__headline__link" href={ link.link }>{ link.text }</a>
			</div>
			{
				<div dangerouslySetInnerHTML={ { __html: `*************${ JSON.stringify( output ) }*************` } } />
			}
		</div>
	);
};

Search.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Search.defaultProps = {};

export default Search;
