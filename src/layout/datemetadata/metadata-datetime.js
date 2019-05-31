import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 */
const DateMetadata = ({ _body, datePublished , dateModified, timePublished, timeModified}) => (
    <div>
    <dl>
    <dt>Date published:</dt>
    <dd><time dateTime={ new Date( timePublished ).toJSON() }>{ datePublished }</time></dd>
    <dt>Date modified:</dt>
    <dd><time dateTime={ new Date( timeModified ).toJSON() }>{ dateModified }</time></dd>
  </dl>
  { _body }
  </div>
);

DateMetadata.propTypes = {
	_body: PropTypes.node.isRequired,
	dateModified: PropTypes.string.isRequired,
	datePublished: PropTypes.string.isRequired,
  timePublished: PropTypes.string.isRequired,
  timeModified: PropTypes.string.isRequired,
  
};

DateMetadata.defaultProps = {};

export default DateMetadata;