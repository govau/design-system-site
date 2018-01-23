import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 */
const DownloadIntro = ({ _body, borderTop, sidebar }) => (
	<div className={`row download-intro${ borderTop ? ' download-intro--border' : '' }` }>
		<div className="col-xs-12 col-sm-8">
			{ _body }
		</div>

		{ sidebar }
	</div>
);

DownloadIntro.propTypes = {

  /**
   * _body: (text)(4)
   */
	_body: PropTypes.node.isRequired,

	/**
	 * sidebar: (partials)(1)
	 */
	sidebar: PropTypes.node,

	/**
	 * borderTop: false
	 */
	borderTop: PropTypes.bool,
};

DownloadIntro.defaultProps = {
	borderTop: false,
};

export default DownloadIntro;
