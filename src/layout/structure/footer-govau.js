/***************************************************************************************************************************************************************
 *
 * FooterGovAU function
 *
 * Footers provide a consistent end to pages.
 *
 **************************************************************************************************************************************************************/

import PropTypes from 'prop-types';
import React from 'react';

import Footer, { FooterEnd } from '../../_uikit/layout/footer';


/**
 * The gov.au footer
 *
 * Use for: thing thing thing
 */
const FooterGovAU = ( props ) => (
	<Footer>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<FooterEnd>
						<p>{ props.subline }</p>
						<img className="uikit-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />
						<p>
							<small>
								&copy; Commonwealth of Australia,
								<a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT licensed</a>
							</small>
						</p>
					</FooterEnd>
				</div>
			</div>
		</div>
	</Footer>
);

FooterGovAU.propTypes = {
	/**
	 * subline: Potato and tomato having the best time
	 */
	subline: PropTypes.string.isRequired,
};

export default FooterGovAU;
