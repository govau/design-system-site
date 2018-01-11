import PropTypes from 'prop-types';
import AUbutton from '../../_uikit/layout/buttons';
import React from 'react';


/**
 * The Intro component
 */
const Table = ({ title, btntext, btnURL, btnIcon, tableTH, components }) => (
	<div>
		<h2>{ title }</h2>

		<div className="au-responsive-table">
			<table className="table__in-progress">
				<caption>A table of in progress components including their status, current version, and contributors.</caption>
				<tr>
					{
						tableTH.map( ( tableTH, i ) => (
							<th scope="col" key={ i }
								className={
									tableTH.tightcol
										? 'au-table-minwidth'
										: ''
								} >
								{ tableTH.text }
							</th>
						))
					}
				</tr>

				{
					components.map( ( components, i ) => (
						<tr key={ i }>
							<td><a href={ components.url }>{ components.title }</a></td>
							<td>{ components.status }</td>
							<td>{ components.version }</td>
							<td>
								{ /** NOTE: This will need to be a shared component **/ }
								<div className="avatar_box">
									<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
									<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
									<a href="#" className="avatar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
									<a href="#">20+</a>
								</div>
							</td>
						</tr>
					))
				}

			</table>
		</div>

		<p>
			<AUbutton href={ btnURL } className={ 'icon ' + btnIcon + ' icon--dark'}><span>{ btntext }</span></AUbutton>
		</p>

	</div>
);

Table.propTypes = {
	/**
	* title: In progress
	* btntext: Community
	* btnURL: /community
	* btnIcon: icon--community
	* tableTH:
	*   - text: Title
	*   - text: Status
	*     tightcol: true
	* components:
	*   - title: MyComponentTitle
	*     url: /MyComponentTitle2
	*     status: XYZ
	*     version: 0.1.2
	*   - title: MyComponentTitle
	*     url: /MyComponentTitle2
	*     status: XYZ
	*     version: 0.1.2
	**/

	title: PropTypes.string.isRequired,
	btntext: PropTypes.string.isRequired,
	btntext: PropTypes.string.isRequired,
	btnIcon: PropTypes.string,

	tableTH: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			tightcol: PropTypes.bool,
		})
	).isRequired,

	components: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			version: PropTypes.string.isRequired,
		})
	).isRequired,

};

Table.defaultProps = {};

export default Table;
