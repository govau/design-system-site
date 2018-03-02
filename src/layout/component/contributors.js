import Crypto              from 'crypto';
import React, { Fragment } from 'react';


/**
 * A list of contributors
 */
const Contributors = ({ contributors, _relativeURL, _ID }) => {

	const Shuffle = array => array
		.map( item => [ Math.random(), item ] )
		.sort( ( a, b ) => a[ 0 ] - b[ 0 ] )
		.map( item => item[ 1 ] )

	return (
		<ul className="component-status__definition__list component-status__definition__list--images js-more-wrapper">
			{
				Shuffle( contributors ).map( ( contributor, i ) => (
					<li className="component-status__definition__list__item" key={ i }>
						<a href={ contributor.url } className="avatar">
							<img
								src={`${ _relativeURL(`/assets/img/contributors/${ contributor.img }`, _ID ) }`}
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
