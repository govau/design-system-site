import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Component Status
 */
const componentListReleased = ({ components, _body }) => (
	<div className="componentListReleased">
		{ _body }

		<ul className="row au-card-list au-card-list--matchheight au-card-list--components">
			<li className="col-xs-6 col-sm-3">
				<div className="au-card">
					<div className="au-card__fullwidth">
						<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					</div>
					<h3 className="card__title"><a href="/components/buttons">{ components[0].module }</a></h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis asperiores neque hic itaque autem, odit maiores dolores minima similique esse laborum perferendis vero harum beatae. Et natus deleniti rem sequi!</p>
					<div className="card__version">{ components[0].ver }</div>
				</div>
			</li>
			<li className="col-xs-6 col-sm-3">
				<div className="au-card">
					<div className="au-card__fullwidth">
						<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					</div>
					<h3><a href="/components/buttons">{ components[0].module }</a></h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
					<div className="ver">{ components[0].ver }</div>
				</div>
			</li>
			<li className="col-xs-6 col-sm-3">
				<a href="/components/buttons" className="au-card">
					<div className="au-card__fullwidth">
						<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					</div>
					<h3 className="au-card__link">{ components[0].module }</h3>
					<div className="ver">{ components[0].ver }</div>
				</a>
			</li>
			<li className="col-xs-6 col-sm-3">
				<div className="au-card au-card--shadow">
					<div className="au-card__fullwidth">
						<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					</div>
					<h3><a href="/components/buttons">{ components[0].module }</a></h3>
					<div className="ver">{ components[0].ver }</div>
				</div>
			</li>
			<li className="col-xs-6 col-sm-3">
				<a href="/components/buttons" className="au-card au-card--shadow">
					<div className="au-card__fullwidth">
						<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					</div>
					<h3 className="au-card__link">{ components[0].module }</h3>
					<div className="ver">{ components[0].ver }</div>
				</a>
			</li>
			<li className="col-xs-6 col-sm-3">
				<div className="au-card au-card--shadow au-card--centered">
					<div className="au-card__fullwidth">
						<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					</div>
					<h3><a href="/components/buttons">{ components[0].module }</a></h3>
					<div className="ver">{ components[0].ver }</div>
				</div>
			</li>
			<li className="col-xs-6 col-sm-3">
				<a href="/components/buttons" className="au-card au-card--shadow au-card--centered">
					<div className="au-card__fullwidth">
						<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					</div>
					<h3 className="au-card__link">{ components[0].module }</h3>
					<div className="ver">{ components[0].ver }</div>
				</a>
			</li>
			<li className="col-xs-6 col-sm-3">
				<div className="au-card au-card--shadow">
					<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					<div className="au-card__bg">
						<h3><a href="/components/buttons">{ components[0].module }</a></h3>
						<div className="ver">{ components[0].ver }</div>
					</div>
				</div>
			</li>
			<li className="col-xs-6 col-sm-3">
				<a href="/components/buttons" className="au-card au-card--shadow">
					<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					<div className="au-card__bg">
						<h3 className="au-card__link">{ components[0].module }</h3>
						<div className="ver">{ components[0].ver }</div>
					</div>
				</a>
			</li>
			<li className="col-xs-6 col-sm-3">
				<div className="au-card au-card--detail">
					<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					<h3><a href="/components/buttons">{ components[0].module }</a></h3>
					<div className="ver">{ components[0].ver }</div>
				</div>
			</li>
			<li className="col-xs-6 col-sm-3">
				<a href="/components/buttons" className="au-card au-card--detail">
					<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					<h3 className="au-card__link">{ components[0].module }</h3>
					<div className="ver">{ components[0].ver }</div>
				</a>
			</li>
			<li className="col-xs-6 col-sm-3">
				<div className="au-card au-card--detail-left">
					<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					<h3><a href="/components/buttons">{ components[0].module }</a></h3>
					<div className="ver">{ components[0].ver }</div>
				</div>
			</li>
			<li className="col-xs-6 col-sm-3">
				<a href="/components/buttons" className="au-card au-card--detail-left">
					<img src={ components[0].img } alt="" className="au-responsive-media-img"/>
					<h3 className="au-card__link">{ components[0].module }</h3>
					<div className="ver">{ components[0].ver }</div>
				</a>
			</li>
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
