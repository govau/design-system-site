import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * ContributorStatus - Used in the inprogress and suggested tables
 *
 * @param {string} status - The components position in workflow e.g. todo, done, doing
 */
const ContributorStatus = ( status ) => {
	const statusMap = {
		'todo': "To do",
		'done': "Done",
		'doing': "Doing",
	};

	return(
		<span class={ 'contributor-status contributor-status--' + status }>
			{ statusMap[ status ] }
		</span>
	);
}


ContributorStatus.propTypes = {
	/**
	 * module: buttons
	 */
	status: PropTypes.string,
};

export default ContributorStatus;
