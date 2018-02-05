import AUlinkList                     from '../../_uikit/layout/link-list';
import AUheading                      from '../../_uikit/layout/headings';
import PropTypes                      from 'prop-types';
import GetData, { GetComponentValue } from './../getData';
import Crypto                         from 'crypto';
import React                          from 'react';


/**
 * The Component Status
 */
const ComponentStatus = ({ module, _ID, _relativeURL, version, _parseYaml }) => {

	const component = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].ID === module,
		yaml: _parseYaml,
	})[ 0 ];

	/**
	 * Create an object of link ( id ) and text ( name ) based off an array of values inside the component
	 * @param {*} items
	 */
	const NameIdMenu = ( value ) => {
		const menuItems = [];

		component[ value ].map( item => {
			menuItems.push({
				link: `/components/${ item }`,
				text: GetComponentValue( item, 'name', _parseYaml )
			})
		})

		return menuItems;
	}

	const tags = NameIdMenu( 'tags' );
	const dependencies = NameIdMenu( 'dependencies' );

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
					<AUlinkList className="componentStatus__definition__list" inline items={ tags } inline/>
				</dd>

				<dt>Requires</dt>
				<dd>
					<AUlinkList className="componentStatus__definition__list" inline items={ dependencies } inline/>
				</dd>

				<dt>Contributors</dt>
				<dd>
					<ul className="componentStatus__definition__list componentStatus__definition__list--images js-more-wrapper">
						{
							Object.keys( component.contributors ).map( ( user, i ) => {
								const contributor = component.contributors[ user ];

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
