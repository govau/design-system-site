import PropTypes from 'prop-types';
import React     from 'react';

import AUheader  from '../../_uikit/layout/header';
import { Logo }  from './icons';


/**
 * The header component
 *
 * Use for: thing thing thing
 */
const Header = ({ title, subline, level, dark, alt, hero, _body }) => {

	const HeadingTag = `h${ level }`;

	return (
		<AUheader className={
			`au-header au-body ${ hero ? ' au-header--hero' : '' }` +
			`${ dark ? ' au-header--dark au-body--dark' : '' }` +
			`${ alt ? ' au-header--alt  au-body--alt' : '' }`
		}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<a href="/" className="header__logo">
							<Logo title="GOLD logo" description="The Government Open Language for Design logo" />
							<HeadingTag className="header__title au-display-lg">{ title }</HeadingTag>
						</a>
						<div className="content">
							{ _body }
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
