import React, { Fragment } from 'react';

import AUlinkList          from '../_auds/layout/link-list';
import { CreateLink }      from './navigation';



/**
 * The NavigationAccordion component
 */
const NavigationAccordion = ({ navItems, _relativeURL, _ID, _pages }) => {
	// e.g. /components/buttons = buttons
	const splitUrl = _ID.split( '/' );

	const CreateAccordion = ( title, links, _pages, _ID ) => {

		// Open the accordion based on the current pages section
		let _isOpen = false;

		// Create AUlinkList from navigation
		const menu = [];
		links.map( link => {
			const label = link.highlight
				?
					<Fragment>
						{ link.name } <span className="badge badge--highlight">{ link.highlight }</span>
					</Fragment>
				: link.name;

			if ( _ID.includes( link.ID ) ) {
				_isOpen = true;
			}

			const linkData = {
				link: `${ splitUrl[ 0 ] }/${ link.ID }`,
				text: label
			};

			menu.push( CreateLink( linkData, _relativeURL, _ID, _pages ) );
		});

		return (
			<Fragment>
				{
					links.length
						?
						<section className="au-accordion">
							<button href={ `#accordion-${ title }` }
								className={ `au-accordion__title js-accordion${ _isOpen ? '' : ' au-accordion--closed' }` }
								aria-controls={ `accordion-${ title }` }
								aria-expanded={ _isOpen ? 'true' : 'false' }
								onClick="return AUDS.accordion.Toggle( this )">
									{ title } <span className={ `badge badge--${ title }` }>{ links.length }</span>
							</button>
							<div
								className={ `au-accordion__body${ _isOpen ? '' : ' au-accordion--closed' }` }
								id={ `accordion-${ title }` }
								aria-hidden="false">
								<div className="au-accordion__body-wrapper">
									<AUlinkList items={ menu } />
								</div>
							</div>
						</section>
						: ''
				}
			</Fragment>
		)
	};


	const accordionMarkup = [];

	Object.entries( navItems ).map( ([ title, links ]) => {
		accordionMarkup.push( CreateAccordion( title, links, _pages, _ID ) );
	});

	return(
		<nav className={ `navigation navigation--accordion ${ accordionMarkup.theme === 'dark' ? 'navigation--dark ' : '' }` }>
		{
			accordionMarkup.map( ( accordion, i ) => (
				<Fragment key={ i }>{ accordion }</Fragment>
			))
		}
		</nav>
	);
};

NavigationAccordion.propTypes = {};

NavigationAccordion.defaultProps = {};

export default NavigationAccordion;
