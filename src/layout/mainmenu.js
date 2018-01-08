import AUlinkList from '../_uikit/layout/link-list';
import PropTypes from 'prop-types';
import YAML from 'yamljs';
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
	const menu = YAML.parse( Fs.readFileSync( menuPath, `utf8` ) );

	// and attach an active class to the item is one of the current parents
	const links = menu.links.map( link =>
		_pages[ _ID ]._url.startsWith( link.link )
			? { text: link.text, link: link.link, className: 'mainmenu--active' }
			: { text: link.text, link: _relativeURL( link.link, _ID ) }
	);

	return (
		<nav className="mainmenu au-body au-body--dark">
			<AUlinkList items={ links } inline />
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
