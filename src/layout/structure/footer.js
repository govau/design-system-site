import AUfooter, { AUfooterEnd } from '../../_uikit/layout/footer';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The gov.au footer
 */
const Footer = ({ _body  }) => (
	<AUfooter className="au-footer au-body au-footer--dark au-body--dark">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">

					<AUfooterEnd>
						<img className="au-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />

						<div className="content">
							{ _body }
						</div>
					</AUfooterEnd>

				</div>
			</div>
		</div>
	</AUfooter>
);

Footer.propTypes = {
	/**
	 * _body: (text)[4]
	 */
	_body: PropTypes.node.isRequired,
};

export default Footer;
