import Navigation from '../navigation';
import GetModule from './../../helper/getModule';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Fs from 'fs';


/**
 * The navigation tabs component
 */
const NavigationTabs = ({ navigation, _relativeURL, _ID, _pages, _parents }) => {
	const pageID = _ID.split( '/' )[ 1 ];

	navigation.sections = navigation.sections.map( section => {

		const navItems = [];

		section.items.map( item => {
			if ( Fs.existsSync( `content/${ navigation.parent }/${ pageID }${ item.link }` ) ) {
				navItems.push({
					text: item.text,
					link: `/${ navigation.parent }/${ pageID }${ item.link === '/' ? '' : item.link }`,
				});
			}
		});

		return {
			alignment: section.alignment,
			items: navItems,
		};
	});

	return (
		<Navigation
			navigation={ navigation }
			_relativeURL={ _relativeURL }
			_ID={ _ID }
			_pages={ _pages }
		/>
	);
};

NavigationTabs.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

NavigationTabs.defaultProps = {};

export default NavigationTabs;
