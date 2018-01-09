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
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

FooterList.defaultProps = {};

export default FooterList;
