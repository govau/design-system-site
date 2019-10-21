import AUlinkList from '../../_auds/layout/link-list';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The CommunityLinks component
 */
const CommunityLinks = ({ items }) => (
	<div className="community-links au-body">
		<div className="container-fluid">
			<div className="row">
			{
				items.map( ( item, i ) => {

					return (
						<div className="col-md-4 col-sm-6" key={ i }>
							<img src={item.imageUrl}></img>
							<span className="community-links--title"><strong>{item.title}</strong></span>
							<a href={item.url} className={`icon icon--${item.icon} icon--action`}>{item.urlText}</a>
						</div>
					)
				})
			}
			</div>
		</div>
	</div>
);

CommunityLinks.propTypes = {
	items: PropTypes.arrayOf(Object)
};

CommunityLinks.defaultProps = {

};

export default CommunityLinks;
