import AUlinkList from '../../_uikit/layout/link-list';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 */
const ListColumns = ({ lists, _body }) => (
	<Fragment>

		{ _body }

		<div className="row listcolumns">
			{
				lists.map( ( lists, i ) => (
					<div className="col-sm-6 col-md-3" key={ i }>
						<h3>{ lists.heading }</h3>
						<AUlinkList items={ lists.links }/>
					</div>
				))
			}
		</div>

	</Fragment>
);

ListColumns.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,

	/**
	 * button:
	 *   link: #
	 *   text: Button text
	 *   type: secondary
	 *   icon: github
	 */
	button: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string,
		type: PropTypes.string,
		icon: PropTypes.string,
	})
};

ListColumns.defaultProps = {};

export default ListColumns;
