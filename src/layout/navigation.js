import AUlinkList from '../_uikit/layout/link-list';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The Navigation component
 *
 * @disable-docs
 */
const Navigation = ({ id, navigation, _relativeURL, _ID, _pages }) => {

	const CreateLink = ( link ) => {

		const linkClasses = `${ link.text == 'Github' ? 'icon icon--dark icon--github icon--action' : '' }` +
			`${ link.text == 'Download' ? 'icon icon--dark icon--download icon--action' : '' }`;

		return _pages[ _ID ]._url === link.link ||
			_pages[ _ID ]._url.startsWith( link.link ) && _pages[ _ID ]._url.split('/').length > link.link.split('/').length
			? {
					text: link.text,
					link: link.link,
					className: `mainmenu--active`,
					// linkClass: linkClasses || ''
				}
			: {
					text: link.text,
					link: _relativeURL( link.link, _ID ),
					// linkClass: linkClasses || ''
				}
	};

	const linksLeft = navigation.left.map( link => CreateLink( link ) );
	const linksRight = navigation.right.map( link => CreateLink( link, true ) );

	return (
		<Fragment>
			<nav id={ id } className="mainmenu au-accordion__body au-accordion--closed" aria-hidden="true" >
				<div className="container-fluid">
					<AUlinkList items={ linksLeft } inline />
					<AUlinkList inline className="mainmenu--right" items={ linksRight } inline />
				</div>
			</nav>
			<div id="overlay" className="overlay"></div>
		</Fragment>
	);
};

Navigation.propTypes = {
	_relativeURL: PropTypes.func.isRequired,
	_ID: PropTypes.string.isRequired,
	_pages: PropTypes.object.isRequired,
	id: PropTypes.string
};

Navigation.defaultProps = {};

export default Navigation;
