import React from 'react';
import PropTypes from 'prop-types';

import AUbreadcrumbs from '../_uikit/layout/breadcrumbs';

const Breadcrumbs = ({ startPath, parents, ID, relativeURL, pages }) => {

	let parentItems = parents;
	if ( startPath !== undefined ){
		parentItems = parents.slice( parents.indexOf( startPath ), parents.length );
	}
	// index of current page path in _parents array
	const currentPageIndex = parentItems.indexOf( ID );

	const breadcrumbItems = parentItems.map( ( breadcrumbItem) => {
		// the root path is written as "index" in the _parents cuttlebelle object
		// changed text to home, since title of home page is "About"
		if ( breadcrumbItem === "index" ) {
			return {
				link: relativeURL( "/", ID ),
				text: "Home"
			}
		}
		// if breadcrumb item is not last item, create relative URL from
		// curent path to parentArray page
		else if ( breadcrumbItem !== parentArray[ currentPageIndex ] ) {
			return {
				link: relativeURL( parentArray[ currentPageIndex - 1 ], ID ),
				text: pages[ breadcrumbItem ].pagetitle
			}
		}
		// breadcrumb item is last item
		else {
			return {
				text: pages[ breadcrumbItem ].pagetitle
			}
		}
	});

	return (
		<AUbreadcrumbs label="Breadcrumb for this page" items={ breadcrumbItems } />
	)
}

Breadcrumbs.propTypes = {
	startPath: PropTypes.string,
	parents: PropTypes.object.isRequired,
	relativeURL: PropTypes.func.isRequired,
	pages: PropTypes.object.isRequired,
}

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
