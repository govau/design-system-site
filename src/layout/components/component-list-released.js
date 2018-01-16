import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Component Status
 */
const componentListReleased = ({ components, _body }) => (
	<div className="componentListReleased">
		{ _body }

		<ul className="row au-card__list">
			{
				components.map( ( components, i ) => (
					<li key={ i } className="col-xs-6 col-sm-3 au-card__container">
							<a href="{ components.url }" className="au-card">
								<img src={ components.img } alt="" className="au-responsive-media-img"/>
								<div className="au-card__spacer">
									<h3 className="au-card__psudo-link">{ components.module }</h3>
									<div className="ver">{ components.ver }</div>
								</div>
							</a>
					</li>
				))
			}
		</ul>

	</div>
);

componentListReleased.propTypes = {
	/**
	 * module: buttons
	 */
	module: PropTypes.string.isRequired,
};

export default componentListReleased;
