import AUlinkList from '../../_uikit/layout/link-list';
import AUheading from '../../_uikit/layout/headings';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Component Status
 */
const ComponentStatus = ({ module, _ID, _relativeURL }) => (
	<div className="componentStatus">

		<AUheading size="md" level="2" className="componentStatus__title">Released</AUheading>

		<dl className="componentStatus__definition">
			<dt>Changelog</dt>
			<dd><a href={`https://github.com/govau/uikit/blob/master/packages/${ module }/CHANGELOG.md`}>v0.5.0</a></dd>

			<dt>Installed</dt>
			<dd><a href="https://www.npmjs.com/package/@gov.au/buttons">{`npm i @gov.au/${ module }`}</a></dd>

			<dt>Tags</dt>
			<dd>
				<AUlinkList className="componentStatus__definition__list" inline items={[
					{
						link: _relativeURL( '/components/buttons', _ID ),
						text: 'Buttons',
					},
					{
						link: _relativeURL( '/components/component', _ID ),
						text: 'Component',
					},
					{
						link: _relativeURL( '/components/fomrs', _ID ),
						text: 'Forms',
					},
					{
						link: _relativeURL( '/components/cta', _ID ),
						text: 'CTA',
					},
				]} inline/>
			</dd>

			<dt>Requires</dt>
			<dd>
				<AUlinkList className="componentStatus__definition__list" inline items={[
					{
						link: _relativeURL( '/components/core', _ID ),
						text: 'Core',
					},
					{
						link: _relativeURL( '/components/body', _ID ),
						text: 'Body',
					},
				]} inline/>
			</dd>

			<dt>Contributors</dt>
			<dd>
				<ul className="componentStatus__definition__list componentStatus__definition__list--images">
					{
						[
							{
								name: 'User1',
								avatar: 'http://via.placeholder.com/50x50',
								url: 'https://github.com/dominikwilkowski',
							},
							{
								name: 'User2',
								avatar: 'http://via.placeholder.com/50x50',
								url: 'https://github.com/dominikwilkowski',
							},
							{
								name: 'User3',
								avatar: 'http://via.placeholder.com/50x50',
								url: 'https://github.com/dominikwilkowski',
							},
						].map( ( user, i ) => (
							<li key={ i }>
								<a href={ user.url } className="avatar">
									<img src={ user.avatar } alt={`${ user.name } avatar picture`} title={ user.name }/>
								</a>
							</li>
						))
					}
					<li><button className="componentStatus__definition__list__more">20+</button></li>
				</ul>
			</dd>
		</dl>

	</div>
);

ComponentStatus.propTypes = {
	/**
	 * module: buttons
	 */
	module: PropTypes.string.isRequired,
};

export default ComponentStatus;
