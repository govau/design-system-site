import AUlinkList          from '../_uikit/layout/link-list';
import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


export const CreateLink = ( link, _relativeURL, _ID, _pages ) => {

	if( Object.keys( link ).length > 0 ) {

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
			link: link.link.startsWith('http') ? link.link : _relativeURL( link.link, _ID ),
			className: linkClasses,
			li: {
				className: `${ active ? 'mainmenu--active' : ''  }${ _isActiveTrail ? ' mainmenu--active-trail' : ''  }`,
			}
		}
	}

	// I was getting link.text is undefined, this seems to help
	else {
		return null;
	}
};

/**
 * The Navigation component
 */
const Navigation = ({ navigation, uniqueClass, _relativeURL, _ID, _pages }) => {


	const CreateNavigation = ( section, inline ) => {

		const navItems = [];

		section.items.map( item => {
			navItems.push( CreateLink( item, _relativeURL, _ID, _pages ) );
		});

		return <AUlinkList items={ navItems } inline={ inline } className={ section.alignment === 'right' ? 'mainmenu--right' : '' } />;
	}

	const navMarkup = [];

	navigation.sections.map( section => {
		navMarkup.push( CreateNavigation( section, navigation.inline ) );
	});

	return (
		<nav className={
			`navigation`  +
			`${ uniqueClass ? ` ${ uniqueClass }` : '' }` +
			`${ navigation.theme === 'dark' ? ' navigation--dark ' : '' }`
		}>
			{
				navMarkup.map( ( nav, i ) => (
					<Fragment key={ i }>{ nav }</Fragment>
				))
			}
		</nav>
	);
};


Navigation.propTypes = {
	/**
	 * navigation:
	 *   inline: true
	 *   sections:
	 *     - alignment: left
	 *       items:
	 *         - text: Overview
	 *           link: /components/buttons
	 *         - text: Rationale
	 *           link: /components/buttons/rationale
	 *         - text: Accessibility
	 *           link: /components/buttons/accessibility
	 *         - text: Discussion
	 *           link: /components/buttons/discussion
	 *     - alignment: right
	 *       items:
	 *         - text: Live demo
	 *           link: /demo
	 */
	navigation: PropTypes.shape({
		dark: PropTypes.boolean,
		left: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string,
				link: PropTypes.string,
			})
		),
		right: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string,
				link: PropTypes.string,
			})
		),
	}).isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
