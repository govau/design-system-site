import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Promo = ({ tiles, _body, _relativeURL, _ID, _parseMD }) => (

	<div className="au-grid">
		<div className="promo-wrapper row">
			{
				tiles.map( ( tile, i ) => (
					<div className="promo col-sm-12 col-md-4" key={ i }>

						<a href={ tile.url }>
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

					</div>//promo
				))
			}
		</div>
	</div>

);


Promo.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};


Promo.defaultProps = {};


export default Promo;
