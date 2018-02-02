import ComponentStatus from './component-status';
import PropTypes from 'prop-types';
import GetData from './../getData';
import React from 'react';


/**
 * The component header component
 */
const ComponentHeader = ({ _relativeURL, _parseYaml, _pages, _ID, _isDocs }) => {

	const MODULE = GetData({
		filter: ( key, COMPONENTS ) => key === _pages[ _ID ].module,
		yaml: _parseYaml
	})[ 0 ];

	return (
		<div className="row componentheader">
			<div className="col-sm-6 col-lg-7">

				<h1 className="componentheader__headling">
					{ MODULE.name }
				</h1>

				<div className="componentheader__body abstract">{ MODULE.description }</div>
			</div>
			<div className="componentheader__statusbox col-sm-5">
				<ComponentStatus
					module={ MODULE.ID }
					_ID={ _ID }
					_relativeURL={ _relativeURL }
					_parseYaml={ _parseYaml }
					version={ MODULE.version }
				/>
			</div>
		</div>
	);
};

ComponentHeader.propTypes = {};

ComponentHeader.defaultProps = {};

export default ComponentHeader;
