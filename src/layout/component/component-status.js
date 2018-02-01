import AUlinkList from '../../_uikit/layout/link-list';
import AUheading from '../../_uikit/layout/headings';
import PropTypes from 'prop-types';
import GetData from './../getData';
import Crypto from 'crypto';
import React from 'react';


/**
 * The Component Status
 */
const ComponentStatus = ({ module, _ID, _relativeURL, version, _parseYaml }) => {
	const component = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].ID === module,
		yaml: _parseYaml,
	});

	return (
		<div className="componentStatus">

			<AUheading size="sm" level="2" className="componentStatus__title">Released <span className="badge">v{ version }</span></AUheading>

			<dl className="componentStatus__definition">
				<dt>Changelog</dt>
				<dd><a href={`https://github.com/govau/uikit/blob/master/packages/${ module }/CHANGELOG.md`}>{ version }</a></dd>

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
					<ul className="componentStatus__definition__list componentStatus__definition__list--images js-more-wrapper">
						{
							Object.keys( component[ 0 ].contributors ).map( ( user, i ) => {
								const contributor = component[ 0 ].contributors[ user ];

								return (
									<li className="componentStatus__definition__list__item" key={ i }>
										<a href={ contributor.url } className="avatar">
											<img
												src={ contributor.email && `https://www.gravatar.com/avatar/${ Crypto.createHash('md5').update( contributor.email ).digest('hex') }` }
												alt={`${ contributor.name } avatar picture`}
												title={ contributor.name }
											/>
										</a>
									</li>
								);
							})
						}
					</ul>
				</dd>
			</dl>

		</div>
	);
};

ComponentStatus.propTypes = {
	/**
	 * module: buttons
	 */
	module: PropTypes.string.isRequired,
};

export default ComponentStatus;
