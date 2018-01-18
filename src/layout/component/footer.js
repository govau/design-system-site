import PropTypes from 'prop-types';
import React from 'react';


/**
 * The component footer component
 */
 const ComponentFooter = ({ feedback }) => (
	<div className="componentfooter au-grid">
		<div className="row">
			<div className="col-sm-12 col-md-6">
				<h3>Related Articles</h3>
				<ul>
					<li><a href="#">Buttons and Accessibility</a></li>
					<li><a href="#">Visual loudness</a></li>
				</ul>
			</div>
			<div className="col-sm-6 col-md-3">
				<h3>Used in</h3>
				<ul>
					<li><a href="#">Service form</a></li>
					<li><a href="#">Search Results page</a></li>
					<li><a href="#">Chapter or section page</a></li>
				</ul>
			</div>
			<div className="col-sm-6 col-md-3">
				{ feedback }
			</div>
		</div>
	</div>
 );

ComponentFooter.propTypes = {
	/**
	 * feedback: (partials)(1)
	 */
	feedback: PropTypes.node.isRequired,
};

ComponentFooter.defaultProps = {};

export default ComponentFooter;
