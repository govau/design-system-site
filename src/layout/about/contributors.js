import Crypto              from 'crypto';
import React, { Fragment } from 'react';


/**
 * Displays a list of contributors for the about page in random (shuffle) order,
 */
const Contributors = ({ contributors, _relativeURL }) => {

	const Shuffle = array => array
		.map( item => [ Math.random(), item ] )
		.sort( ( a, b ) => a[ 0 ] - b[ 0 ] )
		.map( item => item[ 1 ] )

	return (
		<ul className="component-status__definition__list component-status__definition__list--images">
			{
				Shuffle( contributors ).map( ( contributor, i ) => (
					<li className={ `component-status__definition__list__item${ i > 100 ? ' component-status__definition__list__item--gt5' : '' }` } key={ i }>
						<a href={ contributor.url } className="about-avatar">
							<img
								src={`${ _relativeURL(`/assets/img/contributors/${ contributor.img }`) }`}
								alt={`${ contributor.name } avatar picture`}
								title={ contributor.name }
							/>
						</a>
					</li>
				))
			}
		</ul>
	);
};

export default Contributors;
