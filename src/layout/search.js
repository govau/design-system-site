import AUtextInput from '../_auds/layout/text-inputs';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Searchbox component
 */
const Searchbox = ({ label, placeholder, _relativeURL, _ID, _pages }) => (
	<form role="search" className="au-search au-stretch_row" method="get" action={`${ _relativeURL( '/components/search/', _ID ) }/`}>
		<label className="sronly" htmlFor="s1">{ label }</label>

		<div className="au-stretch_col-fill">
			<AUtextInput block name="s" id="s1" type="search" placeholder={ placeholder } defaultValue={ _pages[ _ID ].searchvalue && _pages[ _ID ].searchvalue } />
		</div>

		<div className="au-stretch_col-fit">
			<button className="au-btn au-btn--secondary">{ label }</button>
		</div>
	</form>
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
