/***************************************************************************************************************************************************************
 *
 * Card, CardRows and CardList components
 *
 * Cards serve as an entry point to more detailed information
 *
 **************************************************************************************************************************************************************/

import AUcard from './card';

import React from 'react';
import PropTypes from 'prop-types';



/**
 * AUcardList - A list of cards
 *
 * @param  {object}  cards       - The cards and what is inside each row
 * @param  {string}  columnSize  - The column size for each individual card
 * @param  {string}  appearance  - The appearance of all the cards ( shadow border-left etc)
 * @param  {boolean} alignment   - Text alignment
 * @param  {boolean} matchHeight - (col-xs-6 col-sm-3 etc)
 */
const AUcardList = ({ cards, columnSize, matchHeight, alignment, appearance }) => (
	<ul className={ `au-card-list${ matchHeight ? ' au-card-list--matchheight' : '' }` }>
		{
			cards.map( ( card, i ) =>
				<li key={ i } className={ columnSize } >
					<AUcard
						rows={ card.rows }
						link={ card.link }
						alignment={ card.alignment ? card.alignment : alignment }
						appearance={ card.appearance ? card.appearance : appearance }
					/>
				</li>
			)
		}
	</ul>
);

AUcardList.propTypes = {
	/**
	 * appearance: shadow
	 */
	apperance: PropTypes.oneOf([ 'flat', 'shadow', 'border-left' ]),

	/**
	 * alignment: center
	 */
	alignment: PropTypes.oneOf([ 'left', 'center', 'right' ]),

	/**
	 * columnSize: col-xs-6 col-sm-3
	 */
	columnSize: PropTypes.string,

	/**
	 * matchHeight: true
	 */
	matchHeight: PropTypes.bool,

	/**
   * cards:
	 *   - link: http://google.com
   *     rows:
   *       - type: image
   *         image: http://via.placeholder.com/300x300/f5f5f5/636363
   *         description: A 300x300 image
   *         fullwidth: true
   *       - type: heading
   *         headingSize: '3'
   *         text: Hello world
   *         link: http://google.com
	 */
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			apperance: PropTypes.oneOf([ 'flat', 'shadow', 'border-left' ]),
			alignment: PropTypes.oneOf([ 'flat', 'shadow', 'border-left' ]),
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
	).isRequired
};

AUcardList.defaultProps = {
	alignment: 'left',
	appearance: 'flat',
}

export default AUcardList;
