import ComponentStatus from './status';
import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The Promo component
 */
const ComponentHeader = ({ _relativeURL, _parseYaml, _body, _self, _pages, _ID }) => {
	const MODULE = _parseYaml(
		Fs.readFileSync( Path.normalize(`${ __dirname }/../../../content/${ Path.dirname( _self ) }/_module.yml`), { encoding: 'utf8' } )
	);

	const UIKIT = JSON.parse(
		Fs.readFileSync( Path.normalize(`${ __dirname }/../../_uikit/uikit.json`), { encoding: 'utf8' } )
	);

	const moduleID = _pages[ _ID ].module;
	const version = UIKIT[`@gov.au/${ moduleID }`].version;

	return (
		<div className="row componentheader">
			<div className="col-sm-12 col-md-7">
				<h1 className="componentheader__headling au-display-lg">
					{ MODULE.name }
					<span className="componentheader__headling__version au-display-xs">v{ version }</span>
				</h1>

				<div className="componentheader__body">{ _body }</div>
			</div>
			<div className="componentheader__statusbox col-sm-6 col-md-4 col-md-offset-1">
				<ComponentStatus module={ moduleID } _ID={ _ID } _relativeURL={ _relativeURL } version={ version } />
			</div>
		</div>
	);
};

ComponentHeader.propTypes = {
//
};

ComponentHeader.defaultProps = {};

export default ComponentHeader;
