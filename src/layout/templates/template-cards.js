import AUcardList          from '../card-list';

import PropTypes from 'prop-types';
import React from 'react';


/**
 * The TemplateCard component
 */
const TemplateCards = ({ templates, cardList, _relativeURL, _ID, _parseMD }) => {
	const cards = templates.map( template => ({
			// link: _relativeURL( template.url, _ID ),
			rows: [{
				type: 'image',
				image: template.imgurl.startsWith('http')
					? template.imgurl
					: _relativeURL( template.imgurl, _ID ),
				description: template.imgalt,
			},
			{
				type: 'heading',
				headingSize: '2',
				text: template.title,
			},
			{
				type: 'content',
				text: template.text,
			},
			{
				type: 'button',
				buttons: template.buttons
			},
		]
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

TemplateCards.propTypes = {
	templates: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			imgurl: PropTypes.string,
			imgalt: PropTypes.string,
			url: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
};

TemplateCards.defaultProps = {};

export default TemplateCards;
