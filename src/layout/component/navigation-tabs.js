import React, { Fragment } from 'react';
import Navigation from '../navigation';
import GetModule from './../getModule';
import PropTypes from 'prop-types';


/**
 * The navigation tabs component
 */
const NavigationTabs = ({ navigation, _body, _relativeURL, _ID, _pages, _parents }) => {
	const module = GetModule( _parents, _pages, _ID );

	navigation.sections = navigation.sections.map( section => {
		return {
			alignment: section.alignment,
			items: section.items.map( item => {
				return {
					text: item.text,
					link: `/components/${ module }${ item.link === '/' ? '' : item.link }`,
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
