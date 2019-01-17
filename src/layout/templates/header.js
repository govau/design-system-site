import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Contributors from '../contributors';

import AUlinkList   from '../../_auds/layout/link-list';
import AUheading    from '../../_auds/layout/headings';

import { GetComponentValue, GetState } from '../../helper/getData';



/**
 * The template header component
 */
const TemplateHeader = ({ template, _parseMD, _ID, _relativeURL, _parseYaml }) => {
	const requiredComponents = [];
	let templateContributors;

	if( template.components ) {
		const allContributors = [];

		template.components.forEach( component => {
			requiredComponents.push({
				link: `/components/${ component }`,
				text: GetComponentValue( component, 'name', _parseYaml ),
			});

			allContributors.push( ...GetComponentValue( component, 'contributors', _parseYaml ) );
		});

		// Get the unique template contributors from multiple components
		templateContributors = allContributors.reduce( ( accumulator, current ) => {
				// If it cannot find a unique name, add it to the accumulator
				if ( !accumulator.find( ({ name }) => name === current.name ) ) {
					accumulator.push( current );
				}

				return accumulator;
			}, [] );
	}

	return (
		<div className="row componentheader">
			<div className="col-sm-6">
				<h1 className="componentheader__heading">
					{ template.name }
				</h1>
				{
					template.state === 'published'
						? <span className="componentheader__version">v{ template.version }</span>
						: null
				}
				<div className="componentheader__body">{ _parseMD( template.description ) }</div>
			</div>
			<div className="componentheader__statusbox col-sm-offset-1 col-sm-5">
				<div className={ `component-status component-status--${ template.state }` }>
					<AUheading size="sm" level="2" className="component-status__title">
						{ GetState( template.state ) }
					</AUheading>
					<dl className="component-status__definition">
						{
							template.components
								?
									<Fragment>
										<dt>Requires</dt>
										<dd>
											<AUlinkList
												inline
												items={ requiredComponents }
												className="component-status__definition__list"
											/>
										</dd>
									</Fragment>
								: null
						}
						{
							template.state === 'published' && templateContributors
								?
									<Fragment>
										<dt>Contributors</dt>
										<dd>
											<Contributors
												contributors={ templateContributors }
												_relativeURL={ _relativeURL }
												_ID={ _ID }
											/>
										</dd>
									</Fragment>
								: null
						}
					</dl>
				</div>
			</div>
		</div>
	)
};

TemplateHeader.propTypes = {};

TemplateHeader.defaultProps = {};

export default TemplateHeader;
