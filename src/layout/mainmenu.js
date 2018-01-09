import { ParseYaml } from 'cuttlebelle/dist/parse.js';
import AUlinkList from '../_uikit/layout/link-list';
import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The Navigation component
 *
 * @disable-docs
 */
const Navigation = ({ _relativeURL, _ID, _pages }) => {
	// let’s get our main menu yaml file
	const menuPath = Path.normalize(`${ __dirname }/../../content/_shared/mainmenu.yml`);
	const menu = ParseYaml( Fs.readFileSync( menuPath, `utf8` ) );

	const CreateLink = ( link, right = false ) => {

		const linkClasses = `${ right ? ' mainmenu--right' : '' }` +
			`${ link.text == 'Github' ? ' icon icon--github' : '' }` +
			`${ link.text == 'Download' ? ' icon icon--download' : '' }`;

		return _pages[ _ID ]._url === link.link ||
			_pages[ _ID ]._url.startsWith( link.link ) && _pages[ _ID ]._url.split('/').length > link.link.split('/').length
			? {
					text: link.text,
					link: link.link,
					className: `mainmenu--active` + linkClasses
				}
			: {
					text: link.text,
					link: _relativeURL( link.link, _ID ),
					className: linkClasses
				}
	};

	const linksLeft = menu.links.left.map( link => CreateLink( link ) );
	const linksRight = menu.links.right.map( link => CreateLink( link, true ) );

	return (
		<nav className="mainmenu au-body au-body--dark">
			<AUlinkList items={ linksLeft } inline />
			<AUlinkList className="au-link-list au-link-list--inline main-menu--right" items={ linksRight } inline />
		</nav>
	);
};

Navigation.propTypes = {
	_relativeURL: PropTypes.func.isRequired,
	_ID: PropTypes.string.isRequired,
	_pages: PropTypes.object.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
