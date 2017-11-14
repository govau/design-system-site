import PropTypes from 'prop-types';
import React from 'react';

import HeaderGovAU from './header-govau';


/**
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: 'uikit-header--light',
	dark: 'uikit-header--dark',
};


/**
 * The header component
 *
 * Use for: thing thing thing
 */
const Header = ({
	_ID,
	_relativeURL,
	level,
	hero,
	theme,
	title,
	subline,
	children
}) => {
	const HeadingTag = `h${ level }`;

	return (
		<header>
			<HeaderGovAU _ID={ _ID } _relativeURL={ _relativeURL } />

			<div className={`uikit-header${
				hero
					? ' uikit-header--hero'
					: ''
			}${
				theme
					? ` ${ themes[ theme ] }`
					: ''
			}`} role="banner">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<HeadingTag className="uikit-header-heading">{ title }</HeadingTag>
							{
								subline
									&& <span className="uikit-header-subline">{ subline }</span>
							}
							{ children }
						</div>
					</div>
				</div>
			</div>

		</header>
	);
};

Header.propTypes = {
	/**
	 * title: Hello world
	 */
	title: PropTypes.node.isRequired,

	/**
	 * level: 2
	 */
	level: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6 ]).isRequired,

	/**
	 * subline: Potato and tomato having the best time
	 */
	subline: PropTypes.node,

	/**
	 * hero: true
	 */
	hero: PropTypes.bool,

	/**
	 * theme: dark
	 */
	theme: PropTypes.oneOf([ 'light', 'dark' ]),

	/**
	 * children: (text)(1)
	 */
	children: PropTypes.node,
};


Header.defaultProps = {
	level: 1,
};


export default Header;
