import PropTypes from 'prop-types';
import AUbutton from '../../_uikit/layout/buttons';
import React from 'react';


/**
 * The Intro component
 */
const Table = ({ _body }) => (
	<div>
		{ _body }
		<h2>In progress</h2>

		<div className="au-responsive-table">
			<table className="table__in-progress">
				<caption>A table of in progress components including their status, current version, and contributors.</caption>
				<tr>
					<th scope="col">Title</th>
					<th className="au-table-minwidth" scope="col">Status</th>
					<th className="au-table-minwidth" scope="col">Version</th>
					<th className="au-table-minwidth" scope="col">Contributors</th>
				</tr>
				<tr>
					<td><a href="#">Typeface: Discussion</a></td>
					<td>0.1.2</td>
					<td>0.1.2</td>
					<td>
						<div className="avatar_box">
							<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
						</div>
					</td>
				</tr>
				<tr>
					<td><a href="#">Typeface: Discussion</a></td>
					<td>0.1.2</td>
					<td>0.1.2</td>
					<td>
						<div className="avatar_box">
							<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
							<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
							<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
							<a href="#">20+</a>
						</div>
					</td>
				</tr>
				<tr>
					<td><a href="#">Typeface: Discussion</a></td>
					<td>0.1.2</td>
					<td>0.1.2</td>
					<td>
						<div className="avatar_box">
							<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
							<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
						</div>
					</td>
				</tr>
				<tr>
					<td><a href="#">Typeface: Discussion</a></td>
					<td>0.1.2</td>
					<td>0.1.2</td>
					<td>
						<div className="avatar_box">
							<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
							<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
							<a href="#">20+</a>
						</div>
					</td>
				</tr>
			</table>
		</div>

		<p>
			<AUbutton href="#" className="icon icon--community icon--dark"><span>Community</span></AUbutton>
		</p>

	</div>
);

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
