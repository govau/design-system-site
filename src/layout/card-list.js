/***************************************************************************************************************************************************************
 *
 * CardList component
 *
 * TODO: Remove disable docs on uikit
 * @disable-docs
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
 * @param  {string}  columnSize  - The column size for each individual card (col-xs-6 col-sm-3 etc)
 * @param  {string}  appearance  - The appearance of all the cards ( shadow border-left etc)
 * @param  {boolean} alignment   - Text alignment
 * @param  {boolean} matchHeight - Adds flex stlyes so cards match height
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
	apperance: PropTypes.oneOf([ 'flat', 'shadow', 'border-left' ]),
	alignment: PropTypes.oneOf([ 'left', 'center', 'right' ]),
	columnSize: PropTypes.string,
	matchHeight: PropTypes.bool,
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			apperance: PropTypes.oneOf([ 'flat', 'shadow', 'border-left' ]),
			alignment: PropTypes.oneOf([ 'flat', 'shadow', 'border-left' ]),
			link: PropTypes.string,
			rows: PropTypes.arrayOf(
				PropTypes.shape({
					type: PropTypes.string.isRequired,
					image: PropTypes.string,
					svg: PropTypes.string,
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
