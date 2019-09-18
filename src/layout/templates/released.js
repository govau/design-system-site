import React, { Fragment } from 'react';
import Fs                  from 'fs';
import Path                from 'path';

import AUbutton  from '../../_auds/layout/buttons';
import AUcard,{ AUcardLink, AUcardTitle, AUcardInner } from '../../_auds/layout/card';


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
				<AUcard className="au-body" clickable shadow>
				<div className="template-card__image">
				<img className="au-responsive-media-img" 
															alt={ `${ templateID } page template` }
															src={ _relativeURL( `/assets/img/templates/${ templateImg }` ) } />
				</div>
															
				<AUcardInner>
				<AUcardTitle level="3"><AUcardLink link={ templateID } text={ templates[ templateID ].name } /></AUcardTitle>
														{ _parseMD( templates[ templateID ].description ) }									
				</AUcardInner>												
																					
				</AUcard>
			</Fragment>
		);
	 } );

	// Create a listing of cards
	return (
		<Fragment>
			{ _body }
			<ul className="au-card-list au-card-list--matchheight">
			{ cards.map( ( card, i ) => (
					<li key={ i } className="col-md-4">
						
						{ card }
						
				 	</li>
				 ))}
			</ul>
		</Fragment>
	)
}


export default TemplatesReleased;
