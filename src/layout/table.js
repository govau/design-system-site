import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The Table component
 *
 * @disable-docs
 */
const Table = ({ caption, header, body, footer, className }) => (
	<div className={`au-responsive-table ${ className }`}>
		<table>
			<caption className="au-responsive-table__caption">{ caption }</caption>
			{
				header &&
					<thead>
						<tr className="au-responsive-table__header">
							{
								header.map( ( th, i ) => (
									<th key={ i } scope="col" className={ th.className }>
										{ th.text }
									</th>
								))
							}
						</tr>
					</thead>
			}

			<tbody>
				{
					body.map( ( bodyTD, i ) => (
						<tr key={ i } className="au-responsive-table__body">
							{
								bodyTD.map( ( td, j ) => (
									<td key={ j } scope="col" className={ td.className }>
										{ td.text }
									</td>
								))
							}
						</tr>
					))
				}
			</tbody>

			{
				footer &&
					<tfoot>
						<tr className="au-responsive-table__footer">
							{
								footer.map( ( td, i ) => (
									<td key={ i } scope="col" className={ td.className }>
										{ td.text }
									</td>
								))
							}
						</tr>
					</tfoot>
			}
		</table>
	</div>
);

Table.propTypes = {
	/**
	 * caption: A table of in progress components including their status, current version, and contributors.
	 */
	caption: PropTypes.string.isRequired,

	/**
	 * header:
	 *   - text: Title
	 *     className: optional
	 *   - text: Status
	 */
	header: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			className: PropTypes.string,
		})
	),

	/**
	 * body:
	 *   -
	 *     - text: Row1 Col1
	 *     - text: Row1 Col2
	 *     - text: Row1 Col3
	 *       className: optional
	 *   -
	 *     - text: Row2 Col1
	 *     - text: Row2 Col2
	 *       className: optional
	 *     - text: Row2 Col3
	 */
	body: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.node.isRequired,
				className: PropTypes.string,
			})
		)
	).isRequired,

	/**
	 * footer:
	 *   - text: Title
	 *     className: optional
	 *   - text: Status
	 */
	footer: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			className: PropTypes.string,
		})
	),
};

export default Table;
