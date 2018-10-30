import AUcardList          from '../card-list';
import GetData             from './../../helper/getTemplateData';

import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * The component released listing of cards
 */
const ComponentReleased = ({ cardList, _ID, _body, _parseYaml, _relativeURL }) => {

	const templates = GetData({
		filter: ( key, Templates ) => Templates[ key ].state === 'published',
		yaml: _parseYaml,
	});

	const cards = templates.map( template => {
		const cardData = {
			link: _relativeURL( `/templates/${ template.ID }`, _ID ),
			rows: [{
				type: 'image',
				description: template.name,
				image: `/assets/img/template.${ template.ID }.png`,
				description: template.description,
				fullwidth: true,
			},
			{
				type: 'heading',
				headingSize: '3',
				text: template.name,
			}]
		}

		if ( template.highlight ) {
			cardData.rows.push ({
				type: 'html',
				html: <div className="card__highlight">{ template.highlight }</div>
			})
		}

		return cardData;
	})

	return(
		<Fragment>
			{ _body }

			<div className="row released">
				<AUcardList
					cards={ cards }
					appearance={ cardList.appearance }
					columnSize={ cardList.columnSize }
					matchHeight={ cardList.matchHeight }
					alignment={ cardList.alignment }
				/>
			</div>
		</Fragment>
	)
};


ComponentReleased.propTypes = {

	/**
	 * cardList:
	 *   columnSize: col-xs-6 col-sm-3
	 *   matchHeight: true
	 *   appearance: shadow
	 *   cards:
	 *     - rows:
	 *       - type: image
	 *         description: A 300x300 image
	 *         fullwidth: true
	 *       - type: heading
	 *         headingSize: '3'
	 *         text: Hello world
	 *         link: #
	 *       link: #
	 *     - rows:
	 *       - type: image
	 *         description: A 300x300 image
	 *         fullwidth: true
	 *       - type: heading
	 *         headingSize: '3'
	 *         text: Boop
	 *         link: #
	 */
	cardList: PropTypes.shape({
		apperance: PropTypes.oneOf([ 'flat', 'shadow', 'border-left' ]),
		alignment: PropTypes.oneOf([ 'left', 'center', 'right' ]),
		columnSize: PropTypes.string,
		matchHeight: PropTypes.bool,
		cards: PropTypes.arrayOf(
			PropTypes.shape({
				apperance: PropTypes.oneOf([ 'flat', 'shadow', 'border-left' ]),
				alignment: PropTypes.oneOf([ 'left', 'center', 'right' ]),
				link: PropTypes.string,
				rows: PropTypes.arrayOf(
					PropTypes.shape({
						type: PropTypes.string.isRequired,
						image: PropTypes.string,
						description: PropTypes.string,
						text: PropTypes.string,
						link: PropTypes.string,
						fullwidth: PropTypes.bool,
						headingSize: PropTypes.string,
						html: PropTypes.node,
					})
				)
			})
		)
	}).isRequired
};

export default ComponentReleased;
