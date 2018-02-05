import AUbutton from '../../_uikit/layout/buttons';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 */
const DiscussionIntro = ({ buttons, giturl, _body }) => {

	return (
		<div className="discussionIntro discussionIntro__text">
			<div className="col-sm-6 col-md-7">
				{ _body }
			</div>
			<div className="col-sm-6 col-md-offset-1 col-md-4 discussionIntro__buttons">
				{
					buttons.map( ( button, i ) => (
						<AUbutton href={ button.btnurl } as={ button.btntype } className=" au-btn--block" key={ i }>{ button.btntext }</AUbutton>
					))
				}
			</div>
		</div>
	);

};

DiscussionIntro.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

};

DiscussionIntro.defaultProps = {};

export default DiscussionIntro;
