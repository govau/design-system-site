import AUbutton            from '../../_uikit/layout/buttons';
import GetData             from './../../helper/getData';
import Table               from './../table';
import ContributorStatus   from './contributor-status';

import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';



/**
 * The table for suggested components
 */
const TableSuggestions = ({ title, caption, btntext, btnURL, btnIcon, tableTH, _parseYaml }) => {

	const components = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === 'suggestion',
		yaml: _parseYaml,
	});

	const body = components.map( component => {
			return [
				{
					text: <a href={ `/components/${ component.ID }` }>{ component.name }</a>,
				},
				{
					text: ContributorStatus( component.status.useful )
				},
				{
					text: ContributorStatus( component.status.unique )
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

TableSuggestions.propTypes = {
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
};

export default TableSuggestions;
