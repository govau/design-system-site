/***************************************************************************************************************************************************************
 *
 * Card and CardRows components
 *
 * TODO: Remove disable docs on auds
 * @disable-docs
 *
 * Cards serve as an entry point to more detailed information
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * AUcardHeading - A heading row inside a card
 *
 * @param  {string}  text             - The text inside the heading
 * @param  {string}  headingSize      - The tag level (<h1/> <h2/> etc)
 * @param  {boolean} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string}  link             - The link that the element goes to
 * @param  {string}  href             - We add the href so it isn't added to the attributeOptions
 * @param  {object}  attributeOptions - All of the other properties that can be added
 */
const AUcardHeading = ({ text, headingSize, fullwidth, link, href, className = '', ...attributesOptions }) => {
	const HeadingContainer = `h${ headingSize }`;

	if( link ) {
		return (
			<HeadingContainer className={
				`au-card__title${ fullwidth ? ' au-card__fullwidth' : '' } ${ className }`
			} { ...attributesOptions }>
				<a href={ link } >{ text }</a>
			</HeadingContainer>
		)
	}

	return(
		<HeadingContainer className={ `au-card__title${ fullwidth ? ' au-card__fullwidth' : '' } ${ className }` } { ...attributesOptions }>
			{ text }
		</HeadingContainer>
	);
};

AUcardHeading.propTypes = {
	text: PropTypes.string.isRequired,
	headingSize: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	fullwidth: PropTypes.bool,
	link: PropTypes.string,
	className: PropTypes.string,
};

AUcardHeading.defaultProps = {
	headingSize: '3',
};


/**
 * AUcardImage - An image row inside a card
 *
 * @param  {string}  image            - The image inside the row
 * @param  {string}  description      - The text only description for the image
 * @param  {boolean} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string}  link             - The link that the element goes to
 * @param  {string}  href             - We add the href so it isn't added to the attributeOptions
 * @param  {object}  attributeOptions - All of the other properties that can be added
 */
const AUcardImage = ({ image, description, fullwidth, link, href, ...attributesOptions }) => {
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
 * AUcardSVG - An SVG row inside a card
 *
 * @param  {string}  svg              - The image inside the row
 * @param  {string}  title            - The text only description for the image
 * @param  {boolean} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string}  link             - The link that the element goes to
 * @param  {string}  href             - We add the href so it isn't added to the attributeOptions
 * @param  {object}  attributeOptions - All of the other properties that can be added
 */
const AUcardSVG = ({ svg, title, fullwidth, link, href, ...attributesOptions }) => {
	let ImageContainer = 'div';

	if( link !== undefined ) {
		ImageContainer = 'a';
		attributesOptions.href = link;
	}

	return(
		<ImageContainer { ...attributesOptions } className={ `au-card__image${ fullwidth ? ' au-card__fullwidth' : '' }` }>
			<svg role="img" title={ title }>
				<title>{ title }</title>
				<use xlinkHref={ svg }/>
			</svg>
		</ImageContainer>
	);
};

AUcardSVG.propTypes = {
	svg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	fullwidth: PropTypes.bool,
	link: PropTypes.string,
};


/**
 * AUcardContent - A content row inside a card
 *
 * @param  {string}  text             - The text inside the content area
 * @param  {boolean} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string}  link             - The link that the element goes to
 * @param  {string}  href             - We add the href so it isn't added to the attributeOptions
 * @param  {object}  attributeOptions - All of the other properties that can be added
 */
const AUcardContent = ({ text, fullwidth, link, href, ...attributesOptions }) => {

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
 * @param  {string}  text             - The text inside the call to action
 * @param  {boolean} fullwidth        - If the element stretches to the fullwidth of the container
 * @param  {string}  link             - The link that the element goes to
 * @param  {string}  href             - We add the href so it isn't added to the attributeOptions
 * @param  {object}  attributeOptions - All of the other properties that can be added
 */
const AUcardCTA = ({ text, fullwidth, link, href, ...attributesOptions }) => {

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
 * @param  {object} html      - The HTML inside the row
 * @param  {string} fullwidth - If the element stretches to the fullwidth of the container
 */
const AUcardHTML = ({ html, fullwidth }) => (
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
const AUcardLine = ({ fullwidth }) => (
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
 * @param  {boolean} alignment        - If the card has alignment text
 * @param  {string}  link             - The link that the element goes to
 * @param  {string}  href             - We add the href so it isn't added to the attributeOptions
 * @param  {object}  attributeOptions - All of the other properties that can be added
 */
const AUcard = ({ rows, appearance, alignment, link, href, ...attributesOptions }) => {

	let CardContainer = 'div';

	if( link !== undefined ) {
		CardContainer = 'a';
		attributesOptions.href = link;
	}

	const CardComponents = {
		line: AUcardLine,
		cta: AUcardCTA,
		image: AUcardImage,
		svg: AUcardSVG,
		heading: AUcardHeading,
		content: AUcardContent,
		html: AUcardHTML,
	}

	const items = [];
	rows.map( row => {

		// If the parent is a link remove link
		if( link !== undefined ){
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
			`${ alignment === 'center' ? ' au-card--centred': '' }`
		}>
			<div className='au-card__inner'>
				{
					items.map( ( item, i ) => (
						<item.component { ...item.props } key={ i } />
					))
				}
			</div>
		</CardContainer>
	);
};

AUcard.propTypes = {
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
	).isRequired,
};


AUcard.defaultProps = {
	alignment: 'left',
	appearance: 'flat',
};


export default AUcard;
