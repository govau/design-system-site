import React from 'react';
import Path  from 'path';
import Fs    from 'fs';


import NavigationAccordion from '../navigation-accordion';


/**
 * The NavigationAccordion component
 */
const TemplateSidebar = ({ _relativeURL, _ID, _pages, _parseYaml }) => {

	const templatesDir = Path.normalize( `${ __dirname }/../../../content/templates/` );

	const navItems = {
		Released: [],
	};

	const templates = _parseYaml(
		Fs.readFileSync( `${ templatesDir }/_all.yml`, 'utf-8' )
	);

	templates.map( template => {
		const templateYaml = ( `${ templatesDir }${ template }/index.yml` );
		const templateData = _parseYaml( Fs.readFileSync( templateYaml, 'utf-8' ) );

		navItems.Released.push( {
			name: templateData.pagetitle,
			ID: template
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
