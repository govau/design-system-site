import React, { Fragment }         from 'react';
import PropTypes                   from 'prop-types';
import  HeadingLeft from '../content/heading-left';


/**
 * The header component
 */
const HeadingList = ({ items, _relativeURL, _ID, _pages, _body }) => (

	<div>
		{_body}
		{
			items.map( ( item, i ) => {
				return (
					<HeadingLeft heading={item.heading} _body={item.text} />
				)
			})
		}
	</div>

);

HeadingList.propTypes = {

};

HeadingList.defaultProps = {};

export default HeadingList;
