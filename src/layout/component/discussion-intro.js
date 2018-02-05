import AUbutton from '../../_uikit/layout/buttons';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Discussion Intro component
 */
const DiscussionIntro = ({ communityLabel, issueLabel, _body }) => (
	<div className="discussionIntro discussionIntro__text">
		<div className="col-sm-6 col-md-7">
			{ _body }
		</div>
		<div className="col-sm-6 col-md-offset-1 col-md-4 discussionIntro__buttons">
			<AUbutton href={`https://community.service.gov.au/t/${ module }/`} as="secondary" block>{ communityLabel }</AUbutton>
			<AUbutton href="https://github.com/govau/uikit/issues/new" as="tertiary" block>{ issueLabel }</AUbutton>
		</div>
	</div>
);

DiscussionIntro.propTypes = {
	/**
	 * communityLabel: Community
	 */
	communityLabel: PropTypes.string,

	/**
	 * issueLabel: Report an issue
	 */
	issueLabel: PropTypes.string,
};

DiscussionIntro.defaultProps = {
	communityLabel: 'Community',
	issueLabel: 'Report an issue',
};

export default DiscussionIntro;
