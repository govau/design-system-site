/***************************************************************************************************************************************************************
 *
 * Card and CardList components
 *
 * Cards serve as an entry point to more detailed information
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * AUcardHeading - A heading row inside a card
 *
 * @param  {[type]} text        -
 * @param  {[type]} headingSize -
 * @param  {[type]} fullwidth   -
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

AUcardHeading.propTypes = {};

AUcardHeading.defaultProps = {};


/**
 * AUcardImage - An image row inside a card
 *
 * @param  {[type]} image       -
 * @param  {[type]} description -
 * @param  {[type]} link        -
 * @param  {[type]} fullwidth   -
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

AUcardImage.propTypes = {};

AUcardImage.defaultProps = {};


/**
 * AUcardContent - A content row inside a card
 *
 * @param  {[type]} text      -
 * @param  {[type]} fullwidth -
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

AUcardContent.propTypes = {};

AUcardContent.defaultProps = {};


/**
 * AUcardCTA - A call to action row inside a card
 *
 * @param  {[type]} text      -
 * @param  {[type]} link      -
 * @param  {[type]} fullwidth -
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

AUcardCTA.propTypes = {};

AUcardCTA.defaultProps = {};


/**
 * AUcardHTML - A html row inside a card
 *
 * @param  {[type]} html      -
 * @param  {[type]} fullwidth -
 */
export const AUcardHTML = ({ html, fullwidth }) => (
	<div className={ `au-card__html${ fullwidth ? ' au-card__fullwidth' : '' }` }>
		{ html }
	</div>
);

AUcardHTML.propTypes = {};

AUcardHTML.defaultProps = {};


/**
 * AUcardLine - A line row inside a card
 *
 * @param  {[type]} fullwidth -
 */
export const AUcardLine = ({ fullwidth }) => (
	<hr className={ `au-card__line${ fullwidth ? ' au-card__fullwidth' : '' }` } />
);

AUcardLine.propTypes = {};

AUcardLine.defaultProps = {};


/**
 * AUcard - An individual card
 *
 * @param  {[type]}    rows              -
 * @param  {[type]}    link              -
 * @param  {[type]}    appearance        -
 * @param  {[type]}    centered          -
 * @param  {[type]}    href              -
 * @param  {...[type]} attributesOptions -
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

AUcard.propTypes = {};

AUcard.defaultProps = {};


/**
 * AUcardList - A list of cards
 * @param  {[type]} cards       -
 * @param  {[type]} columnSize  -
 * @param  {[type]} matchHeight -
 * @param  {[type]} centered    -
 * @param  {[type]} appearance  -
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

AUcardList.propTypes = {};

AUcardList.defaultProps = {};


// Add prop types and defaults when needed
// oneOf prop type
