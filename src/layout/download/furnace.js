import PropTypes from 'prop-types';
import GetData from './../getData';
import React from 'react';


/**
 * The Intro component
 */
const Furnace = ({ components, _body, _parseYaml }) => {
	const MODULES = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === 'published',
		yaml: _parseYaml,
	});

	return (
		<div className="au-grid">
			<form className="row furnace" method="POST" action="https://gold.service.gov.au/furnace/">

				<div className="col-xs-12 col-sm-8">

					<h3 className="furnace__title">
						Select components
						<button className="furnace__title__control au-btn au-btn--tertiary">Clear selections</button>
					</h3>

					<fieldset className="hide-fieldset">
						<legend className="sronly">Components</legend>

						<ul className="furnace__component-list">
							{
								Object.keys( MODULES )
									.map( ( module, i ) => (
										<li className="furnace__component" key={ i }>

											<label className="furnace__component__label">
												<span className="furnace__component__control">
													<input type="checkbox" name="components" className="au-control-input__input" value={ MODULES[ module ].ID }
														required={ MODULES[ module ].required }
														checked={ MODULES[ module ].required }
														disabled={ MODULES[ module ].required }
														readOnly={ MODULES[ module ].required }
													/>
													<span className="au-control-input__text">
														<span className="sronly">Add</span>
															{ MODULES[ module ].name }
															{
																MODULES[ module ].required
																	? ' (required)'
																	: ''
															}
													</span>
												</span>
											</label>

											<div className="furnace__component__details">
												<img src={ MODULES[ module ].image } alt=""/>
												<p className="furnace__component__notes">
													{
														MODULES[ module ].dependencies.length > 0
															? `Dependencies: ${ MODULES[ module ].dependencies.join(', ') }`
															: null
													}
												</p>
												<p className="furnace__component__doclink">
													<a href={`/components/${ MODULES[ module ].ID }`}>
														<span className="sronly">{ MODULES[ module ].name }</span>
														Documentation
													</a>
												</p>
											</div>

										</li>
									)
								)
							}
						</ul>

					</fieldset>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-offset-1 col-md-3">

					<h3 className="furnace__title">Your build</h3>

					<h4>NPM</h4>
					<pre className="language-none">
						<code className="language-none furnace-npm">npm i</code>
					</pre>

					<h4>Download Zip</h4>

					<div className="furnace__buildbox">
						<fieldset className="hide-fieldset">
							<legend>Stylesheets</legend>

							<label className="au-control-input au-control-input--block">
								<input type="radio" name="styleOutput" value="css" className="au-control-input__input" defaultChecked />
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

						<fieldset className="hide-fieldset">
							<legend>JavaScript</legend>

							<label className="au-control-input au-control-input--block">
								<input type="radio" name="jsOutput" value="js" className="au-control-input__input" defaultChecked />
								<span className="au-control-input__text">JavaScript minified</span>
							</label>

							<label className="au-control-input au-control-input--block">
								<input type="radio" name="jsOutput" value="jsModules" className="au-control-input__input" />
								<span className="au-control-input__text">JavaScript modules</span>
							</label>

							<label className="au-control-input au-control-input--block">
								<input type="radio" name="jsOutput" value="react" className="au-control-input__input" />
								<span className="au-control-input__text">React modules</span>
							</label>

						</fieldset>
					</div>
					<button type="submit" className="au-btn au-btn--block">Download</button>

				</div>

			</form>
		</div>
	);
};

Furnace.propTypes = {};

Furnace.defaultProps = {};

export default Furnace;
