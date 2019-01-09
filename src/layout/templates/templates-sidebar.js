import React from 'react';
import Path  from 'path';
import Fs    from 'fs';


import NavigationAccordion from '../navigation-accordion';


/**
 * The NavigationAccordion component
 */
const TemplateSidebar = ({ _relativeURL, _ID, _pages, _parseYaml }) => {
	const templatesDir = Path.normalize( `${ __dirname }/../../../content/templates/` );
	const templatesYaml = Fs.readFileSync( `${ templatesDir }/_all.yml`, 'utf-8' )
	const templates =  _parseYaml( templatesYaml );

	const navItems = {};
	const componentStates = {
		published: 'Released',
		inprogress: 'In progress',
		suggestion: 'Suggestions'
	};

	Object.entries( templates ).map( ( [ templateID, templateData ] ) => {
		const state =  componentStates[ templateData.state ];
		if( !navItems[ state ] ) {
			navItems[ state ] = []
		}

		navItems[ state ].push( {
			name: templateData.name,
			ID: templateID
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

TemplateSidebar.propTypes = {};

TemplateSidebar.defaultProps = {};

export default TemplateSidebar;
