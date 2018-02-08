import React, { Fragment } from 'react';
import AUcardList from '../card-list';
import PropTypes from 'prop-types';


/**
 * The search component
 *
 * @disable-docs
 */
const Search = ({ _parseReact }) => {
	const output = {};
	output.moduleStart = ``;
	output.moduleMiddle = _parseReact(
		<AUcardList cards={ [{
			link: '##url##',
			rows: [{
				type: 'svg',
				title: '##name##',
				svg: '##svg##',
				description: '##description##',
				fullwidth: true,
			},
			{
				type: 'heading',
				headingSize: '3',
				text: '##name##',
			}]
		}] } appearance="shadow" columnSize="col-xs-6 col-sm-3" matchHeight={ true } />
	);
	output.moduleEnd = ``;

	output.progressStart = ``;
	output.progressMiddle = ``;
	output.progressEnd = ``;

	output.suggestionStart = ``;
	output.suggestionMiddle = ``;
	output.suggestionEnd = ``;

	return (
		<Fragment>
			*************
			{
				JSON.stringify( output )
			}
			*************
		</Fragment>
	);
};

Search.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Search.defaultProps = {};

export default Search;
