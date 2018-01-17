import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Component Status
 */
const componentListReleased = ({ components, _body }) => (
	<div className="componentListReleased">
		{ _body }

		<ul className="row au-card-list au-card-list--matchheight au-card-list--components">
			{
				components.map( ( component, i ) => (
					<li key={ i } className="col-xs-6 col-sm-3">
						<a href={ component.url } className="au-card au-card--shadow">
							<div className="au-card__fullwidth">
								<img src={ component.img } alt="" className="au-responsive-media-img"/>
							</div>
							<h3 className="au-card__link">{ component.module }</h3>
							<div className="card__version">{ component.version }</div>
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
