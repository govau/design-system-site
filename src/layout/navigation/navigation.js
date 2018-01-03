import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Navigation component
 */
const Navigation = ({ menuClass, links, _relativeURL, _ID }) => (

	<nav className={ `nav${ menuClass ? ' ' + menuClass : '' }` }>
		<ul className="au-link-list">
			{
				links.map( ( link, i ) => (
					<li className={`nav__link nav__link--generated${
						link.link.endsWith( _ID ) || link.link === '/' && _ID === 'index'
							? ` nav__link--active`
							: ''
						}`} key={ i }>
						<a href={
							link.link.startsWith('http')
								? link.link
								: _relativeURL( link.link, _ID )
						}>
							{ link.name }
						</a>
					</li>
				))
			}
		</ul>
	</nav>
);

Navigation.propTypes = {
	/**
	 * links:
	 *  - name: home
	 *    link: /
	 *  - name: docs
	 *    link: /docs
	 *  - name: github  # the string 'github' will have the GitHub logo attached to it
	 *    link: https://github.com/cuttlebelle/cuttlebelle
	 */
	links: PropTypes.array.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
