import AUcardList          from '../card-list';

import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
const Promo = ({ promos, cardList, _relativeURL, _ID, _parseMD }) => {
	const cards = promos.map( promo => ({
			link: _relativeURL( promo.url, _ID ),
			rows: [{
				type: 'image',
				image: promo.imgurl.startsWith('http')
					? promo.imgurl
					: _relativeURL( promo.imgurl, _ID ),
				description: promo.imgalt,
			},
			{
				type: 'heading',
				headingSize: '2',
				text: promo.title,
			},
			{
				type: 'content',
				text: promo.text,
			}]
	}) );

	return (
		<div className="promo row">
			<AUcardList
				cards={ cards }
				appearance={ cardList.appearance }
				columnSize={ cardList.columnSize }
				matchHeight={ cardList.matchHeight }
				alignment={ cardList.alignment }
			/>
		</div>
	);
};

Promo.propTypes = {
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
	promos: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			imgurl: PropTypes.string,
			imgalt: PropTypes.string,
			url: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
};

Promo.defaultProps = {};

export default Promo;
