import AUbutton from '../_uikit/layout/buttons';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Error component
 */
const ResponseError = ({ btnURL, imgalt, imgurl, btntext, _relativeURL, _ID, _body }) => (
	<div className="error row">

		<div className="error__intro col-xs-12 col-md-4">
			{ _body }
			<p><AUbutton link={ _relativeURL( btnURL, _ID ) } as='secondary'>{ btntext }</AUbutton></p>
		</div>

		<div className="error__extra col-xs-12 col-md-7 col-md-offset-1">
			<img className="au-responsive-media-img" src={ _relativeURL( imgurl, _ID ) }
				alt={ imgalt }
			/>
		</div>

	</div>
);


ResponseError.propTypes = {
	/**
	 * btnURL: buttons
	 */
	btnURL: PropTypes.string.isRequired,

	/**
	 * imgalt: buttons
	 */
	imgalt: PropTypes.string.isRequired,

	/**
	 * imgurl: buttons
	 */
	imgurl: PropTypes.string.isRequired,

	/**
	 * btntext: buttons
	 */
	btntext: PropTypes.string.isRequired,
};

ResponseError.defaultProps = {};

export default ResponseError;
