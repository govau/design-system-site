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
const Header = ( props ) => {
	const HeadingTag = `h${ props.level }`;

	return (
		<header>
			<HeaderGovAU props={ props } />

			<div className={`uikit-header${
				props.hero
					? ' uikit-header--hero'
					: ''
			}${
				props.theme
					? ` ${ themes[ props.theme ] }`
					: ''
			}`} role="banner">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<HeadingTag className="uikit-header-heading">{ props.title }</HeadingTag>
							{
								props.subline
									&& <span className="uikit-header-subline">{ props.subline }</span>
							}
							{ props.children }
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
