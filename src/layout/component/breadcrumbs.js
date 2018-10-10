import React from 'react';
import AUbreadcrumbs from '../../_uikit/layout/breadcrumbs';


const Breadcrumbs = ( { _parents, _ID, _relativeURL, startPath, _pages} ) => {

	const parents = startPath === undefined ? _parents : _parents.
	slice( _parents.indexOf( startPath ), _parents.length );

	// index of current page path in parents array
	const index = parents.indexOf( _ID );

	const items = parents.map( ( path, i ) => {
		if ( path === "index" ) {
			return {
				link: _relativeURL( "/", _ID ),
				text: "Home"
			}
		}
		// link is not last item
		else if ( path !== parents[index] ) {
			return {
				link: _relativeURL( parents[ index - 1 ], _ID ),
				text: _pages[ path ].pagetitle
			}
		}

		// link is last item
		else {
			return {
				text: _pages[ path ].pagetitle
			}
		}
	});


	return (
		<AUbreadcrumbs label="Breadcrumb for this page"
			items={items}
		/>
	)
}

export default Breadcrumbs;
