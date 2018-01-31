import AUtextInput from '../_uikit/layout/text-inputs.js';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Searchbox component
 */
const Searchbox = ({ label, placeholder }) => (
	<form role="search" className="au-search au-stretch_row">
		<label className="sronly" htmlFor="s1">{ label }</label>

		<div className="au-stretch_col-fill">
			<AUtextInput id="s1" type="search" placeholder={ placeholder } />
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
