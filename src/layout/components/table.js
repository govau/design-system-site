import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 */
const Table = ({ _body }) => (
	<div>
	{ _body }

	<div className="au-responsive-table">
		<table>
			<tr>
				<th>Title</th>
				<th className="au-table-minwidth">Status</th>
				<th className="au-table-minwidth">Version</th>
				<th className="au-table-minwidth">Contributors</th>
			</tr>
			<tr>
				<td><a href="#">Typeface: Discussion</a></td>
				<td>0.1.2</td>
				<td>0.1.2</td>
				<td>
					<div className="avitar_box">
						<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
					</div>
				</td>
			</tr>
			<tr>
				<td><a href="#">Typeface: Discussion</a></td>
				<td>0.1.2</td>
				<td>0.1.2</td>
				<td>
					<div className="avitar_box">
						<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
						<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
						<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
						<a href="#">20+</a>
					</div>
				</td>
			</tr>
			<tr>
				<td><a href="#">Typeface: Discussion</a></td>
				<td>0.1.2</td>
				<td>0.1.2</td>
				<td>
					<div className="avitar_box">
						<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
						<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
					</div>
				</td>
			</tr>
			<tr>
				<td><a href="#">Typeface: Discussion</a></td>
				<td>0.1.2</td>
				<td>0.1.2</td>
				<td>
					<div className="avitar_box">
						<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
						<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
						<a href="#">20+</a>
					</div>
				</td>
			</tr>
		</table>

	</div>
	</div>
);

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
