import AUlinkList from '../../_uikit/layout/link-list';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The FooterList component
 */
const FooterList = ({ headline, links }) => (
	<Fragment>
		<h3>{ headline }</h3>
		<AUlinkList items={ links }/>
	</Fragment>
);

FooterList.propTypes = {
	/**
	 * headline: Feedback
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * links:
	 *   - text: Community discussion
	 *     link: /community
	 *     className: community
	 *   - text: Community discussion
	 *     link: /community
	 *     className: community
	 */
	links: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
			className: PropTypes.string,
		})
	).isRequired,
};

FooterList.defaultProps = {};

export default FooterList;
