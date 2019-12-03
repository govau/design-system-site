import React, { Fragment } from 'react';

import GetData from './../../helper/getData';
import NavigationAccordion from '../navigation-accordion';


const ComponentSidebar = ({ _relativeURL, _ID, _pages, _parseYaml }) => {
	const compenentCategories = {
		core: 'Core',
		layout: 'Layout',
		content: 'Content',
		navigation: 'Navigation',
		forms: 'Forms'
	};

	// For each category create an accordion
	const navItems = {};

	Object.keys( compenentCategories ).forEach( ( category ) => {
		 navItems[ compenentCategories[ category ] ] = GetData({
			filter: ( key, COMPONENTS ) => COMPONENTS[ key ].category === category,
			yaml: _parseYaml,
		});
		console.log({ navItems });
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
