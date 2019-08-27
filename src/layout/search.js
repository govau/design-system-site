import AUsearchBox from '../_auds/layout/searchbox';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Searchbox component
 */
const Searchbox = ({ label, placeholder, _relativeURL, _ID, _pages }) => (
	<AUsearchBox
		id="s1"
		aria-label="sitewide"
		label="Search for a component"
		btnText="Search"
		inputProps= {{
			defaultValue: _pages[ _ID ].searchvalue && _pages[ _ID ].searchvalue
		}}
		action={`${ _relativeURL( '/components/search/', _ID ) }/`}
		method="get"
	/>
);


Searchbox.propTypes = {
	/**
	 * label: Search
	 */
	label: PropTypes.string.isRequired,

	/**
	 * placeholder: e.g. Body
	 */
	placeholder: PropTypes.string.isRequired,
};

Searchbox.defaultProps = {};

export default Searchbox;
