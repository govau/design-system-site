import AUheading from '../../_uikit/layout/headings';
import AUbutton from '../../_uikit/layout/buttons';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
const Features = ({ title, btnURL, btntext, tiles, _relativeURL, _ID, _parseMD, _body }) => (
	<div className="features au-grid">
		<div className="row">
			<div className="features__intro col-md-6 col-md-offset-3">
				<h2 className="features__intro__headline">{ title }</h2>
				<div className="content">{ _body }</div>
			</div>
		</div>

		<ul className="features__list row">
			{
				tiles.map( ( tile, i ) => (
					<li className="feature col-xs-6 col-sm-3 col-lg-2" key={ i }>
						<div className="feature__wrapper">
							<AUheading className="feature__wrapper__headline" size="sm" level="3">
								{ tile.smltitle }
							</AUheading>
							<p>{ tile.text }</p>
						</div>
					</li>
				))
			}
		</ul>
		<div className="features__cta">
			<AUbutton href={ btnURL } as='secondary'>{ btntext }</AUbutton>
		</div>
	</div>
);


Features.propTypes = {
	/**
	 * title: What makes our components great
	 */
	title: PropTypes.string.isRequired,

	/**
	 * btnURL: /components
	 */
	btnURL: PropTypes.string.isRequired,

	/**
	 * btntext: See an examples
	 */
	btntext: PropTypes.string.isRequired,

	/**
	 * tiles:
	 *   - smltitle: Designed
	 *     text: High-quality visual design
	 *   - smltitle: Modern
	 *     text: HTML5 Semantics
	 *   - smltitle: Responsive
	 *     text: Mobile first responsive design
	 *   - smltitle: Tested
	 *     text: Usability tested by the community
	 *   - smltitle: Accessible
	 *     text: WCAG 2.1 AA standard accessibility
	 *   - smltitle: Robust
	 *     text: Browser support back to IE8 and no-js fallbacks
	 */
	tiles: PropTypes.arrayOf(
		PropTypes.shape({
			smltitle: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
};

Features.defaultProps = {};

export default Features;
