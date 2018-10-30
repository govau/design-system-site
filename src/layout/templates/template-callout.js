import AUbutton  from '../../_uikit/layout/buttons';
import GetModule from '../../helper/getModule';

import PropTypes from 'prop-types';
import React     from 'react';


/**
 * The Discussion Intro component
 */
const TemplateCallout = ({ buttons, image, description, _body, _parents, _pages, _ID }) => {

	const module = GetModule( _parents, _pages, _ID );
	return (
		<div className="calloutWithButton">
			<div className="row">
				<div className="col-md-12">
					{/* <img src={image} alt={description} className="au-responsive-media-img calloutWithButton__image"/> */}
					row 1
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="">
						hello
					</div>
				</div>
			</div>
		</div>
	);
}


TemplateCallout.propTypes = {
	/**
	 * btntext: Read more
	 */
	btntext: PropTypes.string,

	/**
	 * btnurl: http://google.com
	 */
	btnurl: PropTypes.string.isRequired,

	/**
	 * btntype: secondary
	 */
	btntype: PropTypes.string,
};

TemplateCallout.defaultProps = {
	btntype: "secondary",
	btntext: "Read more",
};

export default TemplateCallout;
