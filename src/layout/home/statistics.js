import AUheading from '../../_uikit/layout/headings';
import AUbutton from '../../_uikit/layout/buttons';
import PropTypes from 'prop-types';
import Numeral from 'numeral';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The Statistics component
 */
const Statistics = ({ title, btnURL, btntext, tiles, _parseYaml }) => {

	const DATA = _parseYaml(
		Fs.readFileSync(
			Path.normalize(`${ __dirname }/../../../content/_data.yml`),
			{ encoding: 'utf8' }
		)
	);

	const OPTIONS = {
		stars: DATA.uikit.stars + DATA.pancake.stars,
		downloads: DATA.uikit.download + DATA.pancake.download,
	};

	return (
		<div className="features statistics au-grid">
			<div className="row">
				<div className="features__intro col-md-6 col-md-offset-3">
					<h2 className="features__intro__headline">{ title }</h2>
				</div>
			</div>

			<ul className="features__list row">
				{
					tiles.map( ( tile, i ) => (
						<li className="col-sm-4" key={ i }>
							<div className="feature__wrapper">
								<span className="feature__wrapper__headline au-display-xxxl">
									{
										typeof tile.number === 'number'
											? tile.number
											: Numeral( OPTIONS[ tile.number ] ).format('0,0')
									}
								</span>
								<span>{ tile.description }</span>
							</div>
						</li>
					))
				}
			</ul>
			{
			// <div className="features__cta">
			// 	<a href={ btnURL }>{ btntext }</a>
			// </div>
			}
		</div>
	);
};


Statistics.propTypes = {
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
	*   - description: Live projects
	*     number: 5
	*   - description: Github stars
	*     number: stars
	*   - description: Downloads
	*     number: downloads
	 */
	tiles: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.string.isRequired,
			number: PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.oneOf([ 'stars', 'downloads' ]),
			]).isRequired,
		})
	).isRequired,
};

Statistics.defaultProps = {};

export default Statistics;
