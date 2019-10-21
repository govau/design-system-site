import AUheading from '../../_auds/layout/headings';
import AUbutton from '../../_auds/layout/buttons';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
const Text_with_cta = ({ title, btnURL, btntext, _body }) => (
		<div className="users__intro">
			<h2>{ title }</h2>
			{ _body }
			<p><AUbutton link={ btnURL } as='secondary'>{ btntext }</AUbutton></p>
		</div>
);


Text_with_cta.propTypes = {
	title: PropTypes.string,
	btnURL: PropTypes.string,
	btntext: PropTypes.string
};

Text_with_cta.defaultProps = {};

export default Text_with_cta;
