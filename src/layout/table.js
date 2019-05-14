import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import  AUtable, {AUtableResponsiveWrapper, AUtableCaption, AUtableCell, AUtableHead, AUtableHeader, AUtableBody, AUtableRow} from '../_auds/layout/table';


/**
 * The Table component
 *
 * @disable-docs
 */
const Table = ({ caption, headers, body, className, striped, firstColTH }) => (
	<AUtableResponsiveWrapper>
		<table className={`au-table ${ striped ? 'au-table--striped ' : ' '} ${className}`}>
			<AUtableCaption tableCaption={caption} />
			{
				<AUtableRow>
					<AUtableHead>
						{
							headers.map( (header, i) => (
							<AUtableHeader title={header.text} />
						))
						}
					</AUtableHead>
				</AUtableRow>
			}

			<tbody>
				{

					<AUtableBody>
					{body.map( (row, i) => (
						<AUtableRow>
							{row.map((cell, j ) => (
								firstColTH && j === 0 ?
								<AUtableHeader title={cell.text} scope="row" /> :
								<AUtableCell data={cell.text} />
							))}
						</AUtableRow>
					))}
					</AUtableBody>
				}
			</tbody>
		</table>
	</AUtableResponsiveWrapper>
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

};

export default Table;
