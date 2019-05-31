import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DescriptionList = ({ descriptionListItems }) => (
    <div>
      <dl>
          
          {
            descriptionListItems.map((listItem, i) => {
              return (
                <dt key={i} >{ listItem.dt }<dd>{ listItem.dd }</dd></dt>
              )
            })}
        </dl>
      </div>




);





DescriptionList.propTypes = {
  descriptionListItems: PropTypes.arrayOf(PropTypes.shape({
		dt: PropTypes.string,
		dd: PropTypes.string,
	}))

};

DescriptionList.defaultProps = {};

export default DescriptionList;