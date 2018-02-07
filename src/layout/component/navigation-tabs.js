import React, { Fragment } from 'react';
import Navigation from '../navigation';
import PropTypes from 'prop-types';


/**
 * The navigation tabs component
 */
const NavigationTabs = ({ navigation, _body, _relativeURL, _ID, _pages }) => {
	navigation.sections = navigation.sections.map( section => {
		return {
			alignment: section.alignment,
			items: section.items.map( item => {
				return {
					text: item.text,
					link: `/components/${ _pages[ _ID ].module }${ item.link === '/' ? '' : item.link }`,
				};
			}),
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
