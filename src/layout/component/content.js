import AUcardList          from '../card-list';
import GetData             from '../../helper/getData';

import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * The component released listing of cards
 */
const ComponentReleased = ({ cardList, _ID, _body, _parseYaml, _relativeURL }) => {

	const components = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].category === 'content',
		yaml: _parseYaml,
	});

	const cards = components.map( component => {
		const cardData = {
			link: _relativeURL( `/components/${ component.ID }`, _ID ),
			rows: [{
				type: 'svg',
				title: component.name,
				svg: `/assets/svg/map.svg#${ component.ID }`,
				description: component.description,
				fullwidth: true,
			},
			{
				type: 'heading',
				headingSize: '3',
				text: component.name,
			}]
		};

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
					shadow={ cardList.shadow }
					columnSize={ cardList.columnSize }
					matchHeight={ cardList.matchHeight }
					description={ cards.description }
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
