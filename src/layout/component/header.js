import ComponentStatus from './status';
import PropTypes from 'prop-types';
import GetData from './../getData';
import React from 'react';


/**
 * The component header component
 */
const ComponentHeader = ({ _relativeURL, _parseYaml, _body, _self, _pages, _ID, _isDocs }) => {

	const MODULE = GetData( _pages[ _ID ].module, _parseYaml );

	return (
		<div className="row componentheader">
			<div className="col-sm-12 col-md-7">
				<h1 className="componentheader__headling au-display-lg">
					{ MODULE.name }
					<span className="componentheader__headling__version au-display-xs">v{ MODULE.version }</span>
				</h1>

				<div className="componentheader__body">{ _body }</div>
			</div>
			<div className="componentheader__statusbox col-sm-6 col-md-4 col-md-offset-1">
				<ComponentStatus module={ MODULE.ID } _ID={ _ID } _relativeURL={ _relativeURL } version={ MODULE.version } />
			</div>
		</div>
	);
};

ComponentHeader.propTypes = {};

ComponentHeader.defaultProps = {};

export default ComponentHeader;
