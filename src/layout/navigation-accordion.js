import React, { Fragment } from 'react';

import AUlinkList          from '../_uikit/layout/link-list';
import GetModule           from '../helper/getModule';
import { CreateLink }      from './navigation';
import GetData             from '../helper/getData';



/**
 * The NavigationAccordion component
 */
const NavigationAccordion = ({ navItems, _relativeURL, _ID, _pages, _parents, _parseYaml }) => {
	const currentItem = _ID.split( '/' )[ 1 ];  // e.g. /components/buttons = buttons

	const CreateAccordion = ( title, links, currentItem ) => {

		let _isOpen = false;

		// Open the accordion based on the current pages section
		if ( _ID.includes( currentItem ) ) {
			_isOpen = true;
		}

		// Create AUlinkList from navigation
		const menu = [];
		links.map( link => {
			const label = link.highlight
				?
					<Fragment>
						{ link.name } <span className="badge badge--highlight">{ link.highlight }</span>
					</Fragment>
				: link.name;

			const linkData = {
				link: link.ID,
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
							<a href={ `#accordion-${ title }` }
								className={ `au-accordion__title js-accordion${ _isOpen ? '' : ' au-accordion--closed' }` }
								aria-controls={ `accordion-${ title }` }
								aria-expanded={ _isOpen ? 'true' : 'false' }
								aria-selected={ _isOpen ? 'true' : 'false' }
								onClick="return UIKIT.accordion.Toggle( this )">
									{ title } <span className={ `badge badge--${ title }` }>{ links.length }</span>
							</a>
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
		accordionMarkup.push( CreateAccordion( title, links, currentItem ) );
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
