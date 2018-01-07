import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
const Features = ({ title, btnURL, btntext, tiles, _relativeURL, _ID, _parseMD, _body }) => (
	<div className="features au-grid">
		<div className="row">
			<div className="features-intro col-md-6 col-md-offset-3">
				<h2>{ title }</h2>
				<div className="content">{ _body }</div>
			</div>
		</div>

		<ul className="features-list row">
			{
				tiles.map( ( tile, i ) => (
					<li className="feature col-xs-6 col-sm-3 col-lg-2" key={ i }>
						<div className="feature-padding">
							<h3 ClassName="au-display-sm">{ tile.smltitle }</h3>
							<p>{ tile.text }</p>
						</div>
					</li>
				))
			}
		</ul>
		<div className="features-cta">
			<a href={ btnURL } className="au-btn au-btn--secondary">{ btntext }</a>
		</div>
	</div>
);


Features.propTypes = {
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

 Features.defaultProps = {};

 export default Features;
