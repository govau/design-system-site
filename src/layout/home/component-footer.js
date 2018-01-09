import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
 const ComponentFooter = ({ title, feedback, _body }) => (
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
	 * tiles:
	 *   - title: Community
	 *     imgurl: http://placehold.it/320x320
	 *     imgalt: Community Alt tag
	 *     url: /community
	 *     text: The Design System community has been created for designers and developers to help them transform their agency’s products and services.
	 *   - title: Components
	 *     imgurl: http://placehold.it/320x320
	 *     imgalt: Components Alt tag
	 *     url: /components
	 *     text: Components are a collection of interface elements that can be used by teams of designers and developers across government to build products.
	 */
	tiles: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			imgurl: PropTypes.string,
			imgalt: PropTypes.string,
			url: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
};

ComponentFooter.defaultProps = {};

export default ComponentFooter;
