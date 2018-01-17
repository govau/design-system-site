import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The Component Status
 */
const ComponentReleased = ({ components, _body }) => (
	<Fragment>
		{ _body }
		<div className="row">
			<ul className="au-card-list au-card-list--matchheight au-card-list--components">
				{
					components.map( ( component, i ) => (
						<li key={ i } className="col-xs-6 col-sm-3">
							<a href={ component.link } className="au-card au-card--shadow">
								<div className="au-card__fullwidth">
									<img src={ component.image } alt="" className="au-responsive-media-img"/>
								</div>
								<h3 className="au-card__link">{ component.module }</h3>
								<div className="card__version">{ component.version }</div>
							</a>
						</li>
					))
				}
			</ul>
		</div>
	</Fragment>
);

ComponentReleased.propTypes = {
	components: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.string,
			link: PropTypes.string.isRequired,
			module: PropTypes.string.isRequired,
			version: PropTypes.string.isRequired,
		})
	).isRequired
};

export default ComponentReleased;
