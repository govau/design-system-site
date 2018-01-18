import AUlinkList from '../_uikit/layout/link-list';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Navigation component
 */
const Navigation = ({ navigation, _relativeURL, _ID, _pages }) => {

	const CreateLink = ( link ) => {

		const linkClasses = `${ link.text == 'Github' ? 'icon icon--dark icon--github icon--action' : '' }` +
			`${ link.text == 'Download' ? 'icon icon--dark icon--download icon--action' : '' }` +
			`${ link.text == 'Live demo' ? 'icon icon--right icon--demo icon--action' : '' }`;

		const active = _pages[ _ID ]._url === link.link;

		const _isActiveTrail =
			_pages[ _ID ]._url.startsWith( link.link ) &&
			link.link !== '/' &&
			_pages[ _ID ]._url.split('/').length > link.link.split('/').length;

		return {
			text: link.text,
			link: _relativeURL( link.link, _ID ),
			className: linkClasses,
			li: {
				className: `${ active ? 'mainmenu--active' : ''  }${ _isActiveTrail ? ' mainmenu--active-trail' : ''  }`,
			}
		}
	};

	const linksLeft = navigation.left ? navigation.left.map( link => CreateLink( link ) ) : false;
	const linksRight = navigation.right ? navigation.right.map( link => CreateLink( link, true ) ) : false;

	return (
		<Fragment>
			<nav className={ `navigation ${ navigation.dark ? 'navigation--dark ' : '' }` }>
				{ linksLeft !== false ? <AUlinkList items={ linksLeft } inline /> : null }
				{ linksRight !== false ? <AUlinkList inline className="mainmenu--right" items={ linksRight } inline /> : null }
			</nav>
		</Fragment>
	);
};

Navigation.propTypes = {
	/**
	 * navigation:
	 *  dark: true
	 *  left:
	 *   - text: Privacy policy
	 *     link: /
	 *   - text: Need help?
	 *     link: /
	 *  right:
   *   - text: Github
   *     link: https://github.com/govau/uikit/
   *   - text: Download
   *     link: /furnace
	 */
	navigation: PropTypes.shape({
		dark: PropTypes.boolean,
		left: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
				link: PropTypes.string.isRequired,
			})
		),
		right: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
				link: PropTypes.string.isRequired,
			})
		),
	}).isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
