import GetModule from './../../helper/getModule';
import GetData from './../../helper/getData';

import PropTypes from 'prop-types';
import React from 'react';


/**
 * The component footer component
 *
 * @disable-docs
 */
const ComponentFooter = ({ _ID, _parseYaml, _relativeURL, _parents }) => {
	const module = GetModule( _parents, _ID );

	const MODULES = GetData({
		yaml: _parseYaml,
		object: true,
	});

	let _hasRelated = true;

	if ( !MODULES[ module ].related ) {
		_hasRelated = false;
	}
	else {
		MODULES[ module ].related.map( ( item, i ) => {
			if( MODULES[ item ] === undefined ) {
				_hasRelated = false;
				console.error( `Could not find a module for ${ item } when creating a list of related modules` );
			}
		})
	}

	return (
		<div className="componentfooter au-grid">
			<div className="row">
				{
					_hasRelated
						?
							<div className="col-sm-12 col-md-6">
								<h3>Related components</h3>
								<ul>
									{
										MODULES[ module ].related.map( ( item, i ) => (
											<li key={ i }>
												<a href={ _relativeURL( `/components/${ MODULES[ item ].ID }`, _ID) }>{ MODULES[ item ].name }</a>
											</li>
										))
									}
								</ul>
							</div>
						: null
				}
				{
					MODULES[ module ].status === 'published'
						?
							<div className="col-sm-6 col-md-3">
								<h3>Dependencies</h3>
								<ul>
									{
										MODULES[ module ].dependencies.map( ( item, i ) => (
											<li key={ i }>
												<a href={ _relativeURL( `/components/${ MODULES[ item ].ID }`, _ID) }>{ MODULES[ item ].name }</a>
											</li>
										))
									}
								</ul>
							</div>
						: null
				}
				<div className="col-sm-6 col-md-3">
					<h3>Feedback</h3>
					<ul>
						<li>
							<a className="icon icon--community" href={ `https://community.digital.gov.au/t/${ MODULES[ module ].ID }` }>Community discussion</a>
						</li>
						<li>
							<a className="icon icon--github" href="https://github.com/govau/design-system-components/issues/new">Report an issue</a>
						</li>
						{
							MODULES[ module ].status === 'published'
								?
									<li>
										<a className="icon icon--github" href={`https://github.com/govau/design-system-components/tree/master/packages/${ MODULES[ module ].ID }`}>
											Code Contribution
										</a>
									</li>
								: null
						}
						<li>
							<a className="icon icon--email" href="mailto:designsystem@dta.gov.au">Email the team</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

ComponentFooter.propTypes = {};

ComponentFooter.defaultProps = {};

export default ComponentFooter;
