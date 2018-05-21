import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Table component
 *
 * @disable-docs
 */
const Table = ({ caption, header, body, footer, className, responsive, smallTable, striped }) => (
	<div className={`au-table au-body ${ smallTable ? 'au-table--small ' : ''}${ responsive ? 'au-table--responsive ' : ''}${ striped ? 'au-table--striped ' : ''}${ className }`}>
		<table>
			<caption className="au-table__caption">{ caption }</caption>
			{
				header &&
					<thead>
						<tr className="au-table__header">
							{
								header.map( ( th, i ) => (
									<th key={ i } scope="col" className={ th.className }>
										{
											th.link
												? th.link.startsWith('http://') || th.link.startsWith('https://')
													? <a href={ th.link } rel="external">{ th.text }</a>
													: <a href={ th.link }>{ th.text }</a>
												: th.text
										}
									</th>
								))
							}
						</tr>
					</thead>
			}

			<tbody>
				{
					body.map( ( bodyTD, i ) => (
						<tr key={ i } className="au-table__body">
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
						<tr className="au-table__footer">
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
	 * smallTitle: If the titles are small
	 */
	smallTable: PropTypes.bool,

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
