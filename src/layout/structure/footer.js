import AUfooter, { AUfooterEnd } from '../../_uikit/layout/footer';
import AUlinkList from '../../_uikit/layout/link-list';
import AUheading from '../../_uikit/layout/headings';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The gov.au footer
 */
const Footer = ({ headline, legallist, mainlist, _body, _ID, _relativeURL }) => (
	<AUfooter dark className="footer">

		<div className="container-fluid">

				<div className="row">
					<div className="col-md-offset-1 col-md-8 col-md-push-3 au-body au-body--dark">
						<AUheading size="md" level="2">{ headline }</AUheading>

						<AUlinkList items={ mainlist } inline/>

						<AUlinkList items={ legallist } className="footer__legal-links" />

						<AUfooterEnd>
							<div className="content footer__legal">
								{ _body }
							</div>
						</AUfooterEnd>

					</div>


					<div className="col-md-3 col-md-pull-9 footer__logo">
						<a href="http://dta.gov.au"><img className="footer__image" src={ _relativeURL( '/assets/img/coa-footer.png', _ID ) } alt="Australian Government, Digital Transformation Agency" title="Australian Government, Digital Transformation Agency"/></a>
					</div>

				</div>
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
