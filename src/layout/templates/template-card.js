import AUbutton  from '../../_uikit/layout/buttons';
import GetModule from '../../helper/getModule';
import AUcardList          from '../card-list';

import PropTypes from 'prop-types';
import React     from 'react';


/**
 * The Discussion Intro component
 */
const TemplateCard = ({ templates, cardList, _body, _parents, _pages, _ID }) => {

	const module = GetModule( _parents, _pages, _ID );
	
	const cards = templates.map( ( template ) => ({
		rows: [{
			type: 'html',
			html: 
				<section className="row au-card--shadow">
				<div className="col-md-7 ">
					<img src={ template.imgurl } alt="" className="au-responsive-media"/>
				</div>
				<div className="col-md-4 au-card__content">
					<h2 className="au-card__title">{ template.heading }</h2>
					{ template.body } <br/><br />
					<div>
					{ template.btns.map(( btn, i ) => {
						return ( 
							<AUbutton
							key={ i }
							link={btn.btnurl} 
							as={btn.btntype} 
							>
							{ btn.btntext } 
							</AUbutton> 
						)
					})}
					</div>
				</div>
			</section>
			
		}]
	})
	);

	return (
		<AUcardList
			cards={ cards }
			appearance={ cardList.appearance }
			columnSize={ cardList.columnSize }
			matchHeight={ cardList.matchHeight }
			alignment={ cardList.alignment }
			backgroundAlt= {true }
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
