import AUheader, { AUheaderBrand } from '../../_uikit/layout/header';
import AUskipLink                  from '../../_uikit/layout/skip-link';
import React, { Fragment }         from 'react';
import PropTypes                   from 'prop-types';


/**
 * The header component
 */
const Header = ({ title, title_badge, mainmenu, header_govau, _relativeURL, _ID, _pages, _body }) => (
	<div className="header-wrapper">
		<AUskipLink links={[
			{
				link: '#mainmenu',
				text: 'Skip to navigation',
			},
			{
				link: '#content',
				text: 'Skip to content',
			},
		]} />
		{ header_govau }
		<div className="header">
			<div id="focustrap-top"></div>
			<AUheader dark hero={ _ID === 'index' }>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<AUheaderBrand
								title={
									<Fragment>
										{ title } <span className="header__badge"> { title_badge }</span>
									</Fragment>
								}
								subline={ _body }
								link={ _ID === 'index' ? undefined : '/' }
								brandImage={ _relativeURL( '/assets/img/header-logo-agov.png', _ID ) }
								brandImageAlt="The Australian Government coat of Arms"
								>
							</AUheaderBrand>
							<button id="mainmenu-toggle"
								className="mainmenu-toggle au-btn au-btn--tertiary au-btn--dark au-btn--block icon au-accordion--closed"
								aria-controls="mainmenu"
								aria-expanded="false"
								aria-selected="false"
								role="tab">Open menu</button>
						</div>
					</div>
				</div>
			</AUheader>
			<div
				aria-hidden="false"
				id="mainmenu"
				tabIndex="-1"
				className="mainmenu au-body au-body--dark au-accordion__body au-accordion--closed">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							{ mainmenu }
						</div>
					</div>
				</div>
			</div>
			<div id="overlay" className="overlay"></div>
			<div id="focustrap-bottom"></div>
		</div>
	</div>
);

Header.propTypes = {
	/**
	 * title: Design System
	 */
	title: PropTypes.node.isRequired,
	/**
	 * title_badge: Beta
	 */
	title_badge: PropTypes.node,
};

Header.defaultProps = {};

export default Header;
