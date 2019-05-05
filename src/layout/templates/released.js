import React, { Fragment } from 'react';
import Fs                  from 'fs';
import Path                from 'path';

import AUbutton  from '../../_auds/layout/buttons';

/**
 * The Discussion Intro component
 */
const TemplatesReleased = ({ _body, _relativeURL, _parseYaml, _parseMD }) => {
	const templatesDir = Path.normalize( `${ __dirname }/../../../content/templates/` );
	const templateImgAssetDir = Path.normalize( `${ __dirname }/../../../src/assets/img/templates` );
	const templateYaml = Fs.readFileSync( `${ templatesDir }/_all.yml`, 'utf-8' );
	const templates = _parseYaml( templateYaml );
	const templateImgs = Fs.readdirSync( templateImgAssetDir );

	// Create an array of released template keys
	const releasedTemplates = Object.keys( templates )
		.filter( templateID => templates[ templateID ].state === 'published' );

	// Create a card for each released template
	const cards = releasedTemplates.map( templateID => {
		// Match the template ID with the img filename, we do this so we can use whatever file ext.
		let templateImg = templateImgs.find( item => new RegExp( templateID ).test( item ) );

		return (
			<Fragment>
				<div className="template-card__content">
					<h2 className="au-display-xl">{ templates[ templateID ].name }</h2>
					{ _parseMD( templates[ templateID ].description ) }
					<ul className="au-btn__list au-btn__list--inline">
						<li><AUbutton link={ templateID }>Overview</AUbutton></li>
						<li><AUbutton link={ `${ templateID }/customise` } as='secondary'>Customise</AUbutton></li>
					</ul>
				</div>
				<a href={ templateID } className="template-card__image au-card au-card--shadow browser-bar">
					<img
						alt={ `${ templateID } page template` }
						src={ _relativeURL( `/assets/img/templates/${ templateImg }` ) } />
				</a>
			</Fragment>
		);
	 } );

	// Create a listing of cards
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
