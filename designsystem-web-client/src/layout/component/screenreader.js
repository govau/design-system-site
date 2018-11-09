import React from 'react';
import PropTypes from 'prop-types';

import AnchorTitle from '../anchor-title';

/**
 * The screen reader component
 */
const Screenreader = ({ heading, speak, _body, _parseMD }) => (
	<div className="code-demo">
		<div className="row">
			<div className="col-sm-6">
				<AnchorTitle heading={ heading } headingSize={ 2 } />
			</div>

			<div className="col-sm-6 code-demo__example-wrapper">
				<div className="code-demo__example code-demo__example--screenreader">
					{ _parseMD( speak ) }
				</div>
			</div>
			<div className="col-sm-6 code-demo__text">
				{ _body }
			</div>
		</div>
	</div>
);

Screenreader.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,

	/**
	 * heading: Primary Buttons
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * speak: primary
	 */
	speak: PropTypes.string.isRequired,
};

Screenreader.defaultProps = {};

export default Screenreader;
