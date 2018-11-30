import AUbutton  from '../../_uikit/layout/buttons';
import GetModule from '../../helper/getModule';

import PropTypes from 'prop-types';
import React     from 'react';


/**
 * The Discussion Intro component
 */
const TemplateCard = ({ btns, _body, _parents, _pages, _ID }) => {

    const module = GetModule( _parents, _pages, _ID );

	return (
		<section className="row section section--shadow section--padding au-body au-body--alt">
			<div className="col-md-6 ">
				<img src="https://dummyimage.com/600x400/000/fff" alt="" className="au-responsive-media"/>
			</div>
			<div className="col-md-6">
				{ _body } <br/>
				{ btns.map(( btn, i ) => {
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
		</section>
	);
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
