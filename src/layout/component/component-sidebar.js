import React, { Fragment } from 'react';

import GetData from './../../helper/getData';
import NavigationAccordion from '../navigation-accordion';


const ComponentSidebar = ({ _relativeURL, _ID, _pages, _parents, _parseYaml }) => {
	const componentStates = {
		published: 'Released',
		inprogress: 'In progress',
		suggestion: 'Suggestions'
	};

	// For each state create an accordion
	const navItems = {};

	Object.keys( componentStates ).forEach( ( state ) => {
		 navItems[ componentStates[ state ] ] = GetData({
			filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === state,
			yaml: _parseYaml,
		});
	});

	return (
		<NavigationAccordion
			navItems={ navItems }
			_relativeURL={ _relativeURL }
			_ID={ _ID }
			_pages={ _pages }
			_parents={ _parents }
			_navItems={ navItems } />
	);
};


ComponentSidebar.propTypes = {};

ComponentSidebar.defaultProps = {};

export default ComponentSidebar;
