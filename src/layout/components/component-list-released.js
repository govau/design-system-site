import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Component Status
 */
const componentListReleased = ({ components, _body }) => (
	<div className="componentListReleased">
		{ _body }

		<ul className="row">
			{
				components.map( ( components, i ) => (
					<li key={ i } className="col-xs-6 col-sm-3">
							<a href="{ components.url }" className="au-card">
								<img src={ components.img } alt="" className="au-responsive-media-img"/>
								<div className="">
									<h3>{ components.module }</h3>
									{ components.ver }
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
