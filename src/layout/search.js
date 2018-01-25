import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 */
const Searchbox = ({ }) => (
		<form role="search" className="au-search au-streatch_row">
		  <label className="sronly" htmlFor="s1">Search</label>

		  <div className="au-streatch_col-fill">
		    <input id="s1" type="search" placeholder="site search" className="au-text-input"/>
		  </div>

		  <div className="au-streatch_col-fit">
		    <button className="au-btn au-btn--secondary">Search</button>
		  </div>

		</form>
);


Searchbox.propTypes = {

};

Searchbox.defaultProps = {};

export default Searchbox;
