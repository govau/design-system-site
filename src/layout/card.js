import PropTypes from 'prop-types';
import React from 'react';


/**
 * The card component
 */
const AUcard = ({ card, _body, ...attributeOptions }) => {

	return (
		card.link === undefined
			?
				<a href={ card.link } { ...attributeOptions } className={
					`au-card` +
					card.shadow ? ' au-card--shadow' : '' +
					card.centered ? ' au-card--centered': ''
				}>
					{ card.body }
				</a>
			:
				<div { ...attributeOptions } className={
					`au-card` +
					card.shadow ? ' au-card--shadow' : '' +
					card.centered ? ' au-card--centered': ''
				}>
					{ card.body }
				</div>
	);
}

// <a href={ component.url } className="au-card">
// <div className="au-card__fullwidth">
// 	<img src={ component.img } alt="" className="au-responsive-media-img"/>
// </div>
// <h3 className="au-card__link">{ component.module }</h3>
// <div className="card__version">{ component.version }</div>
// </a>

AUcard.propTypes = {

};


/**
 * The CardList component
 *
 * @disable-docs
 */
const AUcardList = ({ cards, columnSize, matchheight, li = {}, card = {} }) => {

	li.className = li.className + " " + columnSize;

	return(
		<ul className={
			`au-card-list` +
			`${ matchheight ? ' au-card-list--matchheight' : '' }` +
			`${ matchheight ? ' au-card-list--matchheight' : '' }` }>
			{
				cards.map( ( card, i ) => (
					<li key={ i } { ...li }>
						<AUcard { ...card } />
					</li>
				))
			}
		</ul>
	)
};


// <ul className="au-card-list au-card-list--matchheight au-card-list--components">
// 	{
// 		components.map( ( component, i ) => (
// 			<li key={ i } className="col-xs-6 col-sm-3">


AUcardList.propTypes = {

};


export default {
	AUcard: AUcard,
	AUcardList: AUcardList
};
