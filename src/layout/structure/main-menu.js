import AUmainNav, { AUmainNavContent } from '../../_auds/layout/main-nav';
import { CreateLink }      from '../navigation';
import AUlinkList                      from '../../_auds/layout/link-list';
import React, { Fragment }             from 'react';
import PropTypes                       from 'prop-types';


const CreateMainMenuLink = ( link, _relativeURL, _ID, _pages ) => {

	const linkClasses = `${ link.text == 'GitHub' ? 'icon icon--dark icon--github icon--action' : '' }` +
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
		active: active || _isActiveTrail,
	}
};


/**
 * The MainMenu component
 */
const MainMenu = ({ navigation, _relativeURL, _ID, _pages }) => {

	return (
		<AUmainNav dark id="mainmenu">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent items={ navigation.sections[ 0 ].items.map(
							item => CreateMainMenuLink( item, _relativeURL, _ID, _pages )
						) }>
							<AUlinkList className="au-main-nav--submenu" items={ navigation.sections[ 1 ].items.map(
								item => CreateLink( item, _relativeURL, _ID, _pages )
							) } />
						</AUmainNavContent>
					</div>
				</div>
			</div>
		</AUmainNav>
	);
};


MainMenu.defaultProps = {};

export default MainMenu;
