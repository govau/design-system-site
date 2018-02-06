import Crypto                                   from 'crypto';
import React, { Fragment }                      from 'react';


/**
 * A list of contributors
 */
const Contributors = ({ contributors }) => (

	<ul className="component-status__definition__list component-status__definition__list--images js-more-wrapper">
		{
			Object.keys( contributors ).map( ( user, i ) => {
				const contributor = contributors[ user ];

				return (
					<li className="component-status__definition__list__item" key={ i }>
						<a href={ contributor.url } className="avatar">
							<img
								src={
									contributor.email
									&&
									`https://www.gravatar.com/avatar/${
										Crypto.createHash('md5').update( contributor.email ).digest('hex')
									}`
								}
								alt={`${ contributor.name } avatar picture`}
								title={ contributor.name }
							/>
						</a>
					</li>
				);
			})
		}
	</ul>
);


export default Contributors;
