import AUsideNav from '../../_auds/layout/side-nav';

import React from 'react';
import PropTypes from 'prop-types';

const SideNav = ({
	startID,
	maxDepth,
	order,
	_relativeURL,
	_ID,
	_nav,
	_pages
}) => {

	console.log("-----------------")
	console.log(_relativeURL)
	console.log("-----------------")
	const SortNavigation = ( a, b ) => {

		// Split the values ../../ and return the ID
		const GetLinkID = ( link ) => {
			return link.split( '/' )[ link.split( '/' ).length - 1 ]
		}

		// If it is the current page use the ID or use the link value
		const aLink = a.link === '.' ? _ID : a.link;
		const bLink = b.link === '.' ? _ID : b.link;

		// Get the index from the order of the last part of the link
		let indexOfA = order.indexOf( GetLinkID( aLink ) );
		let indexOfB = order.indexOf( GetLinkID( bLink ) );

		if ( indexOfA === -1 ){
			indexOfA = order.length + 1;
		}

		if ( indexOfB === -1 ){
			indexOfB = order.length + 1;
		}

		if ( indexOfA < indexOfB ){
			return -1;
		}

		if ( indexOfA > indexOfB ){
			return 1;
		}

		return 0;
	}

	let currentDepth = 0;
	const CreateNavigation = ( nav ) => Object.entries( nav )
		.map( ([ key, value ]) => {
			currentDepth ++;
			const link = {
				text: _pages[ key ].pagetitle,
				link: _relativeURL( key, _ID ),
				active: _ID === key ? true : false,
			}

			// If the element has children create children
			if ( typeof value === 'object' && currentDepth !== maxDepth ){
				link.children = CreateNavigation( value );
			}

			return link;
		});

	let navItems = CreateNavigation( _nav.index[ startID ] );

	// If there is an order, sort the navigation
	if( order ){
		navItems = navItems.sort( SortNavigation );
	}

	return(
		<AUsideNav
			accordionHeader="Explore the comprehensive list of components"
			menuHeaderLink="/components"
			menuHeader="Components"
			items={ navItems }
		/>
	);
};


SideNav.propTypes = {
	/**
	 * startID: 'get-started'
	 */
	startID: PropTypes.string,

	/**
	 * maxDepth: 1
	 */
	maxDepth: PropTypes.number,

	/**
	 * order: [ 'npm-install', 'customise-color' ]
	 */
	order: PropTypes.arrayOf( PropTypes.string ),
};

SideNav.defaultProps = {
	maxDepth: 3,
};

export default SideNav;
