import AUfooter, { AUfooterEnd } from '../../_uikit/layout/footer';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The gov.au footer
 */
const Footer = ({ headline, legallist, mainlist, imgurl, imgalt,  _body  }) => (
	<AUfooter className="au-footer au-body au-footer--dark au-body--dark">

		<div className="container-fluid">

				<div className="row">
					<div className="col-md-offset-1 col-md-8 col-md-push-3">

						<h2 className="au-display-md">{ headline }</h2>
						<ul className="au-footer--main-links au-link-list">
							{
								mainlist.map( ( mainlist, i ) => (
									<li key={ i }>
										<a href={ mainlist.link }>{ mainlist.text }</a>
									</li>
								))
							}
						</ul>

						<ul className="au-footer--legal-links au-link-list">
							{
								legallist.map( ( legallist, i ) => (
									<li key={ i }>
										<a href={ legallist.link }>{ legallist.text }</a>
									</li>
								))
							}
						</ul>

						<AUfooterEnd>
							<div className="content au-footer--legal">
								{ _body }
							</div>
						</AUfooterEnd>

					</div>


					<div className="col-md-3 col-md-pull-9 au-footer-logo">
						<img className="au-responsive-media-img"
							src={
								imgurl.startsWith('http')
									? imgurl
									: _relativeURL( imgurl )
							}
							alt={ imgalt } />
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
