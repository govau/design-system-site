import PropTypes from 'prop-types';
import React from 'react';
import AUlinkList from '../../_auds/layout/link-list';


/**
 * The sidebar component
 */
const IntroSidebar = ({ links, title, _relativeURL }) => (
	<div className="download-intro__sidebar col-xs-12  col-sm-4  col-md-offset-1 col-md-3">
		<h2> {title} </h2>
		<AUlinkList items={
			links.map( link => ({
				link: _relativeURL( link.download ),
				text: link.title,
				className: link.icon ? ` icon icon--${link.icon} ` : ''
			}))
		} />
	</div>
);

IntroSidebar.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			download: PropTypes.string.isRequired,
			icon: PropTypes.string,
		})
	).isRequired,
	title: PropTypes.string,
};

IntroSidebar.defaultProps = {};

export default IntroSidebar;
