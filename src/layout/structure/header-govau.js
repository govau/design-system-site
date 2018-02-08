import PropTypes           from 'prop-types';
import React, { Fragment } from 'react';

/**
 * The headergovau component
 */
const HeaderGovAU = ( page ) => (
	<div className="headergovau">
		<div className="container-fluid">
			<div className="row headergovau__bar">
				<div className="col-md-12">
					<a
						href="#headergovau-accordion"
						className="headergovau__button js-accordion au-accordion--closed"
						aria-controls="headergovau-accordion"
						aria-expanded="false"
						aria-selected="false"
						role="tab"
						onClick="return UIKIT.accordion.Toggle( this )"
					>
						<span className="headergovau__logo">
							<svg className="headergovau__logo__svg" role="img" title="The Commonwealth Star">
								<use xlinkHref="/assets/svg/map.svg#star" />
							</svg>
							<span className="headergovau__logo__text">GOV.AU</span>
						</span>
						<span className="headergovau__official">An official site</span>
					</a>
				</div>
			</div>
			<div
				id="headergovau-accordion"
				className="headergovau__content row au-accordion--closed au-accordion__body"
				aria-hidden="false"
				>
				<div className="au-accordion__body-wrapper">
					<div className="col-sm-6">
						<p className="au-display-md">{ page.left_title }</p>
						<p>{ page.left_content }</p>
					</div>
					<div className="col-sm-6">
						<p className="au-display-md">{ page.right_title }</p>
						<p>{ page.right_content }</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);


HeaderGovAU.propTypes = {
	/**
	 * text: This is totally official
	 */
	text: PropTypes.string,

	/**
	 * button: An official website
	 */
	button: PropTypes.string.isRequired,

	/**
	 * title1: The .gov.au means its official
	 */
	title1: PropTypes.string.isRequired,

	/**
	 * content1: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	content1: PropTypes.string.isRequired,

	/**
	 * title2: This site is also protected by SSL
	 */
	title2: PropTypes.string.isRequired,

	/**
	 * content2: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	content2: PropTypes.string.isRequired,
};


HeaderGovAU.defaultProps = {};


export default HeaderGovAU;
