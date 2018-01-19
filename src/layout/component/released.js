import { AUcardList } from '../card';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The component released listing of cards
 */
const ComponentReleased = ({ cardList, _body }) => (
	<Fragment>
		{ _body }
		<div className="row">
			<AUcardList
				shadow={ cardList.shadow }
				items={ cardList.cards }
				columnSize={ cardList.columns }
				matchHeight={ cardList.matchHeight }
				centered={ cardList.centered }
				/>
		</div>
	</Fragment>
);


ComponentReleased.propTypes = {
	components: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.string,
			link: PropTypes.string.isRequired,
			module: PropTypes.string.isRequired,
			version: PropTypes.string.isRequired,
		})
	).isRequired
};

export default ComponentReleased;


// <ul className="au-card-list au-card-list--matchheight au-card-list--components">
// 	{
// 		components.map( ( component, i ) => (
// 			<li key={ i } className="col-xs-6 col-sm-3">
// 				<a href={ component.link } className="au-card au-card--shadow">
// 					<div className="au-card__fullwidth">
// 						<img src={ component.image } alt="" className="au-responsive-media-img"/>
// 					</div>
// 					<h3 className="au-card__title au-card__link">{ component.module }</h3>
// 					<p className="card__version">{ component.version }</p>
// 				</a>
// 			</li>
// 		))
// 	}
// </ul>


// <AUcard shadow centered items={[
// 	{
// 		type: 'image',
// 		image: 'http://via.placeholder.com/300x300/f5f5f5/636363',
// 		fullwidth: true,
// 		description: 'A 300x300 image'
// 	},
// 	{
// 		type: 'heading',
// 		size: '5',
// 		text: 'Hello world'
// 	},
// 	{
// 		type: 'content',
// 		text: 'Hello world'
// 	},
// 	{
// 		type: 'image',
// 		link: '#',
// 		image: 'http://via.placeholder.com/300x300/f5f5f5/636363'
// 	},
// 	{
// 		type: 'raw',
// 		html: <p>Some raw html</p>
// 	},
// 	{
// 		type: 'line'
// 	},
// 	{
// 		type: 'cta',
// 		link: '#',
// 		text: 'Read more'
// 	}
// ]} />
// 	<AUcard link="#" shadow centered items={[
// 		{
// 			type: 'image',
// 			image: 'http://via.placeholder.com/300x300/f5f5f5/636363',
// 			fullwidth: true,
// 			description: 'A 300x300 image'
// 		},
// 		{
// 			type: 'heading',
// 			size: '5',
// 			text: 'Hello world'
// 		},
// 		{
// 			type: 'content',
// 			text: 'Hello world'
// 		},
// 		{
// 			type: 'content',
// 			text: 'Hello world'
// 		},
// 		{
// 			type: 'image',
// 			link: '#',
// 			image: 'http://via.placeholder.com/300x300/f5f5f5/636363'
// 		},
// 		{
// 			type: 'raw',
// 			html: <p>Some raw html</p>
// 		},
// 		{
// 			type: 'line'
// 		},
// 		{
// 			type: 'cta',
// 			link: '#',
// 			text: 'Read more'
// 		}
// 	]} />
