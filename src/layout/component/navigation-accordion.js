import { CreateLink }      from '../navigation';
import GetData             from './../getData';
import AUaccordion         from '../../_uikit/layout/accordion';
import AUlinkList          from '../../_uikit/layout/link-list';


import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';

// Use the sort function from furnace
// Fix up furnace css
// Get data sorts the data
// Shell markdown


const NavigationAccordion = ({ _relativeURL, _ID, _pages, _parseYaml }) => {

	const CreateAccordion = ( title, components, iteration ) => {
		const navItems = [];

		components.map( component => {

			const link = {
				link: '/components/' + component.ID,
				text: component.name
			}

			navItems.push( CreateLink( link, _relativeURL, _ID, _pages ) );
		});

		return (
			<Fragment>
				<AUaccordion header={ title } >
					<AUlinkList items={ navItems } />
				</AUaccordion>
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
	Object.keys( componentStates ).map( ( state, i  ) => {

		const components = GetData({
			filter: ( key, COMPONENTS ) => {
				return COMPONENTS[ key ].state === state;
			},
			yaml: _parseYaml,
		})

		accordionMarkup.push( CreateAccordion( componentStates[ state ], components ) );
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
