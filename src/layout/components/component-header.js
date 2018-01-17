import ComponentStatus from './component-status.js';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
 const ComponentHeader = ({ _relativeURL, pagetitle, module, status, navigation, intro, version }) => (

	<div className="componentheader au-grid">
		<div className="row">
			<div className="col-sm-12 col-md-7 au-display-lg">
				<h1>{ pagetitle } <span className="au-display--xs">{ version }</span></h1>
				{ intro }
			</div>
			<div className="componentheader__statusbox col-sm-6 col-md-4 col-md-offset-1">
				<ComponentStatus version={ version } module={ module } _relativeURL={ _relativeURL }/>
			</div>
		</div>

		{ navigation }
	</div>

 );

ComponentHeader.propTypes = {
//
};

ComponentHeader.defaultProps = {};

export default ComponentHeader;
