import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 */
const DownloadIntro = ({ borderTop, _body, sidebar }) => (
	<div className={`row download-intro ${
			borderTop
				? 'download-intro--border'
				: ''
			}`
		}>
		<div className="col-xs-12 col-sm-8">
			{ _body }
		</div>

		{ sidebar }
	</div>
);

DownloadIntro.propTypes = {

};

DownloadIntro.defaultProps = {};

export default DownloadIntro;
