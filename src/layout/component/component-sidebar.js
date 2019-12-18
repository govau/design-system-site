import React, { Fragment } from 'react';

import GetData from './../../helper/getData';
import NavigationAccordion from '../navigation-accordion';


const ComponentSidebar = ({ _relativeURL, _ID, _pages, _parseYaml }) => {

	const componentCategories = {
		core: 'Core',
		layout: 'Layout',
		navigation: 'Navigation',
		content: 'Content',
		forms: 'Forms'
	};

	// For each category create an accordion
	const navItems = {};

	Object.keys( componentCategories ).forEach( ( category ) => {
		 navItems[ componentCategories[ category ] ] = GetData({
			filter: ( key, COMPONENTS ) => COMPONENTS[ key ].category === category,
			yaml: _parseYaml,
		});
	});

	return (
		<NavigationAccordion
			navItems={ navItems }
			_relativeURL={ _relativeURL }
			_ID={ _ID }
			_pages={ _pages } />
	);
};


ComponentSidebar.propTypes = {};

ComponentSidebar.defaultProps = {};

export default ComponentSidebar;
