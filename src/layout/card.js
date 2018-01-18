import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


const AUcardHeading = ({ text, size, fullwidth }) => {

	const HeadingContainer = `h${ size }`;

	return(
		<HeadingContainer className={ `au-display-${size}${ fullwidth ? ' au-card__fullwidth' : '' }` }>
			{ text }
		</HeadingContainer>
	);
};


const AUcardImage = ({ image, description, link, fullwidth }) => {
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


const AUcardContent = ({ text, fullwidth }) => (
	<p className={ `au-card__content${ fullwidth ? ' au-card__fullwidth' : '' }` }>{ text }</p>
);


const AUcardRaw = ({ html, fullwidth }) => (
	<div className={ `au-card__raw${ fullwidth ? ' au-card__fullwidth' : '' }` }>
		{ html }
	</div>
);


const AUcardLine = ({ fullwidth }) => (
	<hr className={ `au-card__line${ fullwidth ? ' au-card__fullwidth' : '' }` } />
);


const AUcardCTA = ({ text, link, fullwidth }) => {
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


/**
 * The card component
 */
const AUcard = ({ items, link, shadow, centered }) => {

	let CardContainer = 'div';
	let cardProps = {};

	if( link !== undefined ) {
		CardContainer = 'a';
		cardProps = { href: link };
	}

	const cardData = [];
	items.map( ( item, i ) => {
		if( item.type === 'image' ) {
			cardData.push( <AUcardImage description={ item.description } image={ item.image } link={ item.link } fullwidth={ item.fullwidth } /> );
		}
		else if( item.type === 'heading' ) {
			cardData.push( <AUcardHeading size={ item.size } text={ item.text } fullwidth={ item.fullwidth } /> );
		}
		else if( item.type === 'content' ) {
			cardData.push( <AUcardContent text={ item.text } fullwidth={ item.fullwidth } /> );
		}
		else if( item.type === 'raw' ) {
			cardData.push( <AUcardRaw html={ item.html } fullwidth={ item.fullwidth } /> );
		}
		else if( item.type === 'line' ) {
			cardData.push( <AUcardLine fullwidth={ item.fullwidth } /> );
		}
		else if( item.type === 'cta' ) {
			cardData.push( <AUcardCTA text={ item.text } link={ item.link } fullwidth={ item.fullwidth } /> );
		}
	});

	return (
		<CardContainer { ...cardProps } className={ `au-card ${ shadow ? ' au-card--shadow' : '' } ${ centered ? ' au-card--centered': '' }` } >
			{ cardData.map( ( card, i ) => <Fragment key={ i }>{ card }</Fragment> ) }
		</CardContainer>
	);
}

		// card.link === undefined
		// 	?
		// 		<a href={ card.link } { ...attributeOptions } className={
		// 			`au-card` +
		// 			card.shadow ? ' au-card--shadow' : '' +
		// 			card.centered ? ' au-card--centered': ''
		// 		}>
		// 			{ card.data.map( ) }
		// 		</a>
		// 	:
		// 		<div { ...attributeOptions } className={
		// 			`au-card` +
		// 			card.shadow ? ' au-card--shadow' : '' +
		// 			card.centered ? ' au-card--centered': ''
		// 		}>
		// 			{ card.body }
		// 		</div>
// <a href={ component.url } className="au-card">
// <div className="au-card__fullwidth">
// 	<img src={ component.img } alt="" className="au-responsive-media-img"/>
// </div>
// <h3 className="au-card__link">{ component.module }</h3>
// <div className="card__version">{ component.version }</div>
// </a>

AUcard.propTypes = {

};


// /**
//  * The CardList component
//  *
//  * @disable-docs
//  */
// const AUcardList = ({ cards, columnSize, matchheight, li = {}, card = {} }) => {

// 	li.className = li.className + " " + columnSize;

// 	return(
// 		<ul className={
// 			`au-card-list` +
// 			`${ matchheight ? ' au-card-list--matchheight' : '' }` +
// 			`${ matchheight ? ' au-card-list--matchheight' : '' }` }>
// 			{
// 				cards.map( ( card, i ) => (
// 					<li key={ i } { ...li }>
// 						<AUcard { ...card } />
// 					</li>
// 				))
// 			}
// 		</ul>
// 	)
// };


// // <ul className="au-card-list au-card-list--matchheight au-card-list--components">
// // 	{
// // 		components.map( ( component, i ) => (
// // 			<li key={ i } className="col-xs-6 col-sm-3">


// AUcardList.propTypes = {

// };


export default AUcard;
