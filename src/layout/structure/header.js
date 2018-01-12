import AUheader            from '../../_uikit/layout/header';
import AUskipLink          from '../../_uikit/layout/skip-link';
import React, { Fragment } from 'react';
import MainMenu            from '../mainmenu';
import PropTypes           from 'prop-types';


/**
 * The header component
 */
const Header = ({ title, _relativeURL, _ID, _pages }) => (
	<Fragment>
		<AUskipLink links={[
			{
				link: '#navigation',
				text: 'Skip to navigation',
			},
			{
				link: '#content',
				text: 'Skip to content',
			},
		]} />
		<div className="header au-body au-body--dark">
			<div id="focustrap-top"></div>
			<AUheader dark>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">

							<div className="header__logo">

								<img className="header__logo--coa" src={ _relativeURL( '/assets/img/coa.png', _ID ) } alt="The Australian Government coat of Arms"/>

								<a href={ _relativeURL( '/', _ID ) } className="header__logo--gold">
									<svg role="img" title="GOLD">
										<title>The Government Open Language for Design logo</title>
										<defs>
											<linearGradient id="GOLD-gradient" x1="100%" x2="0%" y1="0%" y2="100%">
												<stop offset="0%" stopColor="#FFE9B2" stopOpacity="1"/>
												<stop offset="100%" stopColor="#BD952D"/>
											</linearGradient>
										</defs>

										<use xlinkHref={ _relativeURL( '/assets/svg/map.svg#gold', _ID ) }/>
									</svg>

									<h1 className="header__logo--gold__title au-display-md">{ title }</h1>
								</a>
							</div>

							<button
								id="mainmenu-toggle"
								className="icon au-btn au-btn--tertiary au-btn--dark au-btn--block mainmenu-toggle js-au-accordion"
								aria-controls="navigation"
								aria-expanded="false"
								aria-selected="false"
								role="tab">Open menu</button>
						</div>
					</div>
				</div>
			</AUheader>
			<MainMenu _relativeURL={ _relativeURL } _ID={ _ID } _pages={ _pages } />
			<div id="focustrap-bottom"></div>
		</div>
		</Fragment>
);

Header.propTypes = {
	/**
	 * title: Government Open Language for Design
	 */
	title: PropTypes.node.isRequired,
};

Header.defaultProps = {};

export default Header;
