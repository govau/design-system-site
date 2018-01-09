import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The example component
 */
const Example = ({ _ID, _relativeURL, pagetitle, modules, example }) => (
	<html>
	<head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />

		<title>{ pagetitle }</title>

		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( '/assets/css/style.css', _ID ) } />
		{
			modules.map( ( module, i ) => {
				if( Fs.existsSync( Path.normalize(`../../assets/css/${ module }.css`) ) ) {
					return (
						<link rel="stylesheet" href={ _relativeURL( `/assets/css/${ module }.css`, _ID ) } />
					);
				}
			})
		}

		<script src={ _relativeURL( '/assets/js/header.js', _ID ) } />
	</head>
	<body className="au-grid">

		<main className="main au-body container-fluid">
			<div className="row">
				<div className="grids col-md-12">
					{ example }
				</div>
			</div>
		</main>

		{
			modules.map( ( module, i ) => {
				if( Fs.existsSync( Path.normalize(`../../assets/js/${ module }.js`) ) ) {
					return (
						<link rel="stylesheet" href={ _relativeURL( `/assets/js/${ module }.js`, _ID ) } />
					);
				}
			})
		}
	</body>
	</html>
);

Example.propTypes = {
};

Example.defaultProps = {};

export default Example;
