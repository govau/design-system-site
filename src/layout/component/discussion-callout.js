import AUbutton  from '../../_uikit/layout/buttons';
import GetModule from '../helper/getModule';

import PropTypes from 'prop-types';
import React     from 'react';


/**
 * The Discussion Intro component
 */
const CalloutWithButton = ({ btntext, btnurl, btntype, _body, _parents, _pages, _ID }) => {

	const module = GetModule( _parents, _pages, _ID );

	return (
		<div className="calloutWithButton calloutWithButton__text">
			<div className="col-sm-6 col-md-7">
				{ _body }
			</div>
			<div className="col-sm-6 col-md-offset-1 col-md-4 calloutWithButton__buttons">
				<AUbutton link={ `${ btnurl }${ module ? module : '' }` } as={ btntype } block>{ btntext }</AUbutton>
			</div>
		</div>
	);
}


CalloutWithButton.propTypes = {
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

CalloutWithButton.defaultProps = {
	btntype: "secondary",
	btntext: "Read more",
};

export default CalloutWithButton;
