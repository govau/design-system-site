import AUcardList          from '../card-list';
import AUbutton from '../../_uikit/layout/buttons';

import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The featured component
 */
const Features = ({ title, btnURL, btntext, features, featureTitleSize, cardList, _parseYaml, _body }) => {
	const cards = features.map( feature => {
		let featureTitle = feature.title.toString();

		// Fetch the data if the title is meant to be dynamic
		if ( featureTitle.includes( '-replace' ) ){
			const dataType = featureTitle.replace( '-replace', '' );
			const { uikit } = _parseYaml(
				Fs.readFileSync(
					Path.normalize(`${ __dirname }/../../../content/_data.yml`),
					{ encoding: 'utf8' }
				)
			);

			featureTitle = uikit[ dataType ].toString();
		}

		return {
			rows: [
			{
				type: 'heading',
				headingSize: '3',
				text: featureTitle,
				className: `au-display-${ featureTitleSize }`,
			},
			{
				type: 'content',
				text: feature.text,
			}]
		};
	});

	return (
	<div className="features">
		<div className="features__intro row">
			<div className="col-md-6 col-md-offset-3">
				<h2>{ title }</h2>
				{ _body }
			</div>
		</div>

		<AUcardList
			className="row"
			cards={ cards }
			appearance={ cardList.appearance }
			columnSize={ cardList.columnSize }
			matchHeight={ cardList.matchHeight }
			alignment={ cardList.alignment }/>

		{
			btnURL && btntext
				?
					<div className="features__cta">
						<AUbutton link={ btnURL } as='secondary'>{ btntext }</AUbutton>
					</div>
				: null
	 	}

	</div>
	)
};


Features.propTypes = {
	/**
	 * title: What makes our components great
	 */
	title: PropTypes.string.isRequired,

	/**
	 * btnURL: /components
	 */
	btnURL: PropTypes.string,

	/**
	 * btntext: See an examples
	 */
	btntext: PropTypes.string,

	/**
	 * features:
	 *   - title: Designed
	 *     text: High-quality visual design
	 *   - title: Modern
	 *     text: HTML5 Semantics
	 *   - title: Responsive
	 *     text: Mobile first responsive design
	 *   - title: Tested
	 *     text: Usability tested by the community
	 *   - title: Accessible
	 *     text: WCAG 2.1 AA standard accessibility
	 *   - title: Robust
	 *     text: Browser support back to IE8 and no-js fallbacks
	 */
	features: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
};

Features.defaultProps = {};

export default Features;
