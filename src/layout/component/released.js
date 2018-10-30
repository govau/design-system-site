import AUcardList          from '../card-list';
import GetData             from './../../helper/getData';
import GetTemplateData             from './../../helper/getTemplateData';


import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * The component/template released listing of cards
 */
const ComponentReleased = ({ cardList, cardType, releasedItemsPath, _ID, _body, _parseYaml, _relativeURL }) => {

	const components = cardType === 'components' ? GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === 'published',
		yaml: _parseYaml
	}) : GetTemplateData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === 'published',
		yaml: _parseYaml
	})

	const cards = components.map( component => {

		const imageRow = cardType === 'components' ? {
			type: 'svg',
			title: component.name,
			svg: `/assets/svg/map.svg#${ component.ID }`,
			description: component.description,
			fullwidth: true,
		} :
		{
			type:  'image',
			title: component.name,
			image: `/assets/img/template.${ component.ID }.png`,
			description: component.description,
			fullwidth: true,

		}
		const cardData = {
			link: _relativeURL( `${ releasedItemsPath + component.ID }`, _ID ),
			rows: [
			imageRow,
			{
				type: 'heading',
				headingSize: '3',
				text: component.name,
			}]
		}

		if ( component.highlight ) {
			cardData.rows.push ({
				type: 'html',
				html: <div className="card__highlight">{ component.highlight }</div>
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
