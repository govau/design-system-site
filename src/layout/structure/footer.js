/***************************************************************************************************************************************************************
 *
 * FooterGovAU function
 *
 * Footers provide a consistent end to pages.
 *
 **************************************************************************************************************************************************************/

import PropTypes from 'prop-types';
import React from 'react';

import AUfooter, { AUfooterEnd } from '../../_uikit/layout/footer';


/**
 * The gov.au footer
 *
 * Use for: thing thing thing
 */
const Footer = ({ dark, alt, _body  }) => (
	<AUfooter className={ `au-footer au-body ${ dark ? ' au-footer--dark au-body--dark' : '' }${ alt ? ' au-footer--alt au-body--alt' : '' } `} >
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<AUfooterEnd>
						<div className="content">
							{ _body }
						</div>
						<img className="au-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />
						<p>
							<small>
								&copy; Commonwealth of Australia,
								<a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT licensed</a>
							</small>
						</p>
					</AUfooterEnd>
				</div>
			</div>
		</div>
	</AUfooter>
);


Footer.propTypes = {
	/**
	 * _body: Potato and tomato having the best time
	 */
	_body: PropTypes.node,

	/**
	 * dark: false
	 */
	dark: PropTypes.bool,

	/**
	 * alt: true
	 */
	alt: PropTypes.bool,
};


export default Footer;
