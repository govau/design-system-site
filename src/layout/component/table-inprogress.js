import AUbutton from '../../_uikit/layout/buttons';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Table from './../table';


/**
 * The table for in progress components
 */
const TableInProgress = ({ title, caption, btntext, btnURL, btnIcon, tableTH, components }) => {
	const body = components.map( component => {
			return [
				{
					text: <a href={`https://www.npmjs.com/package/@gov.au/${ component.module }/`}>{ component.module }</a>,
				},
				{
					text: `tbg`,
				},
				{
					text: `tbg`,
				},
				{
					text: `tbg`,
				},
			];
		}
	);

	return (
		<Fragment>
			<h2>{ title }</h2>

			<Table
				className="component-table"
				caption={ caption }
				header={ tableTH }
				body={ body }
			/>

			<p>
				<AUbutton href={ btnURL } className={ btnIcon && `icon icon--${ btnIcon } icon--dark`}>
					{ btntext }
				</AUbutton>
			</p>

		</Fragment>
	);
}

TableInProgress.propTypes = {
	/**
	 * title: In progress
	 */
	title: PropTypes.string.isRequired,

	/**
	 * caption: A table of in progress components including their status, current version, and contributors.
	 */
	caption: PropTypes.string.isRequired,

	/**
	 * btntext: Community
	 */
	btntext: PropTypes.string.isRequired,

	/**
	 * btnURL: /community
	 */
	btnURL: PropTypes.string.isRequired,

	/**
	 * btnIcon: community
	 */
	btnIcon: PropTypes.string,

	/**
	 * tableTH:
	 *   - text: Title
	 *   - text: Status
	 *     tightcol: true
	 */
	tableTH: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			className: PropTypes.string,
		})
	).isRequired,

	/**
	 * components:
	 *   - module: core
	 *   - module: buttons
	 *   - module: accordion
	 */
	components: PropTypes.arrayOf(
		PropTypes.shape({
			module: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default TableInProgress;
