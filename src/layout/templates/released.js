import PropTypes           from 'prop-types';
import React, { Fragment } from 'react';
import Fs                  from 'fs';
import Path                from 'path';

import AUbutton  from '../../_uikit/layout/buttons';

/**
 * The Discussion Intro component
 */
const TemplatesReleased = ({ templates, _body, _relativeURL, _parseYaml, _parseMD }) => {
	const cards = templates.map( template => {
		const templatesDir = Path.normalize( `${ __dirname }/../../../content/templates/` );
		const templateYaml = ( `${ templatesDir }${ template }/index.yml` );
		const templateData = _parseYaml( Fs.readFileSync( templateYaml, 'utf-8' ) );

		const intro = _parseMD( Fs.readFileSync( `${ templatesDir }${ template }/intro.md`, 'utf-8' ) )

		return (
			<Fragment>
				<a href={ template } className="template-card__image au-card au-card--shadow">
					<img alt={ `${ template } page template` } src={ _relativeURL( `/assets/img/templates/${ template }.jpg` ) } />
				</a>
				<div className="template-card__content">
					<h2 className="au-display-xl">{ templateData.pagetitle }</h2>
					{ intro }
					<ul className="au-btn__list au-btn__list--inline">
						<li><AUbutton link={ template }>Documentation</AUbutton></li>
						<li><AUbutton link={ `${ template }/customise` } as='secondary'>Customise</AUbutton></li>
					</ul>
				</div>
			</Fragment>
		);
	});

	return (
		<Fragment>
			{ _body }
			<ul className="templates__released">
				{ cards.map( ( card, i ) => (
					<li key={ i } className="template-card au-card">{ card }</li>
				)) }
			</ul>
		</Fragment>
	)
}


export default TemplatesReleased;
