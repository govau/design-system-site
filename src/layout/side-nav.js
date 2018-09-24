import AUsideNav           from '../_uikit/layout/side-nav';

import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';

const SideNav = ({ _relativeURL, _ID, _nav, _pages }) => {

	const CreateNavigation = ( nav ) => Object.entries( nav )
		.map( ([ key, value ]) => {
			const link = {
				text: _pages[ key ].pagetitle,
				link: _relativeURL( key, _ID ),
				active: _ID === key ? true : false,
			}

			// If the element has children create children
			if ( typeof value === 'object' ){
				link.children = CreateNavigation( value );
			}

			return link;
		});

	const getStartedNav = CreateNavigation( _nav.index[ 'get-started' ] );

	return(
		<AUsideNav
			accordionHeader="More information on getting started"
			menuHeaderLink="/get-started"
			menuHeader="Get started"
			items={ getStartedNav }
		/>
	);
};


SideNav.propTypes = {};

SideNav.defaultProps = {};

export default SideNav;
