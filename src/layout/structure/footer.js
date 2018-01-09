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
					<div className="col-md-offset-1 col-md-8 col-md-push-3">

						<h2 className="au-display-md">Community</h2>
						<ul class="au-footer--main-links au-link-list">
							<li><a href="#">Forums</a></li>
							<li><a href="#">Articles</a></li>
							<li><a href="#">Roadmap</a></li>
							<li><a href="#">Github</a></li>
						</ul>

						<ul class="au-footer--legal-links au-link-list">
							<li><a href="#">Privacy policy</a></li>
							<li><a href="#">Need help? </a></li>
							<li><a href="#">Accessibility</a></li>
							<li><a href="#">Security</a></li>
						</ul>

						<AUfooterEnd>
							<div className="content au-footer--legal">
								{ _body }
							</div>
						</AUfooterEnd>
					</div>

					<div className="col-md-3 col-md-pull-9 au-footer-logo">
						<img className="au-responsive-media-img" src="http://placehold.it/500x200" alt="Commonwealth Coat of Arms crest logo" />
					</div>

				</div>
			</div>

	</AUfooter>
);

Footer.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;
