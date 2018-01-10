import AUheader  from '../../_uikit/layout/header';
import MainMenu  from '../mainmenu';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The header component
 */
const Header = ({ title, _relativeURL, _ID, _pages }) => (
	<div className="header">
		<AUheader dark>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">

						<img className="header__coa" src={ _relativeURL( '/assets/img/coa.png', _ID ) }/>

						<a href={ _relativeURL( '/', _ID ) } className="header__logo">
							<svg className="header__logo__gold" role="img" title="GOLD">
								<title>The Government Open Language for Design logo</title>
								<defs>
									<linearGradient id="GOLD-gradient" x1="100%" x2="0%" y1="0%" y2="100%">
										<stop offset="0%" stopColor="#FFE9B2" stopOpacity="1"/>
										<stop offset="100%" stopColor="#BD952D"/>
									</linearGradient>
								</defs>

								<use xlinkHref={ _relativeURL( '/assets/svg/map.svg#gold', _ID ) }/>
							</svg>

							<h1 className="header__logo__title au-display-md">{ title }</h1>
						</a>
						<span className="icon">
							<button id="mainmenu-toggle" className="mainmenu-toggle au-btn au-btn--tertiary au-btn--block au-btn--dark">Open menu</button>
						</span>
					</div>
				</div>
			</div>
		</AUheader>
		<MainMenu _relativeURL={ _relativeURL } _ID={ _ID } _pages={ _pages } />
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
