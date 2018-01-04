import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
const Promo = ({ tiles, _relativeURL, _ID, _parseMD }) => (
	<div className="au-grid">
		<div className="promo-wrapper row">
			{
				tiles.map( ( tile, i ) => (
					<div className="promo col-sm-12 col-md-4" key={ i }>

						<a href={ _relativeURL( tile.url, _ID ) }>
							<img className="promo__thumbnail au-responsive-media-img"
								src={
									tile.imgurl.startsWith('http')
										? tile.imgurl
										: _relativeURL( tile.imgurl, _ID )
								}
								alt={ tile.imgalt } />
							<h2 className="promo__title">{ tile.title }</h2>
						</a>

						<div className="content">
							{ _parseMD( tile.text ) }
						</div>

					</div>
				))
			}
		</div>
	</div>
);

Promo.propTypes = {
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

Promo.defaultProps = {};

export default Promo;
