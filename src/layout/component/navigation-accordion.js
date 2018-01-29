import { CreateLink }      from '../navigation';
import GetData             from './../getData';
import AUaccordion         from '../../_uikit/layout/accordion';
import AUlinkList          from '../../_uikit/layout/link-list';


import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


const NavigationAccordion = ({ _relativeURL, _ID, _pages, _parseYaml }) => {

	const COMPONENTS = GetData({ yaml: _parseYaml });

	const CreateAccordion = ( stateGroup, components, iteration ) => {
		const navItems = [];

		components.map( component => {

			const link = {
				link: 'components/' + component.ID + '/',
				text: component.name
			}

			navItems.push( CreateLink( link, _relativeURL, _ID, _pages ) );
		});

		return (
			<Fragment>
				<AUaccordion header={ stateGroup } open={ iteration === 0 ? true : false } >
					<AUlinkList items={ navItems } />
				</AUaccordion>
			</Fragment>
		)
	}


	const accordionMarkup = [];

	// Group the components by status
	const componentsState = Object.keys( COMPONENTS ).reduce( ( stateGroup, componentName ) =>{
		const state = COMPONENTS[ componentName ].state;

		stateGroup[ state ] = stateGroup[ state ] || [];
		stateGroup[ state ].push( COMPONENTS[ componentName ] );
		return stateGroup;
	}, {});


	Object.keys( componentsState ).map( ( stateGroup, i ) => {
		accordionMarkup.push( CreateAccordion( stateGroup, componentsState[ stateGroup ], i ) );
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
