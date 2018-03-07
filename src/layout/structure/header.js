import AUheader            from '../../_uikit/layout/header';
import AUskipLink          from '../../_uikit/layout/skip-link';
import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * The header component
 */
const Header = ({ title, mainmenu, header_govau, _relativeURL, _ID, _pages, _body }) => (
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
		<div className={ `header${ _ID === 'index' ? ' header--home' : '' }` }>
			<div id="focustrap-top"></div>
			<AUheader dark>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							{
								_ID === 'index'
									? <p className="header__logo--coa">The Australian Government coat of Arms</p>
									: null
							}
							<div className="header__logo-wrapper">
								<a href={ _relativeURL( '/', _ID ) } className="header__logo">
									{
										_ID === 'index'
											? null
											: <p className="header__logo--coa">The Australian Government coat of Arms</p>
									}
									<h1 className="header__title au-display-md">{ title }</h1>
								</a>
								{ _body }
							</div>

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
				aria-hidden="true"
				id="mainmenu"
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
	 * title: Government Open Language for Design
	 */
	title: PropTypes.node.isRequired,
};

Header.defaultProps = {};

export default Header;
