import AUcardList          from '../card-list';

import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Card-Row component
 */
const CardRow = ({ cardItems, cardListVisual, _relativeURL, _ID, _parseMD }) => {
	const cards = cardItems.map( cardItem => ({
			link: _relativeURL( cardItem.url, _ID ),
			rows: [{
				type: 'image',
				image: cardItem.imgurl.startsWith('http')
					? cardItem.imgurl
					: _relativeURL( cardItem.imgurl, _ID ),
				description: cardItem.imgalt,
			},
			{
				type: 'heading',
				headingSize: '2',
				text: cardItem.title,
			},
			{
				type: 'content',
				text: cardItem.text,
			}]
	}) );

	return (
		<div className="card-row row">
			<AUcardList
				cards={ cards }
				appearance={ cardListVisual.appearance }
				columnSize={ cardListVisual.columnSize }
				matchHeight={ cardListVisual.matchHeight }
				alignment={ cardListVisual.alignment }
			/>
		</div>
	);
};

CardRow.propTypes = {
	/**
	 * promos:
	 *   - title: Community
	 *     imgurl: http://placehold.it/320x320
	 *     imgalt: Community Alt tag
	 *     url: /community
	 *     text: The community has been created for designers and developers to help them transform their agency’s products and services.
	 *   - title: Components
	 *     imgurl: http://placehold.it/320x320
	 *     imgalt: Components Alt tag
	 *     url: /components
	 *     text: Components are a collection of interface elements that can be used by teams of designers and developers across government to build products.
	 */
	cardItems: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			imgurl: PropTypes.string,
			imgalt: PropTypes.string,
			url: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
};

CardRow.defaultProps = {};

export default CardRow;
