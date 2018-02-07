import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The example component
 *
 * @disable-docs
 */
const Example = ({ _ID, _relativeURL, pagetitle, modules, example, alignment, theme }) => (
	<html>
	<head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />

		<title>{ pagetitle } - Australian Government Open Language for Design</title>

		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( `/assets/css/iframe/iframe.css`, _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( `/assets/css/_uikit/uikit.min.css`, _ID ) } />

		<script src={ _relativeURL( '/assets/js/header.js', _ID ) } />
	</head>
	<body className={
		`au-body example` +
		`${ alignment === 'center' ? ' example--center' : '' }` +
		`${ theme === 'dark' ? ' au-body--dark' : '' }`
	}>
		<div className='content'>
			{ example }
		</div>

		<script src={ _relativeURL( '/assets/js/_uikit/uikit.min.js', _ID ) } />
		<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
	</body>
	</html>
);

Example.propTypes = {
};

Example.defaultProps = {
	alignment: 'left'
};

export default Example;
