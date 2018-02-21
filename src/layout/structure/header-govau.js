import AUlinkList          from '../../_uikit/layout/link-list';

import PropTypes           from 'prop-types';
import React, { Fragment } from 'react';

/**
 * The headergovau component
 */
const HeaderGovAU = ({ menu, left_title, left_content, right_title, right_content }) => (
	<div className="headergovau">
		<div className="container-fluid">
			<div className="row headergovau__bar">
				<div className="col-md-12">
					<a
						href="#headergovau-accordion"
						className="headergovau__button js-header-accordion au-accordion--closed"
						aria-controls="headergovau-accordion"
						aria-expanded="false"
						aria-selected="false"
						role="tab"
						onClick="return AU.accordion.Toggle( this )"
					>
						<span className="headergovau__logo">
							<svg className="headergovau__logo__svg" role="img" title="The Commonwealth Star">
								<use xlinkHref="/assets/svg/map.svg#star" />
							</svg>
							<span className="headergovau__logo__text">GOV.AU</span>
						</span>
						<span className="headergovau__official">An official site</span>
					</a>
					<AUlinkList inline items={ menu } />
				</div>
			</div>
			<div
				id="headergovau-accordion"
				className="headergovau__content row au-accordion--closed au-accordion__body"
				aria-hidden="false"
				>
				<div className="au-accordion__body-wrapper">
					<div className="col-sm-6">
						<div className="headergovau__icon-content icon--govau">
							<p className="headergovau__title">{ left_title }</p>
							<p>{ left_content }</p>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="headergovau__icon-content icon--secure">
							<p className="headergovau__title">{ right_title }</p>
							<p>{ right_content }</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

HeaderGovAU.propTypes = {
	/**
	 * left_title: The .gov.au means its official
	 */
	left_title: PropTypes.string.isRequired,

	/**
	 * left_content: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	left_content: PropTypes.string.isRequired,

	/**
	 * right_title: This site is also protected by SSL
	 */
	right_title: PropTypes.string.isRequired,

	/**
	 * right_content: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	right_content: PropTypes.string.isRequired,
};

HeaderGovAU.defaultProps = {};

export default HeaderGovAU;
