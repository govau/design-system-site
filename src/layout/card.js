import PropTypes from 'prop-types';
import React from 'react';


const AUcardHeading = ({ text, size, fullwidth }) => {

	const HeadingContainer = `h${ size }`;

	<HeadingContainer className={ `au-display-${size}${ fullwidth ? ' au-card__fullwidth' : '' }` }>{ text }</HeadingContainer>
};


const AUcardImage = ({ image, link, fullwidth }) => {
	let ImageContainer = 'div';
	let imageProps = {};

	if( link !== undefined ) {
		ImageContainer = 'a';
		imageProps = { href: link };
	}

	<ImageContainer className={ fullwidth ? 'au-card__fullwidth' : '' }>
		<img src={ image } />
	</ImageContainer>
};


const AUcardContent = ({ text, fullwidth }) => (
	<p className={ fullwidth ? 'au-card__fullwidth' : '' }>{ text }</p>
);


const AUcardRaw = ({ html, fullwidth }) => (
	{ html }
);


const AUcardLine = ({ fullwidth }) => (
	<hr />
);

/**
 * The card component
 */
const AUcard = ({ cardData, link, shadow, centered }) => {

	let CardContainer = 'div';
	let cardProps = {};

	if( link !== undefined ) {
		CardContainer = 'a';
		cardProps = { href: link };
	}

	return (
		<CardContainer
			{ ...cardProps }
			className={ `au-card ${ shadow ? ' au-card--shadow' : '' } ${ centered ? ' au-card--centered': '' }` }
		>
			{
				cardData.map( ( data, i ) => {

				})
			}
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
