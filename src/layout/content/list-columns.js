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
					<div className="col-xs-12 col-sm-6 col-md-3" key={ i }>
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
	 * lists:
   *  - heading: Help with design
   *    links:
   *      - text: Request a component
   *        link: /
   *      - text: Improve documentation
   *        link: /
   *      - text: -! Test longer list floating !-
   *        link: /
   *  - heading: Help with planning
   *    links:
   *      - text: Community discussions
   *        link: /
   *      - text: Roadmap discussions
   *        link: /
   *  - heading: Help with code
   *    links:
   *      - text: Code contribution guide
   *        link: /
   *        className: icon icon--github
   *      - text: Report an issue
   *        link: /
   *        className: icon icon--github
   *  - heading: Help with usability
   *    links:
   *      - text: Component discussions
   *        link: /
   *      - text: Provide research findings
   *        link: /
	 */
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			heading: PropTypes.string,
			links: PropTypes.arrayOf(
				PropTypes.shape({
					text: PropTypes.string,
					link: PropTypes.string,
					className: PropTypes.string
				})
			)
		})
	)
};

ListColumns.defaultProps = {};

export default ListColumns;
