import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//supports single term and single description
const DescriptionList = ({ descriptionListItems }) => {

	var dateFormat = ( dateTime ) => {
			const date = new Date( dateTime );
			const month = date.getMonth() + 1;
			const year = date.getFullYear();
			const day = date.getDate();
			const formattedDate =  day + "-" + month + "-" + year;
			return (<time dateTime={formattedDate}>{ dateTime }</time>)
	}


	return (
    <React.Fragment>
      <dl>
          {
            descriptionListItems.map(( listItem, i) => {
							return (
								<dt key={i} >{ listItem.term }
									<dd>{ listItem.render ? dateFormat( listItem.description ) : listItem.description }</dd>
								</dt>
							)
						})}
				</dl>
			</React.Fragment>
		)
	};

DescriptionList.propTypes = {
  descriptionListItems: PropTypes.arrayOf(PropTypes.shape({
		term: PropTypes.string,
		description: PropTypes.string,
		// Only have time usecase for now
		render: PropTypes.oneOf['time']
	}))

};

DescriptionList.defaultProps = {};

export default DescriptionList;
