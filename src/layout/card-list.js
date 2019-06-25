/***************************************************************************************************************************************************************
 *
 * CardList component
 *
 * TODO: Remove disable docs on auds
 * @disable-docs
 *
 * Cards serve as an entry point to more detailed information
 *
 **************************************************************************************************************************************************************/

import AUcardCreator from './card';

import React from 'react';
import PropTypes from 'prop-types';



/**
 * AUcardList - A list of cards
 *
 * @param  {object}  cards       - The cards and what is inside each row
 * @param  {string}  columnSize  - The column size for each individual card (col-xs-6 col-sm-3 etc)
 * @param  {string}  appearance  - The appearance of all the cards ( shadow border-left etc)
 * @param  {boolean} centred   - Text alignment
 * @param  {boolean} matchHeight - Adds flex stlyes so cards match height
 */
const AUcardList = ({ cards, columnSize, matchHeight, centred, clickable, shadow, className = "" }) => (
	<ul className={ `au-card-list${ matchHeight ? ' au-card-list--matchheight' : '' } ${ className }` }>
		{
			cards.map( ( card, i ) =>
				<li key={ i } className={ columnSize } >
					<AUcardCreator
						rows={ card.rows }
						link={ card.link }
						centred={ centred }
						shadow={ shadow }
						clickable={clickable}
					/>
				</li>
			)
		}
	</ul>
);

AUcardList.propTypes = {
	shadow: PropTypes.bool,
	centred: PropTypes.bool,
	clickable: PropTypes.bool,
	columnSize: PropTypes.string,
	matchHeight: PropTypes.bool,
	className: PropTypes.string,
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			shadow: PropTypes.bool,
			centred: PropTypes.bool,
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
	centred: false,
	clickable: false,
	shadow: false
}

export default AUcardList;
