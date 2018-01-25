import { CreateLink }      from '../navigation';
import AUaccordion         from '../../_uikit/layout/accordion';
import AUlinkList          from '../../_uikit/layout/link-list';


import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


const NavigationAccordion = ({ navAccordion, _relativeURL, _ID, _pages  }) => {


	const CreateAccordion = ( section, iteration ) => {
		const navItems = [];

		section.items.map( item => {
			navItems.push( CreateLink( item, _relativeURL, _ID, _pages ) );
		});

		return (
			<Fragment>
				<AUaccordion header={ section.title } open={ iteration === 0 ? true : false } >
					<AUlinkList
						items={ navItems }
						className={ section.alignment === 'right' ? 'mainmenu--right' : '' }
					/>
				</AUaccordion>
			</Fragment>
		)
	}


	const accordionMarkup = [];

	navAccordion.sections.map( ( section, i ) => {
		accordionMarkup.push( CreateAccordion( section, i ) );
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
