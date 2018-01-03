import PropTypes from 'prop-types';
import React     from 'react';

import AUheader  from '../../_uikit/layout/header';

/**
 * The header component
 *
 * Use for: thing thing thing
 */
const Header = ({ navigation, title, subline, level, dark, alt, hero, _body, _relativeURL, _ID }) => {

	const HeadingTag = `h${ level }`;

	return (
		<AUheader className={
			`au-header ${ hero ? ' au-header--hero' : '' }` +
			`${ dark ? ' au-header--dark' : '' }` +
			`${ alt ? ' au-header--alt' : '' }`
		}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<a href="/" className="header__logo">
							<svg className="gold-logo" role="img" title="GOLD">
								<title>The Government Open Language for Design logo</title>
								<defs>
									<linearGradient id="GOLD-gradient" x1="100%" x2="0%" y1="0%" y2="100%">
										<stop offset="0%" stopColor="#FFE9B2" stopOpacity="1"/>
										<stop offset="100%" stopColor="#BD952D"/>
									</linearGradient>
								</defs>
								<use xlinkHref={ _relativeURL( '/src/assets/svg/map.svg#gold', _ID ) }/>
							</svg>
							<HeadingTag className="header__title au-display-lg">{ title }</HeadingTag>
						</a>
						<div className={ `content au-body ${ dark ? ' au-body--dark' : '' }${ alt ? ' au-body--alt' : '' }` }>
							{ _body }
							{ navigation }
						</div>
					</div>
				</div>
			</div>
		</AUheader>
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
	 * dark: false
	 */
	dark: PropTypes.bool,

	/**
	 * alt: true
	 */
	alt: PropTypes.bool,

	/**
	 * _body: (text)(1)
	 */
	_body: PropTypes.node,
};


Header.defaultProps = {
	level: 1,
};


export default Header;
