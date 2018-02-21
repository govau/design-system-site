import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';


/**
 * The screen reader component
 */
const Screenreader = ({ headline, speak, _body, _ID, _parseMD, _relativeURL }) => (
	<div className="code-demo">
		<div className="row">
			<a className="code-demo__anchor" href={`#${ Slugify( headline ).toLowerCase() }`}>#</a>

			<h2 className="col-sm-6 code-demo__headline">
				{ headline }
			</h2>

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
	 * headline: Primary Buttons
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * speak: primary
	 */
	speak: PropTypes.string.isRequired,
};

Screenreader.defaultProps = {};

export default Screenreader;
