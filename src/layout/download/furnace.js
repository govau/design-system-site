import { AUcheckbox, AUradio } from '../../_uikit/layout/control-input';
import GetData from './../getData';
import Code from './../code';

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Print a list of depenedcies
 */
const DependencyList = ({ dependencies, MODULES }) => {

	const dependencyNames = [];

	Object.keys( MODULES ).map( ( module ) => {
		dependencies.map( ( dependency ) => {
			if ( MODULES[ module ].ID === dependency ) {
				dependencyNames.push( MODULES[ module ].name );
			}
		})
	})

	return (
		<Fragment>
			{
				dependencyNames.length > 0
					? `Dependencies: ${ dependencyNames.join(', ') }`
					: null
			}
		</Fragment>
	);
};



/**
 * The Furnace component
 */
const Furnace = ({ components, _ID, _body, _parseYaml, _relativeURL }) => {
	const MODULES = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === 'published',
		yaml: _parseYaml,
	});

	return (
		<div className="au-grid">
			<form className="row furnace" method="POST" action="https://designsystem.gov.au/furnace/">

				<div className="col-xs-12 col-sm-8">

					<h3 className="furnace__title">
						Select components
						<button type="reset" className="js-furnace-clear furnace__clear au-btn au-btn--tertiary icon icon--right icon--close">Clear selections</button>
					</h3>

					<fieldset className="fieldset--reset">
						<legend className="sronly">Components</legend>

						<ul className="furnace__component-list">
							{
								Object.keys( MODULES )
									.map( ( module, i ) => (
										<li className="furnace__component" key={ i }>

											<label className="furnace__component__label">
												<span className="furnace__component__control">
													<input
														type="checkbox"
														name="components"
														className="au-control-input__input js-furnace-selector"
														value={ MODULES[ module ].ID }
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
												<svg className="furnace__component__details__img" role="img" title={ MODULES[ module ].name }>
													<use xlinkHref={ `/assets/svg/map.svg#${ MODULES[ module ].ID }` } />
												</svg>

												<p className="furnace__component__dependencies">
													<DependencyList dependencies={ MODULES[ module ].dependencies } MODULES={ MODULES } />
												</p>

												<p className="furnace__component__documentation">
													<a href={ _relativeURL( `/components/${ MODULES[ module ].ID }`, _ID ) }>
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

					<h4>Download Zip</h4>

					<div className="furnace__buildbox">
						<div className="furnace__buildbox__wrapper">
						<fieldset className="fieldset--reset">
							<legend>Stylesheets</legend>

							<AUradio label="CSS minified" block name="styleOutput" value="css" defaultChecked />
							<AUradio label="CSS modules" block name="styleOutput" value="cssModules" />
							<AUradio label="SASS modules" block name="styleOutput" value="sassModules" />
						</fieldset>

						<fieldset className="fieldset--reset">
							<legend>JavaScript</legend>

							<AUradio label="JavaScript minified" block name="jsOutput" value="js" defaultChecked />
							<AUradio label="JavaScript modules" block name="jsOutput" value="jsModules" />
							<AUradio label="React modules" block name="jsOutput" value="react" />
						</fieldset>
						</div>
						<button type="submit" className="furnace__buildbox__download au-btn au-btn--block icon icon--dark icon--download">Download</button>
					</div>

					<div className="furnace-npm">
						<h4>npm</h4>
						<Code className="js-furnace-code">npm install --save @gov.au/core</Code>
					</div>

				</div>
			</form>
		</div>
	);
};


Furnace.propTypes = {};

Furnace.defaultProps = {};

export default Furnace;
