import { CreateLink }      from '../navigation';
import GetData             from './../getData';
import AUlinkList          from '../../_uikit/layout/link-list';

import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


const NavigationAccordion = ({ _relativeURL, _ID, _pages, _parseYaml }) => {

	const CreateAccordion = ( title, components, id, state, i ) => {

		let _isOpen = false;

		// Open the released accordion on the component home page
		if( id === undefined && state === 'published' ) {
			_isOpen = true;
		}
		// Open the accordion based on the current pages module state
		else if( id && state ) {

			const MODULE = GetData({
				filter: ( key, COMPONENTS ) => key === _pages[ _ID ].module,
				yaml: _parseYaml
			})[ 0 ];

			if ( MODULE.state === state ) {
				_isOpen = true;
			}
		}

		// Create AUlinkList from navigation
		const navItems = [];
		components.map( component => {

			const link = {
				link: `/components/${ component.ID }`,
				text: component.name
			}

			navItems.push( CreateLink( link, _relativeURL, _ID, _pages ) );
		});

		return (
			<Fragment>
				<section class="au-accordion">
					<a href={ `#nav-accordion-${ state }` }
						class={ `au-accordion__title js-au-accordion${ _isOpen ? '' : ' au-accordion--closed' }` }
						aria-controls={ `accordion-${ state }` }
						aria-expanded={ _isOpen ? 'true' : 'false' }
						aria-selected={ _isOpen ? 'true' : 'false' }
						role="tab"
						onClick="return UIKIT.accordion.Toggle( this )">
							{ title } <span className={ `badge badge--${ state }` }>{ components.length }</span>
					</a>
					<div
						class={ `au-accordion__body${ _isOpen ? '' : ' au-accordion--closed' }` }
						id={ `accordion-${ state }` }
						aria-hidden="false">
						<div class="au-accordion__body-wrapper">
							<AUlinkList items={ navItems } />
						</div>
					</div>
				</section>
			</Fragment>
		)
	};

	const componentStates = {
		published: 'Released',
		unpublished: 'In progress',
		alpha: 'Suggestions'
	};

	const accordionMarkup = [];

	// For each state create an accordion
	Object.keys( componentStates ).map( ( state, i ) => {

		const components = GetData({
			filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === state,
			yaml: _parseYaml,
		});

		accordionMarkup.push( CreateAccordion( componentStates[ state ], components, _pages[ _ID ].module, state, i ) );
	});


	return(
		<nav className={ `navigation navigation--accordion ${ accordionMarkup.theme === 'dark' ? 'navigation--dark ' : '' }` }>
		{
			accordionMarkup.map( ( accordion, i ) => (
				<Fragment key={ i }>{ accordion }</Fragment>
			))
		}
		</nav>
	)
};

export default NavigationAccordion;
