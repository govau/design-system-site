import AUheader  from '../../_uikit/layout/header';
import MainMenu  from '../mainmenu';
import PropTypes from 'prop-types';
import React     from 'react';


/**
 * The header component
 */
const Header = ({ title, _relativeURL, _ID, _pages }) => (
	<AUheader dark>
		<div className="header container">
			<div className="row">
				<div className="col-md-12">

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

						<h1 className="header__logo__title au-display-lg">{ title }</h1>
					</a>

					<MainMenu _relativeURL={ _relativeURL } _ID={ _ID } _pages={ _pages } />
				</div>
			</div>
		</div>
	</AUheader>
);

Header.propTypes = {
	/**
	 * title: Government Open Language for Design
	 */
	title: PropTypes.node.isRequired,
};

Header.defaultProps = {};

export default Header;
