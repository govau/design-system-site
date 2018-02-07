import ComponentStatus from './status';
import GetModule from './../getModule';
import PropTypes from 'prop-types';
import GetData from './../getData';
import React from 'react';


/**
 * The component header component
 *
 * @disable-docs
 */
const ComponentHeader = ({ _relativeURL, _parseYaml, _parseMD, _pages, _parents, _ID, _isDocs }) => {
	const module = GetModule( _parents, _pages, _ID );

	const MODULE = GetData({
		filter: ( key, COMPONENTS ) => key === module,
		yaml: _parseYaml
	})[ 0 ];

	return (
		<div className="row componentheader">
			<div className="col-sm-6">

				<h1 className="componentheader__headling">
					{ MODULE.name }
				</h1>

				<div className="componentheader__body abstract">{ _parseMD( MODULE.description ) }</div>
			</div>
			<div className="componentheader__statusbox col-sm-offset-1 col-sm-5">
				<ComponentStatus
					module={ MODULE.ID }
					_ID={ _ID }
					_relativeURL={ _relativeURL }
					_parseYaml={ _parseYaml }
				/>
			</div>
		</div>
	);
};

ComponentHeader.propTypes = {};

ComponentHeader.defaultProps = {};

export default ComponentHeader;
