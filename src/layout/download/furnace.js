import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 */
const DownloadIntro = ({ _body }) => (
	<div className="au-grid">
		<form className="row furnace" method="POST" action="https://furnace.apps.y.cld.gov.au/furnace/">

			<div className="col-xs-12 col-sm-8">

						<div className="furnace--border">
							<h3>Select components</h3>
							<a href="#">Clear selections</a>
						</div>

						<div class="fieldset-wrapper">
							<fieldset>
								<legend className="sronly">Components</legend>

								<ul className="furnace--component-list">

									<li>
										<label>
											<img src="http://via.placeholder.com/144x144/ffffff/cccccc" alt=""/>

											<div className="furnace--component-detail">
												<h4>Accordion</h4>
												<p>Dependencies: Core, Body <br/>
													<a href="/components/buttons/"><span class="sronly">Accordion</span> Documentation</a>
												</p>
											</div>

											<div className="furnace--component-actions">
												<input type="checkbox" name="components" value="accordion" />Add <span class="sronly">Accordion</span><br/>
											</div>
										</label>
									</li>


									<li>
										<label>
											<img src="http://via.placeholder.com/144x144/ffffff/cccccc" alt=""/>

											<div className="furnace--component-detail">
												<h4>Animate</h4>
												<p>Dependencies: Core, Body <br/>
													<a href="/components/buttons/"><span class="sronly">Animate</span> Documentation</a>
												</p>
											</div>

											<div className="furnace--component-actions">
												<input type="checkbox" name="components" value="animate" />Add <span class="sronly">animate</span><br/>
											</div>
										</label>
									</li>


									<li>
										<label><input type="checkbox" name="components" value="body" />Body</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="breadcrumbs" />Breadcrumbs</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="buttons" />Buttons</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="callout" />Callout</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="control-input" />Control input</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="core" checked disabled />Core</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="cta-link" />Call to action link</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="direction-links" />Direction links</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="footer" />Footer</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="grid-12" />12 Column grid</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="header" />Header</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="headings" />Headings</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="inpage-nav" />In page nav</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="keyword-list" />Keyword list</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="link-list" />Link list</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="page-alerts" />Page alerts</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="progress-indicator" />Progress indicator</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="responsive-media" />Responsive media</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="select" />Select</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="skip-link" />Skip link</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="tags" />Tags</label>
									</li>
									<li>
										<label><input type="checkbox" name="components" value="text-inputs" />Text inputs</label>
									</li>
								</ul>

							</fieldset>
						</div>
			</div>

			<div className="col-xs-12 col-sm-4 col-md-offset-1 col-md-3">
				<h3 className="furnace--border">Your build</h3>
				<h4>NPM</h4>
				<div>
					Your code
					<a href="#" className="au-btn">Copy</a>
				</div>

				<h4>Download Zip</h4>
				<div class="fieldset">
					<fieldset>
						<legend>Stylesheets</legend>
						<label>
							<input type="radio" name="styleOutput" value="css" checked/>CSS minified
						</label><br/>
						<label>
							<input type="radio" name="styleOutput" value="cssModules" />CSS modules
						</label><br/>
						<label>
							<input type="radio" name="styleOutput" value="sassModules" />SASS modules
						</label>
					</fieldset>
					<fieldset>
						<legend>JavaScript</legend>
						<label>
							<input type="radio" name="jsOutput" value="js" checked/>JavaScript minified
						</label><br/>
						<label>
							<input type="radio" name="jsOutput" value="jsModules" />JavaScript modules
						</label><br/>
						<label>
							<input type="radio" name="jsOutput" value="react" />React modules
						</label>
					</fieldset>
				</div>
				<button type="submit" className="au-btn au-btn--block">Download</button>
			</div>

		</form>
	</div>
);

DownloadIntro.propTypes = {

};

DownloadIntro.defaultProps = {};

export default DownloadIntro;
