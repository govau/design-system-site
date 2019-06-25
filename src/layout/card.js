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
import AUcard,{ AUcardLink, AUcardDivider, AUcardInner } from '../_auds/layout/card';


/**
 * AUcardHeading - A heading row inside a card
 *
 * @param  {string}  text             - The text inside the heading
 * @param  {string}  headingSize      - The tag level (<h1/> <h2/> etc)
 * @param  {string}  link             - The link that the element goes to
 * @param  {object}  attributeOptions - All of the other properties that can be added
 */
const AUcardHeading = ({ text, headingSize, link, href, className = '', ...attributesOptions }) => {
	const HeadingContainer = `h${ headingSize }`;

	if( link ) {
		return (
			<HeadingContainer className={ className } { ...attributesOptions }>
				<AUcardLink link={link} text={text}/>
			</HeadingContainer>
		)
	}

	return(
		<HeadingContainer className={`au-card__title ${className}`} { ...attributesOptions }>
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
 * @param  {string}  description      - The text only description for the image
 * @param  {string}  src             - The link that the element goes to
 * @param  {object}  attributeOptions - All of the other properties that can be added
 */
const AUcardImage = ({ description, src, ...attributesOptions }) => {
	return(
			<img className="au-responsive-media-img" alt={ description } src={ src } />
	);
};

AUcardImage.propTypes = {
	description: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
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
		<ImageContainer { ...attributesOptions } className={ `au-responsive-media-img${ fullwidth ? ' au-card__fullwidth' : '' }` }>
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
 * AUcardCreator - Creates a  card
 *
 * @param  {object}   rows             - The rows inside the card
 * @param  {boolean}  clickable        - Whether or not card is clickable
 * @param  {boolean}  shadow           - Add a card shadow or not
 * @param  {boolean}  centred          - Card contents are centred or not
 * @param  {string}   link             - The link that the card goes to
 * @param  {string}   href             - We add the href so it isn't added to the attributeOptions
 * @param  {object}   attributeOptions - All of the other properties that can be added
 */
const AUcardCreator = ({ rows, centred, clickable, shadow, link, href, ...attributesOptions }) => {

	const CardComponents = {
		line: AUcardDivider,
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
		<AUcard { ...attributesOptions }
			shadow={shadow}
			link={link ? link : undefined}
			clickable={clickable}
			centred={centred}
			>
			<AUcardInner>
				{
					items.map( ( item, i ) => (
						<item.component { ...item.props } key={ i } />
					))
				}
			</AUcardInner>
		</AUcard>
	);
};

AUcardCreator.propTypes = {
	link: PropTypes.string,
	shadow: PropTypes.bool,
	clickable: PropTypes.bool,
	centred: PropTypes.bool,
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


AUcardCreator.defaultProps = {
};


export default AUcardCreator;


