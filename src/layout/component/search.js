import AUheading from '../../_uikit/layout/headings';
import React, { Fragment } from 'react';
import AUcard from '../card';
import PropTypes from 'prop-types';


/**
 * The search component
 *
 * @disable-docs
 */
const Search = ({ headline, link, _parseReact }) => {
	const output = {};
	output.publishedStart = `
		<section class="searchpage__section released">
			<h2 class="searchpage__section__headline au-display-md">
				Released
				<span class="searchpage__section__headline__found">(##found##)</span>
			</h2>
			<ul class="searchpage__section__listing au-card-list au-card-list--matchheight">
	`;
	output.publishedMiddle = `
		<li class="col-xs-6 col-sm-3">
			${ _parseReact(
			<AUcard
				rows={[
					{
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
					}
				]}
				link="##url##"
				appearance="shadow"
			/>
		) }
		</li>`;
	output.publishedEnd = `
			</ul>
		</section>
	`;

	output.inprogressStart = `
		<section class="searchpage__section released">
			<h2 class="searchpage__section__headline au-display-md">
				In progress
				<span class="searchpage__section__headline__found">(##found##)</span>
			</h2>
			<div class="au-responsive-table component-table">
				<table>
					<caption class="au-responsive-table__caption">
						A table of components that are in progress of development.
					</caption>
					<thead>
						<tr class="au-responsive-table__header">
							<th scope="col">Title</th>
						</tr>
					</thead>
					<tbody>
	`;
	output.inprogressMiddle = `
		<tr class="au-responsive-table__body">
			<td scope="col"><a href="##url##">##name##</a></td>
		</tr>
	`;
	output.inprogressEnd = `
					</tbody>
				</table>
			</div>
		</section>
	`;

	output.avatarStart = `
		<ul class="component-status__definition__list component-status__definition__list--images js-more-wrapper">
	`;
	output.avatarMiddle = `
		<li class="component-status__definition__list__item">
			<a href="##avatarurl##" class="avatar">
				<img src="##avatarimg##" alt="##avatarname## avatar picture" title="##avatarname##">
			</a>
		</li>
	`;
	output.avatarEnd = `
		</ul>
	`;

	output.suggestionStart = `
		<section class="searchpage__section released">
			<h2 class="searchpage__section__headline au-display-md">
				Suggestion
				<span class="searchpage__section__headline__found">(##found##)</span>
			</h2>
			<div class="au-responsive-table component-table">
				<table>
					<caption class="au-responsive-table__caption">
						A table of components that have been suggested, including their status.
					</caption>
					<thead>
						<tr class="au-responsive-table__header">
							<th scope="col">Title</th>
						</tr>
					</thead>
					<tbody>
	`;
	output.suggestionMiddle = `
		<tr class="au-responsive-table__body">
			<td scope="col"><a href="##url##">##name##</a></td>
		</tr>
	`;
	output.suggestionEnd = `
					</tbody>
				</table>
			</div>
		</section>
	`;

	return (
		<div className="searchpage">
			<div className="searchpage__headline">
				<AUheading className="searchpage__headline__heading" size="lg" level="1">
					{ headline }&nbsp;
					<span className="searchpage__headline__heading__searchstring">##searchstring##</span>
				</AUheading>
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
