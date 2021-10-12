import AUfooter, { AUfooterNav } from '../../_auds/layout/footer';
import AUlinkList from '../../_auds/layout/link-list';
import AUheading from '../../_auds/layout/headings';
import AUctaLink from '../../_auds/layout/cta-link';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The gov.au footer
 */
const Footer = ({ headline, legallist, mainlist, _body, _ID, _relativeURL }) => (
	<AUfooter dark className="footer au-body au-body--dark">

		<div className="container-fluid">

				<AUfooterNav>
					<div className="col-md-offset-1 col-md-8 col-md-push-3">
						<AUheading size="md" level="2">{ headline }</AUheading>

						<AUlinkList items={ mainlist } inline/>

						<AUlinkList items={ legallist } className="footer__legal-links" />

						<div className="au-footer__end">
							<div className="footer__content footer__legal">
								{ _body }
							</div>
						</div>

					</div>


					<div className="col-md-3 col-md-pull-9 footer__logo">
						<p className="footer__affiliate">
							<span>Maintained by the</span>
							<span>Design System AU community</span>
							<span className="footer__affiliate-link">
								<AUctaLink link="https://designsystemau.org/" text="Learn more" dark/>
							</span>
						</p>
					</div>

				</AUfooterNav>
			</div>

	</AUfooter>
);

Footer.propTypes = {
	/**
	 * headline: Community
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * legallist:
	 *   - text: Forums
	 *     link: /
	 *   - text: Articles
	 *     link: /
	 */
	legallist: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
		})
	).isRequired,

	/**
	 * mainlist:
	 *   - text: Privacy policy
	 *     link: /
	 *   - text: Need help?
	 *     link: /
	 */
	mainlist: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
		})
	).isRequired,

	/**
	 * _body: (text)(1)
	 */
	_body: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;
