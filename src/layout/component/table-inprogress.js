import AUbutton            from '../../_uikit/layout/buttons';
import Table               from '../table';
import GetData             from '../getData';
import ContributorStatus   from './contributor-status';

import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * The table for in progress components
 */
const TableInProgress = ({ title, caption, btntext, btnURL, btnIcon, tableTH, _parseYaml }) => {

	const components = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === 'inprogress',
		yaml: _parseYaml,
	});

	const body = components.map( component => {

		return [
			{
				text: <a href={ `/components/${ component.ID }` }>{ component.name }</a>,
			},
			{
				text: ContributorStatus( component.status.usable )
			},
			{
				text: ContributorStatus( component.status.consistent )
			},
			{
				text: ContributorStatus( component.status.versatile )
			},
			{
				text: ContributorStatus( component.status.coded )
			},
			{
				text: ContributorStatus( component.status.tested )
			},
			{
				text: ContributorStatus( component.status.considered )
			},
		];
	}

);

	return (
		<Fragment>
			{
				components.length
					?
						<Fragment>
							<h2>{ title }</h2>

							<Table
								className="component-table"
								caption={ caption }
								header={ tableTH }
								body={ body }
								smallTable
								responsive
								striped
								firstColTH
							/>

							<p>
								<AUbutton link={ btnURL } className={ btnIcon && `icon icon--${ btnIcon } icon--dark`}>
									{ btntext }
								</AUbutton>
							</p>
						</Fragment>
					: ''
			}
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
	 *     tightcol: true
	 */
	tableTH: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			link: PropTypes.string,
			className: PropTypes.string,
		})
	).isRequired
};

export default TableInProgress;
