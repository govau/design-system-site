import AUbutton   from '../../_uikit/layout/buttons';
import AUcardList from '../card-list';

import { AUcardHeading } from '../card';

import PropTypes from 'prop-types';
import React     from 'react';


/**
 * The Discussion Intro component
 */
const TemplateCard = ({ templates, cardList, _relativeURL }) => {
	const cards = templates.map( ( template ) => ({
		rows: [{
			type: 'image',
			image: _relativeURL( `/assets/img/templates/${ template.name }.png` ),
			description: template.heading,
		},
		{
			type: 'heading',
			text: template.heading,
		},
		{
			type: 'content',
			text: template.body,
		}]
	}) );

	return (
		<AUcardList
			cards={ cards }
			appearance={ cardList.appearance }
			columnSize={ cardList.columnSize }
			matchHeight={ cardList.matchHeight }
			alignment={ cardList.alignment }
		/>
	)
}


TemplateCard.propTypes = {
	/**
	 * btntext: Read more
	 */
	btntext: PropTypes.string,

	/**
	 * btnurl: http://google.com
	 */
	btnurl: PropTypes.string,

	/**
	 * btntype: secondary
	 */
	btntype: PropTypes.string,
};

TemplateCard.defaultProps = {
	btntype: "secondary",
	btntext: "Read more",
};

export default TemplateCard;
