import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 */
const IntroSidebar = ({ _body }) => (
		<div className="col-xs-12  col-sm-4  col-md-offset-1 col-md-3">
			{ _body }
		</div>
);

IntroSidebar.propTypes = {

};

IntroSidebar.defaultProps = {};

export default IntroSidebar;
