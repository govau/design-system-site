import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 * @disable-docs
 */
const Furnace = ({ components, _body }) => (
	<div className="au-grid">
		<form className="row furnace" method="POST" action="https://furnace.apps.y.cld.gov.au/furnace/">

			<div className="col-xs-12 col-sm-8">

				<div className="furnace--border">
					<h3>Select components</h3>
					<button>Clear selections</button>
				</div>

				<fieldset>
					<legend className="sronly">Components</legend>

					<ul className="furnace--component-list">
						{
							components.map( ( components, i ) => (
								<li key={ i }>
									<label>
										<span className="control">
											<input type="checkbox" name="components" className="au-control-input__input" value={ components.stub }
												required={ components.required }
												checked={ components.required }
												disabled={ components.required }
												readOnly={ components.required }
											/>
											<span className="au-control-input__text">
												<span className="sronly">Add</span>
													{ components.name }
													{ components.required
														? ' (required)'
														: ''
													}
												</span>
											</span>
									</label>
									<div className="details">
										<img src={ components.img } alt=""/>
										<p className="notes">
											Dependencies: { components.dependencies }
										</p>
										<p className="docs">
											<a href={ components.url }><span className="sronly">{ components.name }</span> Documentation</a>
										</p>
									</div>
								</li>
							))
						}
					</ul>

				</fieldset>

			</div>

			<div className="col-xs-12 col-sm-4 col-md-offset-1 col-md-3">
				<h3 className="furnace--border">Your build</h3>
				<h4>NPM</h4>
				<div className="furnace--buildbox">
					<div className="furnace--code">
						npm i <br/>
						@gov.au/body<br/>
						@gov.au/breadcrumbs <br/>
						@gov.au/animate <br/>
						--save
					</div>
					<a href="#" className="au-btn au-btn--size-sm">Copy</a>
				</div>

				<h4>Download Zip</h4>

				<div className="furnace--buildbox">
					<fieldset>
						<legend>Stylesheets</legend>
						<label className="au-control-input au-control-input--block">
							<input type="radio" name="styleOutput" value="css" className="au-control-input__input" checked/>
							<span className="au-control-input__text">CSS minified</span>
						</label>

						<label className="au-control-input au-control-input--block">
							<input type="radio" name="styleOutput" value="cssModules" className="au-control-input__input" />
							<span className="au-control-input__text">CSS modules</span>
						</label>

						<label className="au-control-input au-control-input--block">
							<input type="radio" name="styleOutput" value="sassModules"  className="au-control-input__input" />
							<span className="au-control-input__text">SASS modules</span>
						</label>

					</fieldset>

					<fieldset>
						<legend>JavaScript</legend>

						<label className="au-control-input au-control-input--block">
							<input type="radio" name="jsOutput" value="js" checked className="au-control-input__input"/>
							<span className="au-control-input__text">JavaScript minified</span>
						</label>

						<label className="au-control-input au-control-input--block">
							<input type="radio" name="jsOutput" value="jsModules" className="au-control-input__input"/>
							<span className="au-control-input__text">JavaScript modules</span>
						</label>

						<label className="au-control-input au-control-input--block">
							<input type="radio" name="jsOutput" value="react" className="au-control-input__input"/>
							<span className="au-control-input__text">React modules</span>
						</label>

					</fieldset>
				</div>
				<button type="submit" className="au-btn au-btn--block">Download</button>

			</div>

		</form>
	</div>
);

Furnace.propTypes = {

};

Furnace.defaultProps = {};

export default Furnace;
