/***************************************************************************************************************************************************************
 *
 * Card, CardRows and CardList components
 *
 * Cards serve as an entry point to more detailed information
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * AUcardHeading - A heading row inside a card
 *
 * @param  {string} text             - The text inside the heading
 * @param  {string} headingSize      - The tag level (<h1/> <h2/> etc)
 * @param  {string} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string} link             - The link that the element goes to
 * @param  {string} href             - We add the href so it isn't added to the attributeOptions
 * @param  {string} attributeOptions - All of the other properties that can be added
 */
export const AUcardHeading = ({ text, headingSize, fullwidth, link, href, ...attributesOptions = {} }) => {

	const HeadingContainer = `h${ headingSize }`;

	if ( link ) {
		return (
			<HeadingContainer className={ `au-card__title${ fullwidth ? ' au-card__fullwidth' : '' }` }>
				<a href={ link } >{ text }</a>
			</HeadingContainer>
		)
	}

	return(
		<HeadingContainer className={ `au-card__title${ fullwidth ? ' au-card__fullwidth' : '' }` }>
			{ text }
		</HeadingContainer>
	);
};

AUcardHeading.propTypes = {
	text: PropTypes.string.isRequired,
	headingSize: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	fullwidth: PropTypes.bool,
	link: PropTypes.string,
};

AUcardHeading.defaultProps = {
	headingSize: '3',
};


/**
 * AUcardImage - An image row inside a card
 *
 * @param  {string} image            - The image inside the row
 * @param  {string} description      - The text only description for the image
 * @param  {string} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string} link             - The link that the element goes to
 * @param  {string} href             - We add the href so it isn't added to the attributeOptions
 * @param  {string} attributeOptions - All of the other properties that can be added
 */
export const AUcardImage = ({ image, description, fullwidth, link, href, ...attributesOptions = {} }) => {
	let ImageContainer = 'div';

	if( link !== undefined ) {
		ImageContainer = 'a';
		attributesOptions.href = link;
	}

	return(
		<ImageContainer { ...attributesOptions } className={ `au-card__image${ fullwidth ? ' au-card__fullwidth' : '' }` }>
			<img alt={ description } src={ image } />
		</ImageContainer>
	);
};

AUcardImage.propTypes = {
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	fullwidth: PropTypes.bool,
	link: PropTypes.string,
};


/**
 * AUcardContent - A content row inside a card
 *
 * @param  {string} text             - The text inside the content area
 * @param  {string} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string} link             - The link that the element goes to
 * @param  {string} href             - We add the href so it isn't added to the attributeOptions
 * @param  {string} attributeOptions - All of the other properties that can be added
 */
export const AUcardContent = ({ text, fullwidth, link, href, ...attributesOptions = {} }) => {

	let ContentContainer = 'p';

	if( link !== undefined ) {
		ContentContainer = 'a';
		attributesOptions.href = link;
	}

	return (
		<ContentContainer
			{ ...attributesOptions }
			className={ `au-card__content${ fullwidth ? ' au-card__fullwidth' : '' }` }
		>
			{ text }
		</ContentContainer>
	);
};

AUcardContent.propTypes = {
	text: PropTypes.string.isRequired,
	fullwidth: PropTypes.bool,
	link: PropTypes.string,
};


/**
 * AUcardCTA - A call to action row inside a card
 *
 * @param  {[type]} text             - The text inside the call to action
 * @param  {string} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string} link             - The link that the element goes to
 * @param  {string} href             - We add the href so it isn't added to the attributeOptions
 * @param  {string} attributeOptions - All of the other properties that can be added
 */
export const AUcardCTA = ({ text, fullwidth, link, href, ...attributesOptions = {} }) => {

	let CTAContainer = 'div';

	if( link !== undefined ) {
		CTAContainer = 'a';
		attributesOptions.href = link;
	}

	return(
		<CTAContainer
			{ ...attributesOptions }
			className={ `au-card__cta${ fullwidth ? ' au-card__fullwidth' : '' }` }
		>
			{ text }
		</CTAContainer>
	);
};

AUcardCTA.propTypes = {
	text: PropTypes.string.isRequired,
	fullwidth: PropTypes.bool,
	link: PropTypes.string.isRequired,
};


/**
 * AUcardHTML - A html row inside a card
 *
 * @param  {[type]} html      - The HTML inside the row
 * @param  {string} fullwidth - If the element stretches to the fullwidth of the container
 */
export const AUcardHTML = ({ html, fullwidth }) => (
	<div className={ `au-card__html${ fullwidth ? ' au-card__fullwidth' : '' }` }>
		{ html }
	</div>
);

AUcardHTML.propTypes = {
	html: PropTypes.node.isRequired,
	fullwidth: PropTypes.bool,
};


/**
 * AUcardLine - A line row inside a card
 *
 * @param  {string} fullwidth - If the element stretches to the fullwidth of the container
 */
export const AUcardLine = ({ fullwidth }) => (
	<hr className={ `au-card__line${ fullwidth ? ' au-card__fullwidth' : '' }` } />
);

AUcardLine.propTypes = {
	fullwidth: PropTypes.bool,
};


/**
 * AUcard - An individual card
 *
 * @param  {object}  rows             - The rows inside the card
 * @param  {string}  appearance       - The appearance of the card ( shadow border-left etc)
 * @param  {boolean} centered         - If the card has centered text
 * @param  {string}  link             - The link that the element goes to
 * @param  {string}  href             - We add the href so it isn't added to the attributeOptions
 * @param  {string}  attributeOptions - All of the other properties that can be added
 */
export const AUcard = ({ rows, appearance, centered, link, href, ...attributesOptions = {} }) => {

	let CardContainer = 'div';

	if( link !== undefined ) {
		CardContainer = 'a';
		attributesOptions.href = link;
	}

	const CardComponents = {
		line: AUcardLine,
		cta: AUcardCTA,
		image: AUcardImage,
		heading: AUcardHeading,
		content: AUcardContent,
		html: AUcardHTML,
	}

	const items = [];
	rows.map( row => {

		// If the parent is a link remove link
		if( CardContainer === 'a' ){
			delete row.link;
		}

		// Create an object to make the component
		items.push({
			component: CardComponents[ row.type ],
			props: row,
		});
	});

	return (
		<CardContainer { ...attributesOptions } className={
			`au-card ${ appearance === 'shadow' ? ' au-card--shadow' : '' }` +
			`${ centered ? ' au-card--centered': '' }`
		}>
			{
				items.map( ( item, i ) =>
					<item.component { ...item.props } key={ i } />
				)
			}
		</CardContainer>
	);
}

AUcard.propTypes = {
	/**
	 * appearance: shadow
	 */
	apperance: PropTypes.string,

	/**
	 * centered: true
	 */
	centered: PropTypes.string,

	/**
	 * link: #
	 */
	link: PropTypes.string,

	/**
	 * rows:
	 *   - type: image
	 *     image: http://via.placeholder.com/300x300/f5f5f5/636363
	 *     description: A 300x300 image
	 *     fullwidth: true
	 *   - type: heading
	 *     headingSize: 3
	 *     text: Hello world
	 *     link: #
	 */
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
	).isRequired
};

AUcard.defaultProps = {};


/**
 * AUcardList - A list of cards
 *
 * @param  {object}  cards       - The cards and what is inside each row
 * @param  {string}  columnSize  - The column size for each individual card
 * @param  {string}  appearance  - The appearance of all the cards ( shadow border-left etc)
 * @param  {boolean} centered    - If all of the cards have centered text
 * @param  {boolean} matchHeight - (col-xs-6 col-sm-3 etc)
 */
export const AUcardList = ({ cards, columnSize, matchHeight, centered, appearance }) => (
	<ul className={ `au-card-list${ matchHeight ? ' au-card-list--matchheight' : '' }` }>
		{
			cards.map( ( card, i ) =>
				<li key={ i } className={ columnSize } >
					<AUcard
						rows={ card.rows }
						link={ card.link }
						appearance={ card.appearance || appearance }
						centered={ card.centered || centered }
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
	apperance: PropTypes.string,

	/**
	 * centered: true
	 */
	centered: PropTypes.bool,

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
	 * - rows:
	 *   - type: image
	 *     image: http://via.placeholder.com/300x300/f5f5f5/636363
	 *     description: A 300x300 image
	 *     fullwidth: true
	 *   - type: heading
	 *     headingSize: 3
	 *     text: Hello world
	 *     link: #
	 *   link: #
	 * - rows:
	 *   - type: image
	 *     image: http://via.placeholder.com/300x300/f5f5f5/636363
	 *     description: A 300x300 image
	 *     fullwidth: true
	 *   - type: heading
	 *     headingSize: 3
	 *     text: Boop
	 *     link: #
	 */
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			apperance: PropTypes.string,
			centered: PropTypes.string,
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
			).isRequired
		})
	).isRequired
};
