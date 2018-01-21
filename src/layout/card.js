import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * [description]
 * @param  {[type]} options.text        [description]
 * @param  {[type]} options.headingSize [description]
 * @param  {[type]} options.fullwidth   [description]
 * @return {[type]}                     [description]
 */
export const AUcardHeading = ({ text, headingSize, fullwidth }) => {
	const HeadingContainer = `h${ headingSize }`;

	return(
		<HeadingContainer className={ `au-card__title${ fullwidth ? ' au-card__fullwidth' : '' }` }>
			{ text }
		</HeadingContainer>
	);
};

AUcardHeading.propTypes = {};

AUcardHeading.defaultProps = {};


/**
 * [description]
 * @param  {[type]} options.image       [description]
 * @param  {[type]} options.description [description]
 * @param  {[type]} options.link        [description]
 * @param  {[type]} options.fullwidth   [description]
 * @return {[type]}                     [description]
 */
export const AUcardImage = ({ image, description, link, fullwidth }) => {
	let ImageContainer = 'div';
	let imageProps = {};

	if( link !== undefined ) {
		ImageContainer = 'a';
		imageProps = { href: link };
	}

	return(
		<ImageContainer { ...imageProps } className={ `au-card__image${ fullwidth ? ' au-card__fullwidth' : '' }` }>
			<img alt={ description } src={ image } />
		</ImageContainer>
	);
};

AUcardImage.propTypes = {};

AUcardImage.defaultProps = {};


/**
 * [description]
 * @param  {[type]} options.text      [description]
 * @param  {[type]} options.fullwidth [description]
 * @return {[type]}                   [description]
 */
export const AUcardContent = ({ text, fullwidth }) => (
	<p className={ `au-card__content${ fullwidth ? ' au-card__fullwidth' : '' }` }>{ text }</p>
);

AUcardContent.propTypes = {};

AUcardContent.defaultProps = {};


/**
 * [description]
 * @param  {[type]} options.html      [description]
 * @param  {[type]} options.fullwidth [description]
 * @return {[type]}                   [description]
 */
export const AUcardHTML = ({ html, fullwidth }) => (
	<div className={ `au-card__html${ fullwidth ? ' au-card__fullwidth' : '' }` }>
		{ html }
	</div>
);

AUcardHTML.propTypes = {};

AUcardHTML.defaultProps = {};


/**
 * [description]
 * @param  {[type]} options.fullwidth [description]
 * @return {[type]}                   [description]
 */
export const AUcardLine = ({ fullwidth }) => (
	<hr className={ `au-card__line${ fullwidth ? ' au-card__fullwidth' : '' }` } />
);

AUcardLine.propTypes = {};

AUcardLine.defaultProps = {};


/**
 * [description]
 * @param  {[type]} options.text      [description]
 * @param  {[type]} options.link      [description]
 * @param  {[type]} options.fullwidth [description]
 * @return {[type]}                   [description]
 */
export const AUcardCTA = ({ text, link, fullwidth }) => {
	let CTAContainer = 'div';
	let CTAProps = {};

	if( link !== undefined ) {
		CTAContainer = 'a';
		CTAProps = { href: link };
	}

	return(
		<CTAContainer { ...CTAProps } className={ `au-card__cta${ fullwidth ? ' au-card__fullwidth' : '' }` }>
			{ text }
		</CTAContainer>
	);
};

AUcardCTA.propTypes = {};

AUcardCTA.defaultProps = {};


/**
 * [description]
 * @param  {[type]}    options.rows              [description]
 * @param  {[type]}    options.link              [description]
 * @param  {[type]}    options.appearance        [description]
 * @param  {[type]}    options.centered          [description]
 * @param  {[type]}    options.href              [description]
 * @param  {...[type]} options.attributesOptions [description]
 * @return {[type]}                              [description]
 */
export const AUcard = ({ rows, link, appearance, centered, href, ...attributesOptions = {} }) => {

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
	rows.map( cardRow => {

		// If the parent is a link remove link
		if( CardContainer === 'a' ){
			delete cardRow.link;
		}

		// Create an object to make the component
		items.push({
			component: CardComponents[ cardRow.type ],
			props: cardRow,
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
 * [description]
 * @param  {[type]} { cards,        columnSize, matchHeight, centered, appearance }) [description]
 * @return {[type]}    [description]
 */
export const AUcardList = ({ cards, columnSize, matchHeight, centered, appearance }) => (
	<ul className={ `au-card-list${ matchHeight ? ' au-card-list--matchheight' : '' }` }>
		{
			cards.map( ( item, i ) =>
				<li key={ i } className={ columnSize } >
					<AUcard
						card={ item.card }
						link={ item.link }
						appearance={ item.appearance || appearance }
						centered={ item.centered || centered }
					/>
				</li>
			)
		}
	</ul>
);

AUcardList.propTypes = {};

AUcardList.defaultProps = {};
