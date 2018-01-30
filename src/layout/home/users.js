import AUheading from '../../_uikit/layout/headings';
import AUbutton from '../../_uikit/layout/buttons';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Promo component
 */
const Users = ({ title, btnURL, btntext, tiles, _relativeURL, _ID, _parseMD, _body }) => (
	<div className="users row">

		<div className="users__intro col-xs-12 col-md-4">
			<h2>{ title }</h2>
			{ _body }
			<p><AUbutton href={ btnURL } as='secondary'>{ btntext }</AUbutton></p>
		</div>

		<div  className="col-xs-12 col-md-7 col-md-offset-1">
			<ul className="users__list row">
				{
					tiles.map( ( tile, i ) => (
						<li className="user col-xs-6 col-md-4" key={ i }>
							<div className="user__wrapper">
								<img src={ tile.image } alt={ tile.alt } title={ tile.alt }/>
							</div>
						</li>
					))
				}
			</ul>
		</div>

	</div>
);


Users.propTypes = {

};

Users.defaultProps = {};

export default Users;
